<template>
  <div>
    <svg width="960" height="600"></svg>
  </div>
</template>
<script>
/* eslint-disable  no-param-reassign */
import * as d3 from 'd3';
// 准备数据
const nodes = [
  { id: '湖南邵阳', group: '头晕' },
  { id: '山东莱州', group: '头晕' },
  { id: '广东阳江', group: '体征' },
  { id: '山东枣庄', group: '部位' },
  { id: '泽', group: '头晕' },
  { id: '恒', group: '体征' },
  { id: '鑫', group: '部位' },
  { id: '明山', group: '头晕' },
  { id: '班长', group: '体征' },
];
const leng = [
  { group: '头晕' },
  { group: '部位' },
  { group: '体征' },
];
const edges = [
  { source: '湖南邵阳', target: '山东莱州' },
  { source: '山东莱州', target: '广东阳江' },
  { source: '山东枣庄', target: '泽' },
  { source: '明山', target: '泽' },
  { source: '班长', target: '明山' },
  { source: '明山', target: '泽' },
  { source: '恒', target: '鑫' },
  { source: '广东阳江', target: '班长' },
  { source: '恒', target: '泽' },
  { source: '明山', target: '班长' },
];
const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
// 新建一个力导向图
const forceSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter());
export default {
  data() {
    return {
      links: '',
      linksText: '',
      gs: '',
    };
  },
  mounted() {
    const marge = { top: 60, bottom: 60, left: 60, right: 60 };
    const svg = d3.select('svg');
    const width = svg.attr('width');
    const height = svg.attr('height');
    const g = svg.append('g')
      .attr('transform', `translate(${marge.top},${marge.left})`);
    svg.call(
      d3.zoom()
        .scaleExtent([0.1, 4])
        .on('zoom', () => { g.attr('transform', d3.event.transform); }),
    );
    svg.selectAll('rect')
      .data(leng)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', 20)
      .attr('class', 'legend')
      .attr('width', 25)
      .attr('height', 15)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('fill', d => colorScale(d.group));
    svg.selectAll('.text')
      .data(leng)
      .enter()
      .append('text')
      .attr('class', 'Text')
      .attr('x', (d, i) => 25 + i * 70)
      .attr('y', 32)
      .attr('transform', 'translate(5)')
      .text(d => d.group);
    forceSimulation.nodes(nodes)
      .on('tick', this.ticked);// 这个函数很重要，后面给出具体实现和说明
    // 生成边数据
    forceSimulation.force('link')
      .links(edges)
      .distance(() => 200);
    // 设置图形的中心位置
    forceSimulation.force('center')
      .x(width / 2)
      .y(height / 2);
    // 在浏览器的控制台输出
    console.log(nodes);
    console.log(edges);
 
    // 有了节点和边的数据后，我们开始绘制
    // 绘制边
    this.links = g.append('g')
      .selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1);
    // 绘制节点
    // 老规矩，先为节点和节点上的文字分组
    this.gs = g.selectAll('.circleText')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', (d) => {
        const cirX = d.x;
        const cirY = d.y;
        return `translate(${cirX},${cirY})`;
      })
      .call(d3.drag()
        .on('start', this.started)
        .on('drag', this.dragged)
        .on('end', this.ended));
 
    // 绘制节点
    this.gs.append('circle')
      .attr('class', 'hover')
      .attr('r', 15)
      .attr('fill', d => colorScale(d.group))
      .on('mouseover', function () {
        d3.select(this)
          .attr('r', 17)
          .attr('stroke', '#D3D3D3')
          .attr('stroke-width', 1);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(300)
          .attr('fill', d => colorScale(d.group))
          .attr('r', 15)
          .attr('stroke', 'none');
      });
 
 
    // 文字
    this.gs.append('text')
      .attr('x', -15)
      .attr('y', -28)
      .attr('dy', 10)
      .attr('fill', d => colorScale(d.group))
      .text(d => d.id);
  },
  methods: {
    ticked() {
      this.links
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      this.gs
        .attr('transform', d => `translate(${d.x},${d.y})`);
    },
    started(d) {
      if (!d3.event.active) {
        forceSimulation.alphaTarget(0.8).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    },
    dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    },
    ended(d) {
      if (!d3.event.active) {
        forceSimulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    },
  },
};
</script>
<style scoped>
  .title { background: red;}
  .text{ font-size: 12px;}
  .hover:hover{ border: 5px solid #ccc;}
  .legend {
    position: fixed;
    font: 10px sans-serif;
    box-shadow: 2px 2px 1px #888;
  }
</style>