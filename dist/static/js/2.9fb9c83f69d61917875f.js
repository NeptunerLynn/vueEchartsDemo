webpackJsonp([2],{ABj6:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=this;const a=[{title:"姓名",dataIndex:"name",key:"name",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(e,n)=>n.name.toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>{t.searchInput.focus()},10)}},{title:"性别",dataIndex:"gender",key:"gender",filters:[{text:"男",value:0},{text:"女",value:1}]},{title:"年龄",dataIndex:"age",key:"age"},{title:"标签",dataIndex:"tags",key:"tags",scopedSlots:{customRender:"tags"}},{title:"地址",dataIndex:"address",key:"address",scopedSlots:{filterDropdown:"filterDropdown",filterIcon:"filterIcon",customRender:"customRender"},onFilter:(e,n)=>n.address.toString().toLowerCase().includes(e.toLowerCase())},{title:"操作",dataIndex:"",key:"x",scopedSlots:{customRender:"action"}}];var s={data:()=>({loading:!1,data:[],columns:a,searchText:"",searchInput:null,searchedColumn:""}),methods:{onSearch(e){this.loading=!0,this.getData(e)},async getData(e){const n=await this.$http.get(`/api/v1/getSearchResult?search_text=${e}`);this.data=[...n.data],this.loading=!1},onClick({key:e}){console.log(e)},handleSearch(e,n,r){n(),this.searchText=e[0],this.searchedColumn=r},handleReset(e){e(),this.searchText=""}}},o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"table-content"},[r("a-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入查询内容","enter-button":""},on:{search:e.onSearch}}),e._v(" "),r("a-table",{attrs:{columns:e.columns,"data-source":e.data,loading:e.loading},scopedSlots:e._u([{key:"filterDropdown",fn:function(n){var t=n.setSelectedKeys,a=n.selectedKeys,s=n.confirm,o=n.clearFilters,l=n.column;return r("div",{staticStyle:{padding:"8px"}},[r("a-input",{directives:[{name:"ant-ref",rawName:"v-ant-ref",value:function(n){return e.searchInput=n},expression:"c => (searchInput = c)"}],staticStyle:{width:"188px","margin-bottom":"8px",display:"block"},attrs:{placeholder:"搜索 "+l.title,value:a[0]},on:{change:function(e){return t(e.target.value?[e.target.value]:[])},pressEnter:function(){return e.handleSearch(a,s,l.dataIndex)}}}),e._v(" "),r("a-button",{staticStyle:{width:"90px","margin-right":"8px"},attrs:{type:"primary",icon:"search",size:"small"},on:{click:function(){return e.handleSearch(a,s,l.dataIndex)}}},[e._v("\n                搜索\n            ")]),e._v(" "),r("a-button",{staticStyle:{width:"90px"},attrs:{size:"small"},on:{click:function(){return e.handleReset(o)}}},[e._v("\n                清空\n            ")])],1)}},{key:"filterIcon",fn:function(e){return r("a-icon",{style:{color:e?"#108ee9":void 0},attrs:{type:"search"}})}},{key:"tags",fn:function(n){return r("span",{},e._l(n,function(n){return r("a-tag",{key:n,attrs:{color:"loser"===n?"volcano":n.length>5?"geekblue":"green"}},[e._v("\n                "+e._s(n.toUpperCase())+"\n            ")])}),1)}},{key:"gender",fn:function(n){return r("span",{},[e._v(e._s(e.gerder))])}},{key:"action",fn:function(n){return r("span",{},[r("a",[e._v("查看 一 "+e._s(n.name))]),e._v(" "),r("a-divider",{attrs:{type:"vertical"}}),e._v(" "),r("a",[e._v("编辑")]),e._v(" "),r("a-divider",{attrs:{type:"vertical"}}),e._v(" "),r("a-dropdown",{attrs:{trigger:["click"]}},[r("a",{staticClass:"ant-dropdown-link",on:{click:function(e){return e.preventDefault()}}},[e._v("\n                更多操作 "),r("a-icon",{attrs:{type:"down"}})],1),e._v(" "),r("a-menu",{attrs:{slot:"overlay"},on:{click:e.onClick},slot:"overlay"},[r("a-menu-item",{key:"1"},[e._v("\n                        添加标签\n                    ")]),e._v(" "),r("a-menu-item",{key:"2"},[e._v("\n                        复制新增\n                    ")]),e._v(" "),r("a-menu-item",{key:"3"},[e._v("\n                        删除\n                    ")])],1)],1)],1)}},{key:"expandedRowRender",fn:function(n){return r("p",{staticStyle:{margin:"0"}},[e._v("\n            "+e._s(n.description)+"\n        ")])}},{key:"customRender",fn:function(n,t,a,s){return[e.searchText&&e.searchedColumn===s.dataIndex?r("span",[e._l(n.toString().split(new RegExp("(?<="+e.searchText+")|(?="+e.searchText+")","i")),function(n,t){return[n.toLowerCase()===e.searchText.toLowerCase()?r("mark",{key:t,staticClass:"highlight"},[e._v(e._s(n))]):[e._v(e._s(n))]]})],2):[e._v("\n                "+e._s(n)+"\n            ")]]}}])})],1)};o._withStripped=!0;var l={render:o,staticRenderFns:[]},c=l;var i=!1;var d=r("C7Lr")(s,c,!1,function(e){i||r("Aaa6")},null,null);d.options.__file="src/components/Table.vue";n.default=d.exports},Aaa6:function(e,n,r){var t=r("aM+I");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("FIqI")("15a3a2a6",t,!1,{})},"aM+I":function(e,n,r){(e.exports=r("UTlt")(!0)).push([e.i,"\n.table-content{\n    min-height: 600px;\n    background: #fff;\n}\n.search-box{\n    margin-bottom: 20px;\n}\n.highlight {\nbackground-color: rgb(255, 192, 105);\npadding: 0px;\n}\n","",{version:3,sources:["D:/demo/ChartsDemo/src/components/src/components/Table.vue"],names:[],mappings:";AA8MA;IACA,kBAAA;IACA,iBAAA;CACA;AACA;IACA,oBAAA;CACA;AACA;AACA,qCAAA;AACA,aAAA;CACA",file:"Table.vue",sourcesContent:['<template>\r\n    <div class="table-content">\r\n        <a-input-search class="search-box" placeholder="请输入查询内容" enter-button @search="onSearch" />\r\n\r\n        <a-table :columns="columns" :data-source="data" :loading="loading">\r\n            <div \r\n                slot="filterDropdown"\r\n                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"\r\n                style="padding: 8px"\r\n            >\r\n                <a-input\r\n                    v-ant-ref="c => (searchInput = c)"\r\n                    :placeholder="`搜索 ${column.title}`"\r\n                    :value="selectedKeys[0]"\r\n                    style="width: 188px; margin-bottom: 8px; display: block;"\r\n                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"\r\n                    @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"\r\n                />\r\n                <a-button\r\n                    type="primary"\r\n                    icon="search"\r\n                    size="small"\r\n                    style="width: 90px; margin-right: 8px"\r\n                    @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"\r\n                >\r\n                    搜索\r\n                </a-button>\r\n                <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">\r\n                    清空\r\n                </a-button>\r\n            </div>\r\n            <a-icon\r\n                slot="filterIcon"\r\n                slot-scope="filtered"\r\n                type="search"\r\n                :style="{ color: filtered ? \'#108ee9\' : undefined }"\r\n            />\r\n            <span slot="tags" slot-scope="tags">\r\n                <a-tag\r\n                    v-for="tag in tags"\r\n                    :key="tag"\r\n                    :color="tag === \'loser\' ? \'volcano\' : tag.length > 5 ? \'geekblue\' : \'green\'"\r\n                >\r\n                    {{ tag.toUpperCase() }}\r\n                </a-tag>\r\n            </span>\r\n            <span slot="gender" slot-scope="gender">{{gerder}}</span>\r\n            <span slot="action" slot-scope="record">\r\n                <a>查看 一 {{ record.name }}</a>\r\n                <a-divider type="vertical" />\r\n                <a>编辑</a>\r\n                <a-divider type="vertical" />\r\n                \x3c!-- <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a> --\x3e\r\n                <a-dropdown :trigger="[\'click\']">\r\n                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">\r\n                    更多操作 <a-icon type="down" />\r\n                    </a>\r\n                    <a-menu slot="overlay" @click="onClick">\r\n                        <a-menu-item key="1">\r\n                            添加标签\r\n                        </a-menu-item>\r\n                        <a-menu-item key="2">\r\n                            复制新增\r\n                        </a-menu-item>\r\n                        <a-menu-item key="3">\r\n                            删除\r\n                        </a-menu-item>\r\n                    </a-menu>\r\n                </a-dropdown>\r\n            </span>\r\n            <p slot="expandedRowRender" slot-scope="record" style="margin: 0">\r\n                {{ record.description }}\r\n            </p>\r\n             <template slot="customRender" slot-scope="text, record, index, column">\r\n                <span v-if="searchText && searchedColumn === column.dataIndex">\r\n                    <template\r\n                    v-for="(fragment, i) in text\r\n                        .toString()\r\n                        .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, \'i\'))"\r\n                    >\r\n                    <mark\r\n                        v-if="fragment.toLowerCase() === searchText.toLowerCase()"\r\n                        :key="i"\r\n                        class="highlight"\r\n                        >{{ fragment }}</mark\r\n                    >\r\n                    <template v-else>{{ fragment }}</template>\r\n                    </template>\r\n                </span>\r\n                <template v-else>\r\n                    {{ text }}\r\n                </template>\r\n            </template>\r\n        </a-table>\r\n    </div>\r\n</template>\r\n<script>\r\n\r\nconst columns = [\r\n    {\r\n        title: \'姓名\', \r\n        dataIndex: \'name\', \r\n        key: \'name\', \r\n        scopedSlots: {\r\n            filterDropdown: \'filterDropdown\',\r\n            filterIcon: \'filterIcon\',\r\n            customRender: \'customRender\',\r\n        },\r\n        onFilter: (value, record) =>\r\n            record.name\r\n              .toString()\r\n              .toLowerCase()\r\n              .includes(value.toLowerCase()),\r\n        onFilterDropdownVisibleChange: visible => {\r\n            if (visible) {\r\n              setTimeout(() => {\r\n                this.searchInput.focus();\r\n              }, 10);\r\n            }\r\n        },\r\n    },\r\n    {\r\n        title: \'性别\',\r\n        dataIndex: \'gender\',\r\n        key: \'gender\',\r\n        filters: [\r\n            { text: \'男\', value: 0 },\r\n            { text: \'女\', value: 1 },\r\n        ],\r\n    },\r\n    {\r\n        title: \'年龄\',\r\n        dataIndex: \'age\',\r\n        key: \'age\'\r\n    },\r\n    {\r\n        title: \'标签\',\r\n        dataIndex: \'tags\',\r\n        key: \'tags\',\r\n        scopedSlots: {\r\n            customRender: \'tags\'\r\n        }\r\n    },\r\n    {\r\n        title: \'地址\',\r\n        dataIndex: \'address\',\r\n        key: \'address\',\r\n        scopedSlots: {\r\n            filterDropdown: \'filterDropdown\',\r\n            filterIcon: \'filterIcon\',\r\n            customRender: \'customRender\',\r\n        },\r\n        onFilter: (value, record) => \r\n        record.address\r\n              .toString()\r\n              .toLowerCase()\r\n              .includes(value.toLowerCase()),\r\n    },\r\n    {\r\n        title: \'操作\',\r\n        dataIndex: \'\',\r\n        key: \'x\',\r\n        scopedSlots: {\r\n            customRender: \'action\'\r\n        }\r\n    },\r\n];\r\n\r\n\r\nexport default {\r\n  data() {\r\n    return {\r\n        loading : false,\r\n        data : [],\r\n        columns,\r\n        searchText: \'\',\r\n        searchInput: null,\r\n        searchedColumn: \'\'\r\n    };\r\n  },\r\n  methods : {\r\n    onSearch(value){\r\n        this.loading = true;\r\n        this.getData(value);\r\n    },\r\n    async getData(value){\r\n        const res = await this.$http.get(`/api/v1/getSearchResult?search_text=${value}`);\r\n        this.data = [...res.data];\r\n        this.loading = false;\r\n    },\r\n    onClick({ key }) {\r\n      console.log(key);\r\n    },\r\n    handleSearch(selectedKeys, confirm, dataIndex) {\r\n      confirm();\r\n      this.searchText = selectedKeys[0];\r\n      this.searchedColumn = dataIndex;\r\n    },\r\n    handleReset(clearFilters) {\r\n      clearFilters();\r\n      this.searchText = \'\';\r\n    },\r\n  }\r\n};\r\n<\/script>\r\n<style scope>\r\n    .table-content{\r\n        min-height: 600px;\r\n        background: #fff;\r\n    }\r\n    .search-box{\r\n        margin-bottom: 20px;\r\n    }\r\n    .highlight {\r\n    background-color: rgb(255, 192, 105);\r\n    padding: 0px;\r\n    }\r\n</style>'],sourceRoot:""}])}});
//# sourceMappingURL=2.9fb9c83f69d61917875f.js.map