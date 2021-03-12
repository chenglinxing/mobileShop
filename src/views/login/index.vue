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
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      window.localStorage.setItem('user',111)
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