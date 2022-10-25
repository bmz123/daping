<style lang="less" scoped>
.homeindex {
  width: 100%;
  height: 100%;
  .el-menu {
    text-align: left;
    border-right: none;
  }
  .header {
    background-color: white;
    text-align: left;
    height: 62px;
  }
  .elcon {
    height: 100%;
  }
  .nav-css {
    height: 100%;
    background: #545c64;
  }
}
</style>

    <style>
html,
body {
  height: 100%;
}
</style>
    
    <template>
  <div class="homeindex">
    <el-container class="elcon">
      <el-header class="header">
        <img src="../assets/dianke.png" alt="" />
      </el-header>
      <el-container>
        <el-aside width="250px" class="nav-css">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/fullScreen">
              <i class="el-icon-location"></i>
              <span slot="title">大屏</span>
            </el-menu-item>
            <!-- <el-menu-item @click="goTo">
              <i class="el-icon-location"></i>
              <span slot="title">大屏</span>
            </el-menu-item> -->
            <el-menu-item index="operationCenter">
              <i class="el-icon-menu"></i>
              <span slot="title">操作中心</span>
            </el-menu-item>
            <el-menu-item index="userCenter">
              <i class="el-icon-document"></i>
              <span slot="title">用户中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">数据中心</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-tickets"></i>
              <span slot="title">表格中心</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          123
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
    
    <script>
export default {
  name: "home",

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo() {
      this.$router.push({
        path: "fullScreen",
      });
    },
  },
};
</script>
    
    