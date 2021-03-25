<template>
  <div class="user-index">
    <!-- 头部 -->
    <div class="header">
      <!--用户图片  昵称  设置  消息-->
      <div class="basic-info">
        <!--用户图片-->
        <div class="user-img">
          <van-image round width="3rem" height="3rem" :src="userImg" />
        </div>

        <!--用户昵称 用户的相关操作-->
        <div class="user-name-operation">
          <div class="user-top">
            <!--用户昵称-->
            <div class="user-info">
              <span class="user-name">{{ userName }}</span>
              <span class="setting" @click="handleSetting"
                ><van-icon name="setting-o"
              /></span>
              <span @click="hanldeUserNews"
                ><van-icon name="chat-o" badge="9"
              /></span>
            </div>
            <!--用户的相关操作-->
          </div>

          <div class="user-bottom">
            <div class="user-operation">
              <div class="user-value">
                <span>京享值3645 ＞</span>
                <!-- <span><van-icon name="arrow" /></span> -->
              </div>

              <div class="user-value">
                <span>小白成长分3467 ＞</span>
              </div>

              <div class="user-value">
                <span>家庭号 ＞</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--商品收藏  店铺关注  喜欢的内容  浏览记录-->
      <div class="goods-relevant">
        <div
          class="num-title"
          v-for="(item, index) in numTitleList"
          :key="index"
          @click="handleTitle(index, item.title)"
        >
          <div class="num">{{ item.num }}</div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    
    <!---->
  </div>
</template>

<script>
import { Notify, Toast } from "vant";
import throttle from "lodash.throttle";

/*eslint-disable*/

export default {
  data() {
    return {
      userName: localStorage.getItem("user"),
      userImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Farticle-fd.zol-img.com.cn%2Ft_s640x2000%2Fg5%2FM00%2F05%2F03%2FChMkJ14AhluILGohAADCT5AaBhwAAv6DQCVp9oAAMJn388.jpg&refer=http%3A%2F%2Farticle-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619252986&t=0a4e9bb393fd84b9593beb963eeb4ef1",
      numTitleList: [
        { num: 0, title: "商品收藏" },
        { num: 10, title: "店铺关注" },
        { num: 0, title: "喜欢的内容" },
        { num: 23, title: "浏览记录" },
      ],
    };
  },
  methods: {
    returnLogin() {
      this.$router.push("/login");
      window.localStorage.removeItem("user");
    },

    /**点击设置 图标 */
    handleSetting: throttle(function () {
      Toast("点击设置");
    }, 1500),

    /**点击消息图标 */
    hanldeUserNews: throttle(function () {
      Toast("点击消息");
    }, 1500),

    /**点击商品收藏 店铺关注 喜欢的内容 浏览记录*/
    handleTitle: throttle(function (index, title) {
      console.log(index);
      Toast(title);
    }, 1500),
  },
  created() {},
};
</script>

<style lang="scss" scoped>
$boxSizing: border-box;
$color: #ff0036;

.user-index {
  .header {
    box-sizing: $boxSizing;
    height: 12rem;
    width: 100%;
    border: none;
    background: -webkit-linear-gradient(top, $color, #eb204c, #ee1040);
    background: -webkit-linear-gradient(left, $color, #ee1040, #e2535a);
    // background-color: $color;
  }
  .header::after {
    content: "";
    width: 100%;
    height: 1rem;
    position: absolute;
    left: 0%;
    top: 11.5rem;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    background: -webkit-linear-gradient(left, $color, #ee1040, #e2535a);
  }

  .basic-info {
    box-sizing: border-box;
    height: 50%;
    display: flex;
    align-items: center;
    padding-top: 2rem;
    .user-img {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .user-name-operation {
      width: 80%;
      // margin-left: 0.2rem;
      display: flex;
      justify-content: center;
      // align-items: center;
      flex-direction: column;

      .user-info {
        display: flex;
        justify-content: space-evenly;
        font-size: 18px;
        span {
          display: block;
        }
        span:first-child {
          width: 60%;
          color: #fff;
        }
      }

      .user-operation {
        display: flex;
        .user-value {
          // width: 5.5rem;
          height: 1rem;
          color: #fff;
          background: rgba(0, 0, 0, 0.2) none repeat scroll !important;
          border-radius: 0.5rem;
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0.2rem;
          padding: 0 0.3rem;
        }
      }
    }
  }

  .goods-relevant {
    box-sizing: $boxSizing;
    margin-top: 1.1rem;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .num-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: $boxSizing;
      .num {
        font-size: 20px;
      }
      .title {
        font-size: 13px;
      }
    }
  }
}
</style>