<template>
    <div class="table-content">
        <a-input-search class="search-box" placeholder="请输入查询内容" enter-button @search="onSearch"/>
        <a-table :columns="columns" :data-source="data" :loading="loading" :row-selection="rowSelection" @change="onChange">
            <div 
                slot="filterDropdown"
                slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
                style="padding: 8px"
            >
                <a-input
                    v-ant-ref="c => (searchInput = c)"
                    :placeholder="`搜索 ${column.title}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block;"
                    @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                />
                <a-button
                    type="primary"
                    icon="search"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
                >
                    搜索
                </a-button>
                <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
                    清空
                </a-button>
            </div>
            <a-icon
                slot="filterIcon"
                slot-scope="filtered"
                type="search"
                :style="{ color: filtered ? '#108ee9' : undefined }"
            />
            <span slot="gender" slot-scope="gender">
                {{gender | genderText}}
            </span>
            <span slot="tags" slot-scope="tags">
                <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                    {{ tag.toUpperCase() }}
                </a-tag>
            </span>
            <span slot="action" slot-scope="record">
                <a>查看 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>编辑</a>
                <a-divider type="vertical" />
                <!-- <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a> -->
                <a-dropdown :trigger="['click']">
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    更多操作 <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay" @click="onClick">
                        <a-menu-item key="1">
                            添加标签
                        </a-menu-item>
                        <a-menu-item key="2">
                            复制新增
                        </a-menu-item>
                        <a-menu-item key="3">
                            删除
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </span>
            <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
                {{ record.description }}
            </p>
             <template slot="customRender" slot-scope="text, record, index, column">
                <span v-if="searchText && searchedColumn === column.dataIndex">
                    <template
                    v-for="(fragment, i) in text
                        .toString()
                        .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                    >
                    <mark
                        v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                        :key="i"
                        class="highlight"
                        >{{ fragment }}</mark
                    >
                    <template v-else>{{ fragment }}</template>
                    </template>
                </span>
                <template v-else>
                    {{ text }}
                </template>
            </template>
        </a-table>
    </div>
</template>
<script>
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
const columns = [
    {
        title: '姓名', 
        dataIndex: 'name', 
        key: 'name', 
        scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
        },
        onFilter: (value, record) =>
            record.name
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 10);
            }
        },
    },
    {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        scopedSlots: {
            customRender: 'gender'
        },
        filters : [
            {
                text : "男",
                value : 1
            },
            {
                text : "女",
                value : 2
            }
        ],
        // filteredValue: filteredInfo.gender || null,
        onFilter: (value, record) => record.gender === value,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        scopedSlots: {
            customRender: 'tags'
        }
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
        },
        onFilter: (value, record) => 
        record.address
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
    },
    {
        title: '操作',
        dataIndex: '',
        key: 'x',
        scopedSlots: {
            customRender: 'action'
        }
    },
];

export default {
    data() {
        return {
            loading : false,
            data : [],
            columns,
            searchText: '',
            searchInput: null,
            searchedColumn: '',
            rowSelection
        };
    },
    filters:{
        genderText : (value)=>{
            switch (value){
                case 1:
                    return "男";
                case 2:
                    return "女";
                default:
                    return "未知";
            }
        }
    },
    methods : {
        onSearch(value){
            this.loading = true;
            this.getData(value);
        },
        async getData(value){
            const res = await this.$http.get(`/api/v1/getSearchResult?search_text=${value}`);
            this.data = [...res.data];
            this.loading = false;
        },
        onClick({ key }) {
            console.log(key);
        },
        handleSearch(selectedKeys, confirm, dataIndex) {
            confirm();
            this.searchText = selectedKeys[0];
            this.searchedColumn = dataIndex;
        },
        handleReset(clearFilters) {
            clearFilters();
            this.searchText = '';
        },
        onChange(pagination, filters, sorter) {
            console.log('params', pagination, filters, sorter);
        }
    }
};
</script>
<style scope>
    .table-content{
        min-height: 600px;
        background: #fff;
    }
    .search-box{
        margin-bottom: 20px;
    }
    .highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
    }
</style>