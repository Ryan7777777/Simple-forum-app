<template>
    <div>
      <div class="div1">
        <h1>Sign up a new account</h1>
        <div class="icon">
        <i class='fa fa-user-plus'></i>
        </div>
        <a class="closebtn"  @click="page_close">&times;</a><br>
        <b class="user_name"> User Name</b>
        <input class="user_name_input" type="text" placeholder="Username1902">
        <b class="user_email" >User Email</b>
        <input class="user_email_input" type="email" placeholder="1234@example.com">
        <b class="first_name">First Name</b>
        <b class="last_name">Last Name</b>
        <input class="user_first_name_input" placeholder="Jason">
        <input class="user_last_name_input" placeholder="Simth">
        <b class="user_password">User Passeord</b>
        <input class="user_passowrd_input" type="password" placeholder="Password">
        <input class="user_password_input_confirm" type="password" placeholder="Confirmed Password">
        <button class="register_btn">Register</button>
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
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
  @import '../css/registerstyle.css';
</style>
