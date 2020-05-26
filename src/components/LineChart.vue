<template>
  <div class="card-container">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="图形1">
        <div class="chart" id="myChart"></div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="图形2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="图形3">
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
    return {
      chartData : {}
    }
  },
  created(){
    // const res = this.$http.get("/api/v1/getBarChartData");
    // console.log(res);
    let i = 0;
    while(i < 50){
      let nowa = new Date().getTime() + (i * 1000);
      this.chartData.bar1.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      this.chartData.bar2.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      this.chartData.bar3.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      this.chartData.line.push({
        name : nowa,
        value : [nowa,80 + parseInt(Math.random()  * 20)]
      });
      i++;
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    drawLine(){
        let Max = Math.max(...this.chartData.bar1.map((v,i) => (v.value[1] || 0) + (this.chartData.bar2[i].value[1] || 0) + (this.chartData.bar3[i].value[1] || 0)));
        console.log(Max);
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("myChart"))
        // 绘制图表
        myChart.setOption({
            tooltip : {
              trigger : "axis",
              axisPointer : {
                type : "shadow"
              }
            },
            color : [this.$store.state.colorList[this.$store.state.themeId],"#ff6455","#ffae54","#20e9b7"],
            legend : {
              data : ["柱1","柱2","柱3","线"],
              itemWidth : 14
            },
            grid : {
              left : 50,
              right : 60,
              top : 55,
              bottom : 20
            },
            xAxis : {
              type : "time",
              axisTick : {show : false}
            },
            yAxis : [
              {
                type : "value",
                name : "柱",
                min : 0,
                max : value => {
                  Max = value.max > 0 ? value.max : 0;
                  return Max % 2 == 0 ? Max || 2 : Max + 1;
                },
                splitNumber : 2,
                interval : Max % 2 == 0 ? Max / 2 || 1 : (Max + 1) / 2,
                axisLine : {show : false},
                axisTick : {show : false}
              },
              {
                type : "value",
                name : "线",
                min : 0,
                max : 100,
                splitNumber : 2,
                interval : 50,
                axisLine : {show : false},
                axisTick : {show : false}
              }
            ],
            series : [
              {
                name : "柱1",
                type : "bar",
                stack : "总量",
                barWidth : 8,
                data : this.chartData.bar1
              },
              {
                name : "柱2",
                type : "bar",
                stack : "总量",
                barWidth : 8,
                data : this.chartData.bar2
              },
              {
                name : "柱3",
                type : "bar",
                stack : "总量",
                barWidth : 10,
                data : this.chartData.bar3
              },
              {
                name : "线",
                type : "line",
                lineStyle : {
                  width : 2
                },
                smooth : true,
                yAxisIndex : 1,
                symbolSize : 5,
                barWidth : 10,
                data : this.chartData.line
              }
            ]
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
