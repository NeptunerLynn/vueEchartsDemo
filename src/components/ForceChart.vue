<template>
    <div id="forceChart">
        <div class="chart" ref="chart">

        </div>
    </div>
</template>
<script>
import * as d3 from 'd3';

const forceSimulation = d3.forceSimulation()
    // .force('link', d3.forceLink().distance(d => {
    //     return 280
                    // if(d.target){
                    //     d.target.map(item => {
                    //         return 280 - (i.type_index + 1) * 20;
                    //     })
                    // }else{
                    //     return 10;
                    // }
                // }))
    .force('link', d3.forceLink().id(d => d.id))
    .force('charge', d3.forceManyBody(-1500))
    .force('center', d3.forceCenter());

export default {
    data(){
        return {
            color : ['#45B3C2','#6BD1A8','#2CBD83','#F0B652','#1E2340','#F0D3D5','#5BCAD7','#D25B61','#D7A856','#4F415E','#948376','#F47181','#61848D','#39A29E','#A8D6AF','#584E51','#8FC1BE','#008B7E','#B7D9A5','#002842','#59B5DA'],
            width : '',
            height : '',
            container : '',
            svg : '',
            checked : false,
            data : [],
            links : '',
            nodes : ''
        }
    },
    mounted(){
        this.getData();
    },
    methods : {
         async getData(){
            const res = await this.$http.get("/api/v1/getForceData");
            this.data = Object.assign({},res.data);
            this.container = this.$refs.chart;
            this.$nextTick(this.initChart);
        },
        initChart(){
            this.width = this.container.offsetWidth;
            this.height = this.container.offsetHeight;
            this.svg = d3.select(".chart")
                        .append('svg')
                        .attr('width',this.width)
                        .attr('height',this.height);
            
            this.svg.append('rect')
                    .attr('fill','transparent')
                    .attr('width',this.width)
                    .attr('height',this.height)
                    .on('click',()=>{
                        if(this.checked){
                            console.log(被选中);
                        }
                    });

            forceSimulation.nodes(this.data.nodes)
                .on('tick', this.ticked);
                
            forceSimulation.force('link')
                .links(this.data.links)
                .distance(() => 120);

            forceSimulation.force('center')
                .x(this.width / 2)
                .y(this.height / 2);
            
            this.links = this.svg.selectAll('.link')
                .data(this.data.links)
                .enter()
                .append('line')
                .attr('class','link')
                .attr('stroke', '#ccc')
                // .attr('stroke', d => d.color)
                .attr('stroke-width', 1);
                
            this.nodes = this.svg.selectAll('.node')
                        .data(this.data.nodes)
                        .enter()
                        .append('g')
                        .attr('class',d => {
                            if(d.category == 0){
                                return 'node group';
                            }else{
                                return 'node'
                            }
                        })
            
            // 中心虚线框
            const groupCircle = this.svg.selectAll(".group")
                                .append('svg:circle')
                                .attr('r',50)
                                .attr('fill', 'transparent')
                                .attr('stroke-width',2)
                                .attr('stroke-dasharray','2,2')
                                .attr('stroke',"#ccc")
            
            const nodeCircle = this.nodes.append('svg:circle')
                                .attr('class',d => {
                                    if(d.category == 0){
                                        return 'groupCircle';
                                    }else{
                                        return ''
                                    }
                                })
                                .attr('stroke',d => {
                                    if(d.category == 0){
                                        return '#00b0bc';
                                    }else{
                                        // return d.color
                                        return '#ccc'
                                    }
                                })
                                .attr('fill',d => {
                                    if(d.category == 0){
                                        return this.color[0];
                                    }else{
                                        // return d.color
                                        return '#ccc'
                                    }
                                })
                                .attr('r',d => {
                                    if(d.category == 0){
                                        return 45;
                                    }else{
                                        return 5
                                    }
                                })
                                .attr('curdor','pointer')
                                .attr('stroke-width', 1.5)
                                .call(d3.drag()
                                    .on('start', this.started)
                                    .on('drag', this.dragged)
                                    .on('end', this.ended)
                                )
                                .on('mousemove', d => {
                                    console.log(d);
                                })
                                .on('mouseout', d => {
                                    console.log(d);
                                });
            const nodeText = this.nodes.append('text')
                                .attr('class','nodeText')
                                .attr('dx',d => {
                                    if(d.category == 0){
                                        return 0;
                                    }else{
                                        return 10
                                    }
                                })
                                .attr('dy',5)
                                .attr('text-anchor',d => {
                                    if(d.category == 0){
                                        return "middle";
                                    }else{
                                        return "left"
                                    }
                                })
                                .attr('fill',d => {
                                    if(d.category == 0){
                                        return "#fff";
                                    }else{
                                        return "#ccc"
                                    }
                                })
                                .style("pointer-events",d => {
                                    if(d.category == 0){
                                        return "none";
                                    }else{
                                        return "auto"
                                    }
                                })
                                .attr('font-size','12px')
                                .attr('cursor','pointer')
                                .text(d => d.name);
        },
        ticked() {
            this.links
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            this.nodes
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
    }
}
</script>
<style scope>
    #forceChart{
        background: #fff;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        padding: 70px 20px 20px 20px;
        z-index: -1;
    }
    .chart{
        height: 100%;
    }
</style>