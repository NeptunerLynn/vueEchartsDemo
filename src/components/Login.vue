<template>
    <div class="login-bg">
        <BgAnimation />
        <a-card title="登 录 系 统" class="login-content" style="width: 450px">
             <a-form :form="form" >
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="账号"
                >
                <a-input
                    v-decorator="[
                    'username',
                    { rules: [{ required: true, message: '请输入账号' }] },
                    ]"
                    placeholder="请输入账号"
                />
                </a-form-item>
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="密码"
                >
                <a-input-password
                    v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入密码' }] },
                    ]"
                    placeholder="请输入密码"
                />
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" @click="check">
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>
<script>
import BgAnimation from "./../common/BgAnimation"
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
    components: { BgAnimation },
    data(){
        return{
            formItemLayout,
            formTailLayout,
            form: this.$form.createForm(this, { name: 'login_rule' })
        }
    },
    methods: {
        check() {
            this.form.validateFields(err => {
                if (!err) {
                    this.$store.commit('loginValid',{username:this.form.getFieldValue("username"),password:this.form.getFieldValue("password")});
                    this.$router.push({ path: "/" });
                }
            });
        },
    },
}
</script>
<style scope lang="less">
    .login-bg{
        display: flex;
        width:100%;
        height:100%;
        justify-content: center;
        align-items: center;
        background-color : var(--antd-wave-shadow-color);
    }
    .login-content{
        text-align: center;
        border-radius: 5px;
    }
    .login-content .ant-card-body{
        padding-bottom: 0;
    }
    .login-content .ant-card-body .ant-form-explain{
        text-align: left;
    }
</style>