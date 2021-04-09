<template>
  <div class="index">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名："
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码："
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登 录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Base64 from "@/utils/base64";
export default {
  data() {
    return {
      value: 3,
      username: "",
      password: "",
    };
  },
  methods: {
    /** 点击登录按钮   暂时未加条件限制*/
    onSubmit(values) {
      let base64 = new Base64();
      let encryption = base64.encode(this.username);
      /**缓存中存入加密后的用户名 */
      window.localStorage.setItem("user", encryption);
      /**用户登录后  将用户登录标志设置true */
      this.$store.commit("loginFinish");
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
  background-color: rgba(78, 176, 214, 0.384);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>