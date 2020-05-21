<template>
  <div class="card-container">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="折线图">
        <div class="chart" id="myChart"></div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="面积图">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="柱状图">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  },
  
};
</script>
<style scope>
/* tab */
.card-container {
    background: #f5f5f5;
    overflow: hidden;
    padding: 24px;
    height: 100%;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
    margin-top: -16px;
}
.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
}
.card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
}
.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
}
.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
    font-weight: normal;
    border-color: #fff;
    background: #fff;
}
/* chart */
.chart{
  height : 250px;
}
</style>
