<template>
  <div class="menu-control-item">
    <van-grid :border="false">
      <!--:icon="'icon iconfont ' + item.icon"-->
      <van-grid-item
        v-for="(item, index) in itemList"
        :key="index"
        :text="item.text"
      >
        <div slot="icon">
          <svg class="icon tianmao1" aria-hidden="true">
            <use :xlink:href="'#' + item.icon"></use>
          </svg>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
        
<script>
export default {
  data() {
    return {
      itemList: [
        { icon: "icon-tianmao1", text: "天猫" },
        { icon: "icon-taobao", text: "淘宝" },
        { icon: "icon-suning", text: "苏宁" },
        { icon: "icon-jingdong", text: "京东" },
        { icon: "icon-pinduoduo1", text: "拼多多" },
        { icon: "icon-elemo", text: "饿了么" },
        { icon: "icon-meituan", text: "美团" },
        { icon: "icon-dingdongluobu", text: "叮咚" },
      ],
    };
  },
};
</script>

<style lang="scss">
.menu-control-item {
  .item {
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>