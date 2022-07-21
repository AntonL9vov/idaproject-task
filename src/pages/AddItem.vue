<template>
  <div class="wrapper">
    <Header
        :header="'Добавление товара'"></Header>
    <div class="content-wrapper">
      <AddItemField></AddItemField>
      <div class="items-wrapper">
        <Item v-for="item in this.items" :key="item"
        :src="item.src"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        class="item"></Item>
        <Item v-for="item in this.$store.getters.items" :key="item"
              :src="item.src"
              :title="item.title"
              :description="item.description"
              :price="item.price"
              class="item"></Item>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AddItemField from "@/components/AddItemField";
import Item from "@/components/Item";

export default {
  name: "AddItem",
  data(){
    return{
      items: [
        {
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },{
          src: 'https://www.zenit.photo/catalog/zenit-m-obektiv-zenitar-35mm-f-1-0/',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000
        },
      ]
    }
  },
  components: {
    Item,
    Header,
    AddItemField
  },
  mounted() {
    this.data().items.concat(this.$store.getters.items)
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1440px;
  background: rgba(255, 254, 251, 0.8);
}

.content-wrapper {
  display: grid;
  grid-template-columns: auto auto;

}
.item:not(:last-child){
  margin-bottom: 16px;
}
.item:not(:nth-child(3n)){
  margin-right: 16px;
}
.items-wrapper {
  margin-left: 16px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1028px;
}
</style>