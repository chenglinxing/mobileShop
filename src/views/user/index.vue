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
          {{this.$store.state.userLogin.login}}
          <div class="user-top">
            <!--用户昵称-->
            <div class="user-info">
              <span class="user-name">{{ userName }}</span>
              <span
                class="setting"
                v-no-login="{ login: this.$store.state.userLogin.login }"
                @click="handleSetting($event)"
                ><van-icon name="setting-o"
              /></span>
              <span
                @click="hanldeUserNews"
                v-no-login="{ login: this.$store.state.userLogin.login }"
                ><van-icon name="chat-o" badge="9"
              /></span>
            </div>
            <!--用户的相关操作-->
          </div>

          <div class="user-bottom" v-if="userName != ''">
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

          <!--没登录的情况下显示点击登录-->
          <div class="handle-login" v-else>
            <span @click="hanldeLogin">点击登录</span>
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

    <!--付款 收货 待评价  退款售后-->
    <div class="price-operation">
      <div class="my-order">
        <span>我的订单</span>
        <span @click="seeAllOrder">查看全部＞</span>
      </div>

      <div class="order-operation">
        <div
          class="icon-title"
          v-for="(item, index) in iconTitleList"
          :key="index"
          @click="handleIconTitle(index, item.title)"
        >
          <div class="icon">
            <van-icon :name="item.icon" :badge="item.badge" size="18px" />
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify, Toast } from "vant";
import noLogin from "@/common/noLogin.js";
import throttle from "lodash.throttle";

/*eslint-disable*/

export default {
  data() {
    return {
      // userName: localStorage.getItem("user"),
      userImg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Farticle-fd.zol-img.com.cn%2Ft_s640x2000%2Fg5%2FM00%2F05%2F03%2FChMkJ14AhluILGohAADCT5AaBhwAAv6DQCVp9oAAMJn388.jpg&refer=http%3A%2F%2Farticle-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619252986&t=0a4e9bb393fd84b9593beb963eeb4ef1",
      numTitleList: [
        { num: 0, title: "商品收藏" },
        { num: 10, title: "店铺关注" },
        { num: 0, title: "喜欢的内容" },
        { num: 23, title: "浏览记录" },
      ] /**商品收藏 */,
      iconTitleList: [
        { icon: "balance-list-o", badge: "1", title: "待付款" },
        { icon: "logistics", badge: "3", title: "待收货" },
        { icon: "comment-o", badge: "31", title: "待评价" },
        { icon: "refund-o", badge: "5", title: "退款/售后" },
      ],
    };
  },
  directives: {
    noLogin,
  },
  computed: {
    userName() {
      let name = window.localStorage.getItem("user");
      if (name == null) {
        return "";
      }
      let newName = name.length > 12 ? name.substring(0, 12) + "..." : name;
      return newName;
    },
  },
  methods: {
    returnLogin() {
      this.$router.push("/login");
      window.localStorage.removeItem("user");
    },

    /**点击设置 图标 */
    handleSetting: throttle(function (e) {
      console.log(e,'设置')
      // Toast("点击设置");
      // if(this.$store.state.userLogin.login){
        this.$router.push("/userSetting");
      // }else{
        // this.$router.push('/login')
      // }
    }, 1500),

    /**点击消息图标 */
    hanldeUserNews: throttle(function () {
      // Toast("点击消息");
        this.$router.push('/login')

    }, 1500),

    /**点击商品收藏 店铺关注 喜欢的内容 浏览记录*/
    handleTitle: throttle(function (index, title) {
      console.log(index);
      Toast(title);
    }, 1500),

    /**点击待付款 待收货 待评价 退款/售后 */
    handleIconTitle: throttle(function (index, title) {
      Toast(title);
    }, 1500),

    /**点击查看全部 */
    seeAllOrder: throttle(function () {
      Toast("查看全部");
    }, 1500),

    /**当未登录时  显示点击登录 */
    hanldeLogin() {
      this.$router.replace("/login");
    },
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
    height: 60%;
    display: flex;
    align-items: center;
    padding-top: 1rem;
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
      position: relative;

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

      .handle-login {
        position: absolute;
        color: #fff;
        font-size: 18px;
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

  .price-operation {
    box-sizing: $boxSizing;
    display: flex;
    flex-direction: column;
    height: 7rem;
    background-color: #fff;
    border-radius: 0.5rem;
    margin: 1.5rem 1rem;

    .my-order {
      box-sizing: $boxSizing;
      display: flex;
      justify-content: space-between;
      height: 30%;
      span {
        padding: 0.1rem 0.5rem;
      }
      span:first-child {
        font-weight: 800;
      }

      span:last-child {
        color: rgb(150, 150, 150);
      }
    }

    .order-operation {
      box-sizing: $boxSizing;
      height: 60%;
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      font-size: 18px;
      .icon {
        width: 1.8rem;
        height: 45%;
        display: flex;
        align-items: center;
      }
      .icon-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>