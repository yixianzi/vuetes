<template>
  <div>
    <el-button @click="handleExportPdf">生成</el-button>
    <button v-print="printObj">Print local range</button><div id="loading" v-show="printLoading"></div>
    <div style="display: flex;justify-content: center">
      <div id="pdfWrapper" style="width: 595.28px;">
        <h1>title</h1>
        <img alt="Vue logo" src="../assets/logo.png">
        <el-table :data="tableData">
          <el-table-column prop="t1" label="测试1"></el-table-column>
          <el-table-column prop="t2" label="测试2"></el-table-column>
          <el-table-column prop="t3" label="测试3"></el-table-column>
          <el-table-column prop="t4" label="测试4"></el-table-column>
          <el-table-column prop="t5" label="测试5"></el-table-column>
        </el-table>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{t1:1,t2:2,t3:3,t4:4,t5:5}],
      printLoading: true,
      printObj: {
        id: "pdfWrapper",
        popTitle: 'good print',
        // extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
        beforeOpenCallback (vue) {
          vue.printLoading = true
          console.log('打开之前')
        },
        openCallback (vue) {
          vue.printLoading = false
          console.log('执行了打印')
        },
        closeCallback (vue) {
          console.log('关闭了打印工具')
        }
      }
    }
  },
  mounted() {
    let a = []
    for(let i=0;i<100;i++){
      a.push({t1:i,t2:2,t3:3,t4:4,t5:5})
    }
    this.tableData = a
  },
  methods: {
     handleExportPdf() {
      // 滚动到顶部，确保打印内容完整
      document.body.scrollTop = 0; // IE的
      document.documentElement.scrollTop = 0; // 其他
      this.htmlToPdf("pdfWrapper", "统计报告");
    },
  }
}
</script>

<style>

</style>