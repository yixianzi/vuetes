<template>
<div class="wrapper">
  <div class="v1-box">
      <div v-for="(item,index) in 10" :key="index" class="v1-box-item">
          {{index}}
      </div>
  </div>
</div>


</template>

<style lang="scss" scoped>
// .wrapper{
//   width: 500px;
// }
    .v1-box {
        /**
         * 最外层的盒子
         * padding值中的第二个参数(6px)是右边距，为什么是6呢？
         * 因为盒子的左边距的值是(30px)，然后盒子的右边距的值要与子元素中的左右间距的值(24px)相减，最后得到6px，这样看起来的效果 盒子左右两边的间距就是一样的了
         */
        padding: 20px 0px 20px 24px;
        border: 1px solid red;
        width: 1600px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
 
        .v1-box-item {
            /**
             * 部分关键代码说明
             * 1、margin-right的值(24px) 和 width中的值(24px) 要设置成一样值，这是每个子元素的左右间距
             * 2、每个子元素的宽度是动态计算的，如果你的列是3列，那么width中最后两个的值也像这deme一样设置成3，如果是4列，那就修改成4... 
             * 3、margin-bottom是每个子元素的上下间距
             */
            margin-right: 24px;
            // width: calc((100% - 26px * 4) / 4);
            width: calc((100% - 26px * 4) / 4);
            margin-bottom: 30px;
			
			
            /* 底下这部分不是很关键 */
            height: 140px;
            background-color: #FFFFFF;
            border-radius: 10px;
            // box-shadow: 4px 4px 4px rgb(148, 89, 17);
            border: 1px solid red;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
 
    // 给最外层的盒子添加伪元素，列不满则左对齐
    .v1-box:after {
        content: "";
        flex: auto;
    }
</style>
