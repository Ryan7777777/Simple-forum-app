<template>
    <div>
      <div class="div1">
        <h1>Sign up a new account</h1>
        <div class="icon">
        <i class='fa fa-user-plus'></i>
        </div>
        <a class="closebtn" onmouseover="this.style.color='#ff2020'"
           onmouseout="this.style.color='#000000'" @click="page_close">&times;</a>
        <form>
          <div class="form-group">
            <label for="user_name_input"> User Name</label>
            <input v-model="username" class="form-control" id ="user_name_input" type="text" placeholder="Username1902">
          </div>
          <div class="form-group">
            <label for="user_email_input" >User Email</label>
            <input v-model="useremail"class="form-control" id = "user_email_input" type="email" placeholder="1234@example.com">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for ="first_name_input">First Name</label>
              <input v-model ="firstname" class = "form-control" id="first_name_input" placeholder="Jason">
            </div>
            <div class="form-group col-md-6">
              <label for ="last_name_input">Last Name</label>
              <input v-model ="lastname" class = "form-control" id ="last_name_input" placeholder="Simth">
            </div>
          </div>
          <div class="form-group">
              <label for="user_passowrd_input">User Password</label>
               <input v-model ="password" class = "form-control" id="user_passowrd_input" type="password" placeholder="Password">
              <input v-model ="confirm_password" class = "form-control" id ="user_password_input_confirm" type="password" placeholder="Confirmed Password">
          </div>
        </form>
        <button class="register_btn" @click="check_user_input">Register</button>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        action: false,
        username: "",
        useremail:"",
        firstname:"",
        lastname:"",
        password:"",
        confirm_password:""
      }
    },
    mounted: function () {
    },
    methods: {
      page_close : function(){
        this.$router.push('/');
        this.$router.go();
      },
      check_user_input : function(){
        var reuse = /^[a-zA-Z0-9]+$/;
        var name = /^[a-zA-Z]+$/;
        var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (reuse.test(this.username) == false || (this.username.length < 0 || this.username.length>12)) {
          alert("Please have a username between 1-11 characters")
        } else if (name.test(this.firstname) == false && name.test(this.lastname) == false && (this.this.firstname.length <0 || this.firstname.length>20)
          && (this.this.lastname.length < 0 || this.lastname.length>20)){
          alert("Please have a firstname/lastname between 1-20 characters")
        }
        else if (re.test(this.useremail) == false) {
          alert("Please have a valid e-mail address")
        } else if (this.password != this.confirm_password) {
          alert("Please make sure your password and confirmed password is identical")
        } else {
         this.register();
        }
      },
      register: function(){
        this.$http.post('http://127.0.0.1:4255/api/v1/users',
          {
            email: this.useremail,
            username: this.username,
            givenName: this.firstname,
            familyName: this.lastname,
            password: this.password
          })
          .then(function (response) {
            this.page_close();
          }, function (error) {
            alert(error.statusText);
            this.error = true;
            this.errormessage = error.statusText;
          });
      }
    }
  }
</script>
<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  @import '../css/registerstyle.css';
</style>
