webpackJsonp([2],{mqZH:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:()=>({chartData:{bar1:[],bar2:[],bar3:[],line:[]}}),beforeCreate(){},created(){this.getData()},methods:{async getData(){const a=await this.$http.get("/api/v1/getBarChartData");this.chartData=Object.assign({},a.data),this.drawLine()},callback(a){console.log(a)},drawLine(){let a=Math.max(...this.chartData.bar1.map((a,t)=>(a.value[1]||0)+(this.chartData.bar2[t].value[1]||0)+(this.chartData.bar3[t].value[1]||0)));this.$echarts.init(document.getElementById("myChart")).setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},color:[this.$store.state.colorList[this.$store.state.themeId],"#ff6455","#ffae54","#20e9b7"],legend:{data:["柱1","柱2","柱3","线"],itemWidth:14},grid:{left:50,right:60,top:55,bottom:20},xAxis:{type:"time",axisTick:{show:!1}},yAxis:[{type:"value",name:"柱",min:0,max:t=>(a=t.max>0?t.max:0)%2==0?a||2:a+1,splitNumber:2,interval:a%2==0?a/2||1:(a+1)/2,axisLine:{show:!1},axisTick:{show:!1}},{type:"value",name:"线",min:0,max:100,splitNumber:2,interval:50,axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"柱1",type:"bar",stack:"总量",barWidth:8,data:this.chartData.bar1},{name:"柱2",type:"bar",stack:"总量",barWidth:8,data:this.chartData.bar2},{name:"柱3",type:"bar",stack:"总量",barWidth:10,data:this.chartData.bar3},{name:"线",type:"line",lineStyle:{width:2},smooth:!0,yAxisIndex:1,symbolSize:5,barWidth:10,data:this.chartData.line}]})}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"card-container"},[e("a-tabs",{attrs:{type:"card"},on:{change:a.callback}},[e("a-tab-pane",{key:"1",attrs:{tab:"图形1"}},[e("div",{staticClass:"chart",attrs:{id:"myChart"}})]),a._v(" "),e("a-tab-pane",{key:"2",attrs:{tab:"图形2"}},[e("p",[a._v("Content of Tab Pane 2")]),a._v(" "),e("p",[a._v("Content of Tab Pane 2")]),a._v(" "),e("p",[a._v("Content of Tab Pane 2")])]),a._v(" "),e("a-tab-pane",{key:"3",attrs:{tab:"图形3"}},[e("p",[a._v("Content of Tab Pane 3")]),a._v(" "),e("p",[a._v("Content of Tab Pane 3")]),a._v(" "),e("p",[a._v("Content of Tab Pane 3")])])],1)],1)},staticRenderFns:[]};var r=e("C7Lr")(i,s,!1,function(a){e("uNl9")},null,null);t.default=r.exports},uNl9:function(a,t){}});