import Mock from 'mockjs'
import Data from './data.js'
Mock.mock('/api/v1/getBarChartData', 'get', () => Data.barChartData)