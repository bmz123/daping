<style scoped>
  .login {
    box-sizing: border-box;
    height: 100%;
  }
  .header {
    height: 60px;
    background: burlywood;
    font-size: 26px;
    color: #fff;
    text-align: left;
    padding: 0 15px;
  }
  .mian {
    height: 100%;
    position: relative;
    background: rgb(10,27, 53)
  }
  .fooler {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #fff;
    background: #868686;
  }
  .mian_box {
    width: 500px;
    height: 400px;
    margin: 0 auto;
    background: white;
    border: 2px #ccc solid;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -200px;
    padding: 20px;
    box-sizing: border-box;
  }
  .usertitle {
    margin-top: 25px;
    margin-bottom: 50px;
  }
  .grolup {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 25px;
  }
  
  .buttonok {
    letter-spacing: 8px;
    display: inline-block;
    margin: 0;
    margin-left: 10px;
  }
  .userbutton {
    margin-top: 30px;
    width: 100%;
    padding: 20px 0;
    border-color: #48d065;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #409eff;
    cursor: pointer;
  }
  .userbutton:hover {
    color: red;
  }
  .userbutton:focus {
    outline: none;
  }
  .userbutton:hover::after {
    height: 100%;
    z-index: 0;
    color: #fff;
  }
  .userbutton > span {
    width: 100px;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 88;
    text-align: center;
    color: #fff;
    top: 12px;
  }
  </style>
  <template>
    <div class="login">
      <!--  <header class="header">公众登录平台</header> -->
      <main class="mian">
        <div class="mian_box">
          <div class="mian_con">
            <h2 class="usertitle">用户登录</h2>
            <div v-show="!slideShow">
              <div class="grolup">
                <el-input
                  type="text"
                  prefix-icon="iconfont icon-wode "
                  autocomplete="off"
                  v-model.trim="user.username"
                  @input="regWatch"
                  placeholder="请输入6-18位用户名"
                  minlength="6"
                  maxlength="18"
                  ref="refusername"
                >
                </el-input>
              </div>
              <div class="grolup">
                <el-input
                  type="password"
                  prefix-icon="iconfont icon-mima"
                  minlength="6"
                  maxlength="18"
                  autocomplete="new-password"
                  v-model.trim="user.password"
                  placeholder="请输入6-18位密码"
                  @keyup.enter.native="userClick"
                ></el-input>
              </div>
            </div>

            <div class="grolup">
              <button @click="userClick" type="primary" class="userbutton">
                <span>
                  <p class="buttonok">登录</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <!--  <footer class="fooler">
            <p>© 2020 中国电子科技集团公司信息科学研究院</p>
      </footer> -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: "login",
    data() {
      return {
        slideShow: false,
        user: {
          username: "",
          password: "",
        },
      };
    },
  
    components: { },
    mounted() {},
    methods: {
      userClick() {
      //非空判断
      // if (this.user.username == "" || this.user.userpass == "") {
      //   this.$message.info("用户名或密码不能为空");
      //   return;
      // }
      // //判断字符长度
      // if (this.user.username.length < 6 || this.user.userpass.length < 6) {
      //   this.$message.info("请输入6-18位字符长度的用户名或密码");
      //   return;
      // }
      this.$router.push({
        path:'home'
      })
    },
      regWatch(val) {
      if (val.length > 6) {
        let r = /\w{6,18}/g;
        let s = val.match(r);
        console.log(s.length);
        if (s[0].length >= 18) {
          this.$message.info("请输入6-18位字符长度的用户名或密码");
        }
      }
    },
    },
  };
  </script>
  
  