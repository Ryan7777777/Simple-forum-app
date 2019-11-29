<template>
  <div>
    <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <div class="div1">
      <div class = "main" id="main">
        <div class="function_bar">
          <div class="newpost_btn">
            <i class="fa fa-plus" style="font-size:44px" @click="newpost_open"></i>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <i class="fa fa-user" style="font-size:40px;" @click="login_open"></i>
            </div>
            <div class="col-sm-3">
              <i class="fa fa-lock" style="font-size:42px; margin-top: 2px"></i>
            </div>
            <div class="col-sm-3">
              <i class="fa fa-comment" style="font-size:40px; margin-top: -2px" @click="message_box" ></i>
            </div>
            <div class ="col-sm-3">
              <i class="fa fa-search" style="font-size:38px" @click="search_open"></i>
            </div>
          </div>
        </div>
          <div class="div4">
          </div>
          <div class="desktop" v-if="$resize && $mq.above(768)">
            <div class="div3"></div>
            <div class="main_window"></div>
          </div>
          <div class="mobile" v-else>
            <a>sss</a>
          </div>
        <div class = "function" id="function">
          <div id="login" class="login" @keydown.esc="login_close">
            <i class="material-icons" style="font-size:36px; background-color: #e2e2e2;position:absolute;">account_circle</i>
            <a style="font-size:25px;margin-left: 18px;font-family:'Comic Sans MS', cursive, sans-serif">Sign In</a>
            <a class="closebtn"  @click="login_close">&times;</a>
            <a  class="forgetpw" style="font-size: 10px" >Forget Password</a>
            <input type="email" class="login_email_input" id="login_email_input" placeholder="User email">
            <input type="password" class="login_password_input" placeholder="User password">
            <div class="login_icon" style="background-color: #e2e2e2">
            </div>
            <button class="new_account_btn" @click="assign_new_account" >New Account</button>
            <button class="login_btn">Log In</button>
          </div>
          <div id="search" class="search" @keydown.esc="search_close">
            <input type="text" class="search_input" id="search_input"  name="search"  placeholder="Search..                              ESC to Exit   Enter to Search" @keydown.esc="search_close" >
          </div>
          <div id="newpost" class="newpost" @keydown.esc="newpost_close">
            <a class="closebtn"  @click="newpost_close">&times;</a>
            <i class="material-icons" style="font-size: 40px" >library_add</i>
            <a class = "newpost_sign">New Post</a>
            <a class ="topic_sign">Topic</a>
            <input id="topic_input" class="topic_input" type="text">
            <a class="content_sign">Content</a>
            <textarea  class="cotent_input">
            </textarea>
            <button class="post_photo_upload_btn">Select photo</button>
            <button class="post_submit_btn">Submit</button>
          </div>
        </div>
      </div>
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
     this.basedOnWindowWidth();
    },
    methods: {
      basedOnWindowWidth:function(){
        console.log (this.windowWidth,111);
        if (this.windowWidth > 768) {
          return true;
        } return false;
      },
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
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>

