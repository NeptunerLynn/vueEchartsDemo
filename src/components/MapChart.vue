<template>
    <div class="dashboard">
        <div class="header">
            Dashboard
            <span class="current-time">当前时间 : {{date}}</span>
        </div>
        <a-row>
            <a-col :span="6">
                <div class="segment">
                    <div class="decoration barchart">
                        
                    </div>
                </div>
                <div class="segment">
                    <div class="decoration lineChart"></div>
                </div>
                <div class="segment">
                    <div class="decoration"></div>
                </div>
            </a-col>
            <a-col :span="12">
                col-12
            </a-col>
            <a-col :span="6">
                <div class="segment">
                    <div class="decoration"></div>
                </div>
                <div class="segment">
                    <div class="decoration"></div>
                </div>
                <div class="segment">
                    <div class="decoration"></div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            date : new Date()
        }
    },
    mounted(){
        this.barChart();
    },
    methods: {
         barChart(){
            let myChart = this.$echarts.init(document.getElementsByClassName("barchart")[0])
            myChart.setOption({
                title : {
                    text : "柱状图",
                    textStyle : {
                        color : '#fff',
                        fontSize : 16,
                        fontWeight : 'normal'
                    },
                    left : 'center'
                },
                tooltip : {
                    trigger : 'item'
                },
                grid : {
                    left : 40,
                    right : 15,
                    top : 40,
                    bottom : 20
                },
                xAxis : {
                    type : 'category',
                    axisTick : {show : false},
                    splitLine : {
                        lineStyle : {
                            color : '#1E2553',
                            width : 1
                        }
                    },
                    axisLabel : {
                        interval : 0,
                        color : "#7B8098",
                        fontSize : 12    
                    },
                    data : ['旅游行业','教育培训','游戏行业','医疗行业','电商行业','社交行业','金融行业']
                },
                color : '#2F89CF',
                yAxis : {
                    splitNumber : 3,
                    axisLine : {show : false},
                    splitLine : {
                        lineStyle : {
                            color : '#1E2553',
                            width : 1
                        }
                    },
                    axisTick : {show : false},
                    axisLabel : {
                        color : "#7B8098",
                        fontSize : 12    
                    },
                    type : 'value'
                },
                series : [{
                    data : [20,50,110,220,560,432,333],
                    type : 'bar',
                    barWidth : 25,
                     itemStyle: {
                        normal: {
                            //柱形图圆角，初始化效果
                            barBorderRadius:6
                        }
                    }
                }]
            });
         },
         lineChart(){

         }
    }
    
}
</script>
<style scope>
    .dashboard{
        height:100%;
        width: 100%;
        padding: 0 10px;
        background-image: radial-gradient(#021E8C,#00073D);
    }
    .header{
        font-weight: bold;
        padding: 10px 0;
        color: #fff;
        font-size: 25px;
        text-align: center;
        margin: 0 -10px;
        position: relative;
        background: rgba(143, 141, 141, 0.1);
    }
    .current-time{
        position: absolute;
        font-size: 14px;
        font-weight: normal;
        right: 10px;
        top: 25px;;
    }
    .ant-row{
        height:100%;
        margin-top: -57px;
        padding-top: 58px;
    }
    .ant-col{
        height:100%;
        padding-top: 10px;
    }
    .segment{
        margin-bottom: 10px;
        background: rgba(143, 141, 141, 0.1);
        padding: 20px;
        position: relative; 
        height: 31%
    }
    .segment .decoration{
        position: absolute; 
        padding : 10px;
        top: 0;
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: linear-gradient(to left, #029DAE, #029DAE) left top no-repeat, 
                    linear-gradient(to bottom, #029DAE, #029DAE) left top no-repeat, 
                    linear-gradient(to left, #029DAE, #029DAE) right top no-repeat,
                    linear-gradient(to bottom, #029DAE, #029DAE) right top no-repeat, 
                    linear-gradient(to left, #029DAE, #029DAE) left bottom no-repeat,
                    linear-gradient(to bottom, #029DAE, #029DAE) left bottom no-repeat,
                    linear-gradient(to left, #029DAE, #029DAE) right bottom no-repeat,
                    linear-gradient(to left, #029DAE, #029DAE) right bottom no-repeat;
        background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
    }
</style>