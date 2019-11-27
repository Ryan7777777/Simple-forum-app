<template>
  <div class="div1">
    <div class = "main" id="main">
      <div class="div2">
        <div class="newpost_btn">
          <i class="fa fa-plus" style="font-size:36px" @click="newpost_open"></i>
        </div>
        <div class="user_btn">
          <i class="fa fa-user" style="font-size:40px;" @click="login_open"></i>
        </div>
        <div class="lock_btn">
          <i class="fa fa-lock" style="font-size:40px;"></i>
        </div>
        <div class="message_btn">
          <i class="fa fa-comment" style="font-size:38px" @click="message_box" ></i>
        </div>
        <div class ="search_btn">
          <i class="fa fa-search" style="font-size:40px" @click="search_open"></i>
        </div>
      </div>
      <div class="div3"></div>
      <div class="div4"></div>
      <div class="main_window"></div>
    </div>
    <div id="login" class="login" @keydown.esc="login_close">
      <a class="closebtn"  @click="login_close">&times;</a>
      <a style="font-size:25px;margin-top: -67px;margin-left: 18px;font-family:'Comic Sans MS', cursive, sans-serif">Sign In</a>
      <a style="font-size: 9px;margin-top:75px;margin-left: 149px">Forget Password</a>
      <input type="email" class="login_email_input" id="login_email_input" placeholder="User email">
      <input type="password" class="login_password_input" placeholder="User password">
      <div class="login_icon" style="background-color: #e2e2e2">
      <i class="material-icons" style="font-size:36px; background-color: #e2e2e2">account_circle</i>
      </div>
      <button class="new_account_btn" @click="assign_new_account" >New Account</button>
      <button class="login_btn">Log In</button>
    </div>
    <div id="search" class="search" @keydown.esc="search_close">
      <input type="text" class="search_input" id="search_input"  name="search"  placeholder="Search..                              ESC to Exit   Enter to Search" @keydown.esc="search_close" >
    </div>
    <div id="newpost" class="newpost" @keydown.esc="newpost_close">
      <a class="closebtn"  @click="newpost_close">&times;</a>
      <i class="material-icons" style="position:absolute;font-size:30px;margin-top:-48px;margin-left:10px">library_add</i>
      <a style="position: absolute;margin-top: -50px; margin-left: 48px;font-size:25px; font-family:'Comic Sans MS', cursive, sans-serif">New Post</a>
      <a style="position:relative;margin-top:-5px; margin-left:10px;font-size:15px; font-family:'Comic Sans MS', cursive, sans-serif">Topic</a>
      <input id="topic_input" class="topic_input" type="text">
      <a style="position: relative;margin-left:10px;font-size: 15px;font-family:'Comic Sans MS', cursive, sans-serif" >Content</a>
      <textarea rows="8" cols="50" class="cotent_input">
      </textarea>
      <button class="post_photo_upload_btn">Select photo</button>
      <button class="post_submit_btn">Submit</button>
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
      login_open: function () {
        if (this.action === false) {
          this.action = true;
          document.getElementById("login").style.visibility = "visible";
          document.getElementById("login_email_input").focus();
          document.getElementById("main").style.opacity = 0.6;
        }
      },
      login_close: function () {
        this.action = false;
        document.getElementById("login").style.visibility = "hidden";
        document.getElementById("main").style.opacity = 1;
      },
      search_open: function () {
        if (this.action === false) {
          this.action = true;
          document.getElementById("search").style.visibility = "visible";
          document.getElementById("search_input").style.visibility = "visible";
          document.getElementById("search_input").focus();
          document.getElementById("main").style.opacity = 0.6;
        }
      },
      search_close: function () {
        this.action = false;
        document.getElementById("search").style.visibility = "hidden ";
        document.getElementById("main").style.opacity = 1;
        document.getElementById("search_input").style.visibility = "hidden";
      },
      newpost_open: function () {
        if (this.action === false) {
          this.action = true;
          document.getElementById("newpost").style.visibility = "visible";
          document.getElementById("topic_input").focus();
          document.getElementById("main").style.opacity = 0.6;
        }
      },
      newpost_close: function () {
        this.action = false;
        document.getElementById("newpost").style.visibility = "hidden ";
        document.getElementById("main").style.opacity = 1;
      },
      assign_new_account: function(){
        this.action = false;
        document.getElementById("main").style.opacity = 1;
        document.getElementById("newpost").style.visibility = "hidden ";
        let register = this.$router.resolve('/newuser');
        window.open(register.href);
      },
      message_box: function(){
        let register = this.$router.resolve('/message');
        window.open(register.href);
      }
    }
  }
</script>
<style>
  @import '../css/mainstyle.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>

