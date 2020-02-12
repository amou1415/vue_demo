<template>
  <div>
      <input type="text" :class="isValid">
      <input 
      :class="{
          err:!isValid,
          success:isValid
        }"
      :type="type"
      :placeholder="placeholder"
      @input="checkValue">
  </div>
</template>

<script>
export default {
  data(){
    return {
      isValid:true
    }
  },
  props:['type','placeholder']
}
</script>

<style>
input {
    width: 100%;
    height: 10.556vw;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border: none;
    outline: none;
    border-bottom:1px solid black; 
}
</style>