<template>
  <div>
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="mobile"
                 label="文本"
                 placeholder="请输入手机号码" />
      <van-field v-model="code"
                 label="文本"
                 placeholder="请输入验证码" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '18888888888',
      code: '246810'
    }
  }

}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #3296fa;
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
</style>