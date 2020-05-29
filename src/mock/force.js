const nodes = [
  { id:1, name: '地区1', category:0},
  { id:2, name: '地区2', category:0},
  { id:3, name: '地区3', category:0},
  { id:'c_1', name: '湖南邵阳', category:1},
  { id:'c_2', name: '山东莱州', category:1},
  { id:'c_3', name: '广东阳江', category:1},
  { id:'c_4', name: '山东枣庄', category:1},
  { id:'c_5', name: '四川成都', category:1},
  { id:'c_6', name: '四川绵阳', category:1},
  { id:'c_7', name: '广西南宁', category:1},
  { id:'c_8', name: '重庆奉节', category:1},
  { id:'c_9', name: '湖北宜宾', category:1},
  { id:'c_10', name: '安徽徐州', category:1},
  { id:'c_11', name: '江苏盐城', category:1},
  { id:'c_12', name: '江苏无锡', category:1},
  { id:'c_13', name: '河南安阳', category:1},
  { id:'c_14', name: '河南南阳', category:1},
  { id:'c_15', name: '湖南郴州', category:1},
  { id:'c_16', name: '广东肇庆', category:1},
];
const links = [
  { target: 'c_1', source: 1 },
  { target: 'c_2', source: 2 },
  { target: 'c_3', source: 1 },
  { target: 'c_4', source: 2 },
  { target: 'c_5', source: 1 },
  { target: 'c_6', source: 2 },
  { target: 'c_7', source: 3 },
  { target: 'c_8', source: 1 },
  { target: 'c_9', source: 2 },
  { target: 'c_10', source: 1 },
  { target: 'c_11', source: 1 },
  { target: 'c_12', source: 3 },
  { target: 'c_13', source: 3 },
  { target: 'c_14', source: 2 },
  { target: 'c_15', source: 1 },
  { target: 'c_16', source: 2 },
];
const data = {
    nodes,
    links,
}
const foreData = [
    {
      code: 200,
      data: data
    }
  ]
  const res = {
    foreData,
  }
  export default res