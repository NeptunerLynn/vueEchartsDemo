<template>
    <div class="table-content">
        <a-input-search class="search-box" placeholder="请输入查询内容" enter-button @search="onSearch" />

        <a-table :columns="columns" :data-source="data" :loading="loading">
            <span slot="tags" slot-scope="tags">
                <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                    {{ tag.toUpperCase() }}
                </a-tag>
            </span>
            <span slot="gender" slot-scope="gender">{{gerder}}</span>
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
        </a-table>
    </div>
</template>
<script>

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    filters: [
      { text: '男', value: 0 },
      { text: '女', value: 1 },
    ],
  },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '标签', dataIndex: 'tags', key: 'tags', scopedSlots: { customRender: 'tags' }},
  { title: '地址', dataIndex: 'address', key: 'address' },
  { title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
];


export default {
  data() {
    return {
        loading : false,
        data : [],
        columns,
    };
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
</style>