const chartData = {
    bar1 : [],
    bar2 : [],
    bar3 : [],
    line : []
};
let i = 0;
    while(i < 50){
      let nowa = new Date().getTime() + (i * 1000);
      chartData.bar1.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      chartData.bar2.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      chartData.bar3.push({
        name : nowa,
        value : [nowa,parseInt(Math.random() * 100)]
      });
      chartData.line.push({
        name : nowa,
        value : [nowa,80 + parseInt(Math.random()  * 20)]
      });
      i++;
    }
const barChartData = [
    {
      code: 200,
      data: chartData
        // code : -1,
        // msg : "网络通信错误"
    }
  ]
  const res = {
    barChartData
  }
  export default res