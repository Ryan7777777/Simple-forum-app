<template>
    <div>
      <div class="div1">
        <a class="sign_up">Sign up a new account</a>
        <a class="closebtn"  @click="page_close">&times;</a>
        <a class="user_name"> User Name</a>
        <input class="user_name_input">
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        action: false
      }
    },
    mounted: function () {
    },
    methods: {
      page_close : function(){
        window.open('','_self').close();
      }
    }
  }
</script>
<style>
  @import '../css/registerstyle.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
