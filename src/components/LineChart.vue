<template>
  <div class="card-container">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="折线图">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="面积图">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="柱状图">
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
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style>
.card-container {
    background: #f5f5f5;
    overflow: hidden;
    padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
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
</style>
