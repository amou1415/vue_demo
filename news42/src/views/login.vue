<template>
  <div>
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
  </div>
</template>

<script>
import authInput from "@components/authInput.vue";
export default {
  componnents: {
    authInput
  }
};
</script>

<style lang="less">
.login {
  margin: 6.667vw;
}
.closeBtn {
  padding: 6.667vw;
  span {
    font-size: 7.5vw;
  }
}
.logo {
  text-align: center;
  sapn {
    font-size: 35vw;
    color: #d81e06;
  }
}
</style>