<template>
<!-- https://www.17sucai.com/preview/1424582/2019-11-18/m/index.html -->
  <div class="hexagon-item">
    <div class="hex-item">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hex-item">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="hex-content">
      <span class="hex-content-inner">
        <span class="icon">
          <i class="fa fa-universal-access"></i>
        </span>
        <span class="title">{{ txtdata }}</span>
      </span>
      <svg
        viewBox="0 0 173.20508075688772 200"
        height="100"
        width="87"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
          fill="#1e2530"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lbx',
  props: {
    txtdata: {
      type: String,
      required: false,
      default:'默认'
    }
  }
}
</script>

<style scoped>
@import './char.css';
</style>