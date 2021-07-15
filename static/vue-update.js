Vue.component('fetch-data', {
    props: ['url'],
    data() {
        return {
        loaded: false,
        response: null,
        }
    },
    mounted() {
        setTimeout(function() {
            axios.get('http://101.89.157.205:1348/travel-logs?sort=-talking_time&per-page=1',
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
            ).then(function (response) {
                this.response = response
                this.loaded = true
                console.log(this.response.data)
            });
        });
    },
    render() {
        if (!this.loaded) {
        // return this.$slots.loading[0]
        }

        return this.$scopedSlots.default({
        response: this.response.data,
        })
    },
    })
new Vue({
    el: '#app',
    mounted() {
        // 滚动到底
        // let ele = document.getElementById("main")
        console.log(this.$refs.main)
        let ele = this.$refs.main
        if(ele.scrollHeight > ele.clientHeight) {
            setTimeout(function(){
                // 设置滚动条到最底部
                ele.scrollTop = ele.scrollHeight;
                ele.style.opacity = 1;
            },500);
        };
        // 定时获取
        let log = self.setInterval("getLog()",1000); // 1000毫秒=1秒
        function getLog() {
            let t = 0;
    }}
})