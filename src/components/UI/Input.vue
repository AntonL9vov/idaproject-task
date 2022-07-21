<template>
<div class="input">
  <div class="input__title">
    {{title}}
    <span v-if="required" class="input-required"><img src="@/assets/Required.svg"></span>
  </div>
  <input v-model="modelValue" :class="{inputRequired: error}" v-if="type==='text'" @input="changeOption" class="input__input" type="text" :placeholder="placeholder">
  <input v-model="modelValue" :class="{inputRequired: error}" v-if="type==='number'" @input="changeOption" class="input__input" type="number" :placeholder="placeholder">
  <textarea v-model="modelValue" :class="{inputRequired: error}" v-if="type==='textarea'" @input="changeOption" class="input__input textarea" type="text" :placeholder="placeholder"/>
  <div v-if="error" class="error">
    Поле является обязательным
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    type: String,
    required: Boolean,
    modelValue: String,
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeOption(event){
      this.$emit("update:modelValue", event.target.value);
      this.$emit("input", event);
    }
  },
  name: "Input"
}
</script>

<style scoped>
.inputRequired{
  border: 1px solid #FF8484;
}
.input__title{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  position: relative;
}
.input__input{
  border: none;
  width: 100%;
  height: 36px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 16px;
  margin-top: 4px;
  box-sizing: border-box;
}
.input__input::placeholder{
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
}
.textarea{
  height: 108px;
  resize: none;
  padding-top: 10px;
}
.input-required{
  position: absolute;
  top: -4px;
  margin-left: 2px;
}
</style>