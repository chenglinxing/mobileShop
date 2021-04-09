<template>
  <div class="menu-control-item">
    <van-grid :border="false" column-num="5">
      <!--:icon="'icon iconfont ' + item.icon"-->
      <van-grid-item
        v-for="(item, index) in itemList"
        :key="index"
        :text="item.text"
        @click="handleGridItem(index, item.text)"
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
import { Toast } from "vant";
import throttle from "lodash.throttle";

export default {
  data() {
    return {
      itemList: [
        { icon: "icon-gouwu-2", text: "京东超市" },
        { icon: "icon-Cshuma", text: "数码电器" },
        { icon: "icon-clothes", text: "潮流服饰" },
        { icon: "icon-chongzhijiaofei", text: "充值缴费" },
        { icon: "icon-biaoqianA01_lvhang-263", text: "京东旅行" },
        { icon: "icon-S_zaixiangouyaoshangcheng", text: "看病购药" },
        { icon: "icon-mengchong", text: "京东萌宠" },
        { icon: "icon-paimai", text: "京东拍卖" },
        { icon: "icon-zu14", text: "领券中心" },
        { icon: "icon-huiyuan", text: "京东会员" },
      ],
    };
  },
  methods: {
    /**点击 item */
    handleGridItem: throttle(function (index, title) {
      Toast(title);
    }, 1500),
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