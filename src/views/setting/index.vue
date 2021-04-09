<template>
  <!--设置-->
  <div class="setting-index">
    <!--头部-->
    <div class="header-title">
      <div class="return-back" @click="returnUser">
        <van-icon name="arrow-left" />
      </div>
      <div class="setting-name">账户设置</div>
    </div>

    <!-- 内容 -->
    <div class="setting-cell">
      <setting-cell>
        <div class="special" slot="special" @click="getIntoUserInfo">
          <div class="left" slot="left">
            <!--用户信息-->
            <div class="img">
              <van-image
                round
                width="4rem"
                height="4rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="user-name">
              <div class="name">
                {{ userName }}
              </div>
            </div>
          </div>
          <div class="right" slot="right">
            <van-icon name="arrow" />
          </div>
        </div>

        <div class="ordinary-cell" slot="ordinary" @click="ToggleAcount">
          切换账户
        </div>
        <div class="ordinary-cell" slot="ordinary" @click="logOut">
          退出登录
        </div>
      </setting-cell>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Base64 from "@/utils/base64";
import throttle from "lodash.throttle";
export default {
  data() {
    return {};
  },
  computed: {
    /**userName 通过base64再解密 */
    userName() {
      let a = window.localStorage.getItem("user");
      let base64 = new Base64();
      let name = base64.decode(a);
      if (name == null) {
        return "";
      }
      let newName = name.length > 12 ? name.substring(0, 12) + "..." : name;
      return newName;
    },
  },
  components: {
    settingCell: () => import("@c/cell.vue"),
  },
  methods: {
    /**点击返回按钮 */
    returnUser() {
      this.$router.go(-1);
    },

    /**进入用户信息 */
    getIntoUserInfo: throttle(function () {
      Toast("进入用户信息");
    }, 2000),

    /**切换账户 */
    ToggleAcount: throttle(function () {
      Toast("切换用户");
    }, 2000),

    /**退出登录 */
    logOut: throttle(function () {
      Toast("退出登录");
      this.$router.push("/login");
      //退出登录后  清空本地缓存 及 vuex中的登录标志
      localStorage.removeItem("goodsDetailsInfo");
      localStorage.removeItem("vuex");
      localStorage.removeItem("user");
      this.$store.state.userLogin.login = false;
    }, 2000),
  },
};
</script>

<style lang="scss" scoped>
$boxSizing: border-box;
@mixin flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.setting-index {
  box-sizing: $boxSizing;
  height: 100vh;

  .header-title {
    width: 100%;
    height: 44px;
    background-color: #e5e5e5;
    color: #222;
    position: sticky;
    top: 0;
    @include flex;
  }

  .return-back {
    position: absolute;
    left: 1rem;
  }

  .special {
    // color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      .user-name {
        margin-left: 1.2rem;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>