let Toast = {};
let showToast = false, // 存储toast显示状态
    showLoad = false, // 存储loading显示状态
    toastVM = null, // 存储toast vm
    loadNode = null; // 存储loading节点元素
let toastType = ["success","info","warning","error"]

Toast.install = (Vue, option) => {
    let opt = {
        dafaultType : 0, //0：成功，1：提示，2：警告，3：错误
        duration : "2500"
    };
    opt = Object.assign({},opt,option);
    Vue.prototype.$toast = (tips,alertType) => {
        let curType = alertType ? alertType : opt.dafaultType,
            tmp = `<transition name="slide-fade"><a-alert v-show="show" :message="tip" :type="type" show-icon /></transition>`;
        
        if(showToast) return;

        if(!toastVM){
            const toastTpl = Vue.extend({
                data : function(){
                    return {
                        show : showToast,
                        tip : tips,
                        type : toastType[curType]
                    }
                },
                template : tmp
            });
            toastVM = new toastTpl();
            const tpl = toastVM.$mount().$el;
            document.body.appendChild(tpl);
        }
        toastVM.type = toastType[curType];
        toastVM.tip = tips;
        toastVM.show = showToast = true;

        if(curType == 3) return;
        setTimeout(() => {
            toastVM.show = showToast = false;
        },opt.duration)
    };
    Vue.prototype.$loading = (tips,type) => {
        if(type == 'close'){
            loadNode.show = showLoad = false;
        }else{
            if(showLoad) return;
            const loadTpl = Vue.extend({
                data : function(){
                    return {
                        show : showLoad
                    }
                },
                template : ``
            })
        }
    }
};
export default Toast;