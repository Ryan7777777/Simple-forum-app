<template>
  <div>
    <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <div class="div1">
      <div class="desktop" v-if="$resize && $mq.above(765)">
        <div class = "main" id="main">
          <div class="function_bar">
            <div class="newpost_btn">
              <i class="fa fa-plus" style="font-size:44px" @click="newpost_open"></i>
            </div>
            <div class="row">
              <div  class="col-sm-3">
                <i   v-if="log==='true'"class="fa fa-user" style="font-size:40px;"></i>
                <i  v-else class="fa fa-user" style="font-size:40px;" @click="login_open"></i>
              </div>
              <div class="col-sm-3">
                <i class="fa fa-comment" style="font-size:40px; margin-top: -2px;" @click="message_box" ></i>
              </div>
              <div class ="col-sm-3">
                <i class="fa fa-search" style="font-size:37px;margin-top: 1.5px;" @click="search_open"></i>
              </div>
              <div class="col-sm-3">
                <i v-if="log==='true'" class="fa fa-sign-out" style="font-size:40px" @click="logout"></i>
                <i v-else class="fa fa-sign-in" style="font-size:40px" @click="login_open"></i>
              </div>
            </div>
          </div>
          <div class="div4">
            <div  class="box" v-for="p in this.postes" @click="loadpost(p.id,p.title)">
              <a class="post_author">{{p.author}}</a>
              <a class="post_date">{{p.date}}</a><br>
              <a class="post_title">{{p.title}}</a>
              </div>
          </div>
          <div class="div3">
            <div class="back_arrow">
              <i class="fa fa-arrow-left"  @click="clear_window"></i>
            </div>
            <a class="title">{{title}}</a>
          </div>
          <div class="main_window">
            <div class="main_window_box" v-for="c in this.comments">
              <a>{{c}}</a>
            </div>
          </div>
      </div>
    </div>
      <div class="mobile" v-else>
        <div class = "main" id="main">
          <div class="div4"></div>
            <div class="row">
              <div class="col-sm">
                <i   v-if="log==='true'"class="fa fa-user" style="font-size:40px;"></i>
                <i  v-else class="fa fa-user" style="font-size:40px;" @click="login_open"></i>
              </div>
              <div class="col-sm">
                <i class="fa fa-comment" style="font-size:40px; margin-top: -2px;" @click="message_box" ></i>
              </div>
              <div class="col-sm">
                <i class="fa fa-plus" style="font-size:44px" @click="newpost_open"></i>
              </div>
              <div class ="col-sm">
                <i class="fa fa-search" style="font-size:37px;margin-top: 1.5px;" @click="search_open"></i>
              </div>
              <div class="col-sm">
                <i v-if="log==='true'" class="fa fa-sign-out" style="font-size:40px" @click="logout"></i>
                <i v-else class="fa fa-sign-in" style="font-size:40px" @click="login_open"></i>
              </div>
            </div>
        </div>
      </div>
        <div class = "function" id="function">
          <div id="login" class="login" @keydown.esc="login_close">
            <i class="material-icons" style="font-size:36px; background-color: #e2e2e2;position:absolute;">account_circle</i>
            <a style="font-size:25px;margin-left: 18px;font-family:'Comic Sans MS', cursive, sans-serif">Sign In</a>
            <a class="closebtn"  @click="login_close">&times;</a>
            <a  class="forgetpw" style="font-size: 10px" >Forget Password</a>
            <input v-model="email" type="email" class="login_email_input" id="login_email_input" placeholder="User email">
            <input v-model="password" type="password" class="login_password_input" placeholder="User password">
            <div class="login_icon" style="background-color: #e2e2e2">
            </div>
            <button class="new_account_btn" @click="assign_new_account" >New Account</button>
            <button type="button" class="login_btn" @click="login_checker">Log In</button>
          </div>
          <div id="search" class="search" @keydown.esc="search_close">
            <input type="text" v-model="search" class="search_input" id="search_input"  name="search"  placeholder="Search..                              ESC to Exit   Enter to Search" @keydown.esc="search_close" >
          </div>
          <div id="newpost" class="newpost" @keydown.esc="newpost_close">
            <a class="closebtn"  @click="newpost_close">&times;</a>
            <i class="material-icons" style="font-size: 40px" >library_add</i>
            <a class = "newpost_sign">New Post</a>
            <a class ="topic_sign">Topic</a>
            <input v-model="topic" id="topic_input" class="topic_input" type="text">
            <a class="content_sign">Content</a>
            <textarea  v-model="content" class="cotent_input">
            </textarea>
            <button class="post_photo_upload_btn">Select photo</button>
            <button class="post_submit_btn" @click="new_post">Submit</button>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        action: false,
        password: "",
        email: "",
        topic: "",
        content: "",
        search: "",
        id: "",
        auth: "",
        log: 'false',
        postes: [],
        comments:[],
        title: ""
      }
    },
    mounted: function () {
      this.basedOnWindowWidth();
      this.loaduser();
      this.getpost();
    },
    methods: {
      basedOnWindowWidth: function () {
        if (this.windowWidth > 768) {
          return true;
        }
        return false;
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
        document.getElementById("login_email_input");
        document.getElementById("main").style.opacity = 1;
        this.password = "";
        this.email = "";
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
        this.search = "";
      },
      newpost_open: function () {
        if (this.action === false) {
          if (localStorage.log === "true") {
            this.action = true;
            document.getElementById("newpost").style.visibility = "visible";
            document.getElementById("topic_input").focus();
            document.getElementById("main").style.opacity = 0.6;
          } else {
            this.login_open();
          }
        }
      },
      newpost_close: function () {
        this.action = false;
        document.getElementById("newpost").style.visibility = "hidden ";
        document.getElementById("main").style.opacity = 1;
        this.topic = "";
        this.content = "";
      },
      clear_window: function(){
        this.comments = [];
        this.title="";
      },
      assign_new_account: function () {
        this.action = false;
        document.getElementById("main").style.opacity = 1;
        document.getElementById("newpost").style.visibility = "hidden ";
        this.$router.push('/newuser');
        this.$router.go();
      },
      message_box: function () {
        let register = this.$router.resolve('/message');
        window.open(register.href);
      },
      login_checker: function () {
        if (this.password.length == 0 || this.email.length == 0) {
          alert('please fill in all inputs');
          this.password = "";
        } else {
          this.login();
          this.login_close();
        }
      },
      loaduser: function () {
        console.log(localStorage)
        if (localStorage.log === 'true') {
          this.log = 'true';
          this.id = localStorage.userid;
          this.auth = localStorage.auth;
        }
      },
      logout: function () {
        if (localStorage.log == "true") {
          const auth = localStorage.auth;
          this.$http.post('http://127.0.0.1:4255/api/v1/users/logout', {}, {headers: {'X-Authorization': auth}})
            .then(function (response) {
              localStorage.login = false;
              localStorage.clear();
              this.$router.go();
            }, function (error) {
              alert(error.statusText);
              this.error = true;
              this.errormessage = error.statusText;
            });
        } else {
          alert("error")
        }
      },
      login: function () {
        this.$http.post('http://127.0.0.1:4255/api/v1/users/login',
          {
            "password": this.password,
            "email": this.email
          })
          .then(function (response) {
            localStorage.userid = response.body.userId;
            localStorage.auth = response.body.token;
            localStorage.log = true;
            this.$router.go();
          }, function (error) {
            alert(error.statusText);
            this.error = true;
            this.errormessage = error.statusText;
          });
      },
      new_post: function () {
        const auth = localStorage.auth;
        console.log(this.topic, this.content)
        this.$http.post('http://127.0.0.1:4255/api/v1/newpost', {
          title: this.topic,
          content: this.content,
        }, {headers: {'X-Authorization': auth}})
          .then(function (responce) {
            console.log(responce);
            alert('successful!');
            this.newpost_close();
          }, function (error) {
            alert(error.statusText);
          });
      },
      getpost: function () {
        var index = 0;
        this.$http.get('http://127.0.0.1:4255/api/v1/allpost')
          .then(function (response) {
            for (var index=0; index< response.data.length; index++){
              var time = this.lastupdatetime(response.data[index].date);
              response.data[index].date =time
            }
            console.log(response.data[index]);
            this.postes = response.data;
          }, function (error) {
            this.error = error;
          });
      },
      loadpost: function(id,title){
        this.title = title;
        this.$http.get('http://127.0.0.1:4255/api/v1/comment/'+id)
        .then(function(response){
          this.comments = response.data;
        },function(error){
          this.error = error;
        });
      },
      lastupdatetime: function(time){
        var now =  new Date;
        var post = new Date(time);
        var differentmin = (this.differenmin(post.getTime(),now.getTime()));
        if (differentmin <60){
          return (Math.round(differentmin)+" mins ago");
        } else if(differentmin/60<24){
          return (Math.round(differentmin/60) +" hours ago");
        } else{
          return (Math.round(differentmin/(60*24))+" days ago");
        }
      },
      differenmin: function(posttime,now){
        var different = (now-posttime)/1000;
        different /=(60);
        return different;
      }
    }
  }


</script>
<style>
  @import '../css/mainstyle.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
</style>

