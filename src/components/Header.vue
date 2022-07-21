<template>
<header>
  <h1 class="h1">
      {{header}}
  </h1>
  <Select></Select>
</header>
</template>

<script>
export default {
  props:{
    header: String
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.h1{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;

  color: #3F3F3F;
}
</style>