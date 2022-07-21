<template>
  <button>{{title}}</button>
</template>

<script>
export default {
  props: {
    title: String
  },
  name: "Button"
}
</script>

<style scoped>
button{
  height: 36px;
  background: #EEEEEE;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #B4B4B4;
}
</style>