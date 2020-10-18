<template>
  <div style="padding: 20px; line-height: 4em">
    <img src="../assets/logo.png" alt="logo" width="200" height="200">

    <h1>Vue APP</h1>

    <el-button @click="getNetworkData">发起网络请求</el-button>

    <div style="width: 60%; margin: auto; background-color: #fff; border-radius: 5px; box-shadow: 2px 2px 10px #eee">
      {{result}}
    </div>
  </div>
</template>

<script>
  import {request} from "@/util/network/request";
  import {ApiConst} from "@/util/network/api/api-const";

  export default {
    name: "Index",
    //组件
    components: {},
    //属性
    props: {},

    //数据
    data() {
      return {
        result: {}
      }
    },

    //挂载完成时
    mounted() {
      //this.getNetworkData();
    },

    //方法
    methods: {
      getNetworkData(){
        request({
            url: ApiConst.POSTS + "/1",
        }).then(res => {
            console.log(res);
            this.result = res.data;
        }).catch(err => {
            console.log(err)
        })
      }
    },

    //计算属性
    computed: {},

    //监听
    watch: {}
  }
</script>

<style scoped>

</style>
