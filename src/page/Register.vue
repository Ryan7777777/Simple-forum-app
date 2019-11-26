<template>
    <div>
      <div class="div1">
        <h1>Sign up a new account</h1>
        <div class="icon">
        <i class='fa fa-user-plus'></i>
        </div>
        <a class="closebtn"  @click="page_close">&times;</a>
        <form>
          <div class="form-group">
            <label for="user_name_input"> User Name</label>
            <input class="form-control" id ="user_name_input" type="text" placeholder="Username1902">
          </div>
          <div class="form-group">
            <label for="user_email_input" >User Email</label>
            <input class="form-control" id = "user_email_input" type="email" placeholder="1234@example.com">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for ="first_name_input">First Name</label>
              <input class = "form-control" id="first_name_input" placeholder="Jason">
            </div>
            <div class="form-group col-md-6">
              <label for ="last_name_input">Last Name</label>
              <input class = "form-control" id ="last_name_input" placeholder="Simth">
            </div>
          </div>
          <div class="form-group">
              <label for="user_passowrd_input">User Password</label>
               <input class = "form-control" id="user_passowrd_input" type="password" placeholder="Password">
              <input class = "form-control" id ="user_password_input_confirm" type="password" placeholder="Confirmed Password">
          </div>
        </form>
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
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>
