<template>
<div class="wrapper">
  <AddItem></AddItem>
</div>
</template>

<script>

import AddItem from "@/pages/AddItem";
export default {
  name: 'App',
  components: {
    AddItem

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Cabin:wght@700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700&family=Nunito:wght@700;900&family=PT+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap');
</style>
<style scoped lang="scss">
#app {

}
.wrapper{
  margin: 32px;
  max-width: 1440px;
}
</style>
