<template>
<div class="item">
  <img src="https://yandex.ru/images/search?pos=0&img_url=https%3A%2F%2Fwa11papers.ru%2Fhdwallpapers%2Fnature%2Fwa11papers-ru_nature_2560x1600_045.jpg&text=картинки&lr=117013&rpt=simage&source=serp" alt="">
  <div class="item-content">
    <div class="item-title">
      {{title}}
    </div>
    <div class="item-description">
      {{description}}
    </div>
    <div class="item-price">
      {{price}} руб.
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    description: String,
    price: Number
  },
  name: "Item"
}
</script>

<style scoped lang="scss">
.item{
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: 332px;

}
.item-content{
  width: 100%;
  height: 100%;
  padding: 16px 16px 24px 16px;
  box-sizing: border-box;
}
.item-title{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
}
.item-description{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3F3F3F;
  margin-top: 16px;
  width: 300px;
  text-align: left;
}
.item-price{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
  margin-top: 32px;
}
</style>