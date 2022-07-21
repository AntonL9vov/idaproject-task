<template>
<div class="select">
  <select>
    <option selected>По умолчанию</option>
  </select>
</div>
</template>

<script>
export default {
  props: {
    options: Array,
    title: String
  },
  name: "Select"
}
</script>

<style scoped lang="scss">
select{
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 121.49px;
  height: 36px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>