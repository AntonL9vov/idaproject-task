<template>
  <div class="wrapper">
    <Input
        :title="'Наименование товара'"
        :placeholder="'Введите наименование товара'"
        :type="'text'"
        :required="true"
        :error="this.titleRequired"
        class="input"
        v-model="title"
        id="itemTitle"
    />
    <Input
        :title="'Описание товара'"
        :placeholder="'Введите описание товара'"
        :type="'textarea'"
        class="input"
        :error="false"
        v-model="description"
    />
    <Input
        :title="'Ссылка на изображение товара'"
        :placeholder="'Введите ссылку'"
        :type="'text'"
        :required="true"
        class="input"/>
    <Input
        :title="'Цена товара'"
        :placeholder="'Введите цену'"
        :type="'number'"
        :required="true"
        class="input"
        v-model="price"/>
    <Button
        :title="'Добавить товар'"
        @click="addItem"></Button>
  </div>
</template>

<script>
export default {
  name: "AddItemField",
  components: {},
  methods: {
    addItem: function () {
      let itemTitle = this.title;
      let itemDescription = this.description;
      let itemPrice = this.price;
      if (itemTitle === ''){
        this.titleRequired = true;
      }
      this.$store.commit('addItem', {title: itemTitle, description: itemDescription, price: itemPrice})
    }
  },
  data() {
    return {
      title: '',
      description: '',
      price: '',
      titleRequired: false,
      priceRequired: false,
    }
  },
  computed: {
    getItems(){
       return this.$store.getters.items;
    },
    isActive: {

    }
  },
  mounted() {
    this.$store.getters.items
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 332px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  height: 440px;
  box-sizing: border-box;
}

.input:not(:last-child) {
  margin-bottom: 16px;
}
</style>