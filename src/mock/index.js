import Mock from 'mockjs'
import barChartData from './data.js'
import tableList from './table.js'
Mock.mock('/api/v1/getBarChartData', 'get', () => barChartData.barChartData)
Mock.mock(RegExp('/api/v1/getSearchResult?' + '.*'), 'get', (options) => {
    if(options.url.split("?")[1].split("=")[1]){
        return [
            {
                code : -1,
                msg : "网络通信错误"
            }
          ]
    }else{
        return tableList.tableData
    }
})