<style scoped>
  .content {
    background: url('../assets/dp.png') no-repeat center;
    background-size: 100%;
    /* height: 100%; */
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    min-width: 1903px;
  }
  .con {
    margin: 0;
    padding-bottom: 15px;
  }
  .left-con {
    font-size: 14px;
    color: #b8e3f9;
    height: auto;
    padding-right: 0 !important;
  }
  .main-con {
    height: auto;
  }
  .main-conbox {
    display: flex;
  }
  .back-css {
    background: rgba(27, 57, 74, 0.27);
    border: 1px solid rgba(32, 84, 111, 0.49);
  }
  
  .left-n2 {
    margin-top: 10px;
  }
  .left-box {
    height: 100%;
  }
  .logon-title {
    height: 80px;
    line-height: 80px;
    font-size: 26px;
    color: #fff;
    background: #0e1f2f;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .userlist {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  .active {
    border: 1px solid #3a8ee6;
  }
  .userportrait {
    margin: 0 3px;
    flex: 1;
    height: 60px;
    margin: 0 6px;
  }
  .user-title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: left;
    position: relative;
    color: #b8e3f9;
    padding-left: 10px;
  }
  .user-title::before {
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    left: 0px;
    width: 4px;
    height: 15px;
    background: #3a8ee6;
  }
  .userinfo {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .infcon {
    height: 80px;
    display: flex;
  }
  .userpic {
    width: 70px;
    height: 70px;
  }
  .infomation-text {
    text-align: left;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .infomation-userinfo {
    display: flex;
    flex-wrap: wrap;
  }
  .infomation-userinfo p {
    width: 50%;
    margin: 0 0 6px 0;
    font-size: 14px;
  }
  .infolist {
    overflow: hidden;
  }
  .infolist p {
    padding: 0 2px;
    box-sizing: border-box;
    width: 50%;
    display: inline-block;
    float: left;
    margin: 5px 0;
    text-align: left;
  }
  .chartcss {
    width: 100%;
    height: 275px;
  }
  .main-top {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .main-box {
    width: 100%;
  }
  .main-con-left {
    height: auto;
  }
  
  .main-con-l1 {
    height: auto;
    width: 100%;
    transition: 0.3s;
    padding: 5px 15px;
    box-sizing: border-box;
  }
  .main-con-l1 .social-list img {
    width: 28px;
    height: 28px;
  }
  .main-con-l1 .social-list {
    height: 28px;
    line-height: 28px;
  }
  .main-con-l2 {
    height: auto;
    width: 100%;
    clear: both;
    transition: 0.3s;
  }
  .callcss {
    width: 200px;
  }
  .xuelicss {
    width: 340px;
  }
  .main-con-right {
    width: 100%;
    padding-right: 0 !important;
    height: auto;
    position: relative;
  }
  .main-con-leftlist {
    padding-left: 0 !important;
    height: auto;
    float: left;
  }
  .con-main-center {
    margin-top: 10px;
    float: right;
    height: 520px;
    text-align: initial;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .con-main-box {
    width: 95%;
    height: 80%;
    position: relative;
  }
  .elpadding {
    padding: 0 !important;
  }
  .eccrad {
    width: 500px;
    height: 100%;
  }
  .barcss {
    width: 500px;
    height: 100%;
  }
  .social-list {
    height: auto;
    text-align: left;
    overflow: hidden;
    margin: 3px 0px;
    display: flex;
    line-height: 42px;
  }
  .con-main-box .hexagon-css-div {
    position: absolute;
    width: 100px;
  }
  .social-list1 {
    height: auto;
    text-align: left;
    overflow: hidden;
    margin: 3px 0px;
    line-height: 30px;
  }
  .social-tip {
    height: 40px;
    width: 40px;
  }
  .social-user {
    margin-left: 10px;
    margin-right: 15px;
    font-size: 14px;
    color: #fff;
  }
  .social-text {
    margin-left: 5px;
    font-size: 14px;
    color: #3a8ee6;
  }
  .social-title {
    font-size: 12px;
    color: #fff;
  }
  .main-education {
    width: 100%;
    height: 207px;
  }
  .foolter-css {
    clear: both;
    display: flex;
  }
  .fool-con {
    height: 220px;
    box-sizing: border-box;
  }
  .con-n2 {
    margin-right: 15px;
    margin-left: 15px;
  }
  .basic-css {
    height: 100%;
    width: 100%;
  }
  .hexagon-box {
    position: absolute;
  }
  .hexagon-css0 {
    left: 60px;
    top: 0;
  }
  .hexagon-css1 {
    left: 0;
    top: 100px;
  }
  .hexagon-css2 {
    left: 0px;
    top: 220px;
  }
  .hexagon-css3 {
    left: 60px;
    top: 320px;
  }
  .hexagon-css4 {
    right: 60px;
    top: 0;
  }
  .hexagon-css5 {
    right: 0px;
    top: 100px;
  }
  .hexagon-css6 {
    right: 0px;
    top: 220px;
  }
  .hexagon-css7 {
    right: 60px;
    top: 320px;
  }
  
  .twmapcss {
    height: 415px;
  }
  .twmapcon {
    width: 100%;
    height: 100%;
  }
  .con-right-box2 {
    margin-top: 10px;
    height: auto;
  }
  .con-right-box3 {
    margin-top: 10px;
    height: auto;
    width: 390px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .workebox {
    display: flex;
  }
  .worke {
    flex: 1;
    height: 100%;
  }
  .teach {
    overflow: hidden;
  }
  .teach .social-list1 {
    float: left;
    width: 50%;
  }
  .education-list {
    width: 100%;
    height: 35px;
    color: #b8e3f9;
    display: flex;
    border: 1px solid #183b54;
    line-height: 35px;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .education-list > span {
    display: inline-block;
    width: auto;
    flex: auto;
    margin-left: 1px;
    margin-right: 1px;
    background: #102131;
    font-size: 12px;
    padding: 2px;
  }
  .activeed {
    background: #ff6347 !important;
    color: #fff;
    height: 38px;
    margin-top: -3px;
  }
  .hovercss {
    transition: 0.3s;
    border: 1px solid #ff6347;
  }
  .foolter-lec {
    width: 100%;
    height: 100%;
  }
  .character_css {
    position: absolute;
    width: 180px !important;
    top: 50%;
    margin-top: -166px;
    left: 50%;
    margin-left: -95px;
  }
  .character_css img {
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-swiper-css {
  }
  .small {
    position: absolute;
    bottom: 10px;
    z-index: 99;
    height: 40px;
    display: block;
    color: #fff;
    text-align: center;
    line-height: 40px;
    width: 100%;
    background: rgba(53, 53, 53, 0.568);
  }
  .swiper-img {
    height: 250px;
  }
  .swiper-img img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1400) {
    .content {
      background: brown;
    }
  }
  </style>
  <style>
  html,
  body {
    box-sizing: border-box;
    height: 100%;
  }
  .arrow {
    pointer-events: none;
  }
  
  .arrow__path {
    stroke: rgb(150, 26, 26);
    fill: transparent;
    stroke-dasharray: 4 2;
  }
  
  .arrow__head line {
    stroke: rgb(71, 23, 23);
    stroke-width: 1px;
  }
  .arrow__path {
    stroke: #f00;
    stroke-width: 2px;
    fill: transparent;
    stroke-dasharray: 4 2;
  }
  .arrow__head line {
    stroke: #f00;
    stroke-width: 2px;
  }
  </style>
  <template>
    <div class="content">
      <!-- left -->
      <el-row :gutter="20" class="con">
        <el-col :span="6" class="left-con">
          <div class="logon-title">重点人物挖掘</div>
          <el-col :span="24" class="back-css left-n1">
            <div class="userinfo" ref="was">
              <div
                class="userlist"
                :class="[acindex === index ? 'active' : '']"
                v-for="(item, index) in imgarr"
                :key="index"
              >
                <img class="userportrait" :src="item.userimg" alt="" />
                <img
                  class="userportrait"
                  :src="items.url"
                  alt=""
                  v-for="(items, indexs) in item.usersoure"
                  :key="indexs"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="24" class="back-css left-n2">
            <div class="user-title">人物信息</div>
            <div class="userinfo userinfomation">
              <el-col :span="24" class="infcon">
                <img src="../assets/img2/1.png" class="userpic" alt="" />
                <div class="infomation-text">
                  <div class="infomation-userinfo">
                    <p>
                      <span class="el-icon-s-custom"></span> ：<span>张三</span>
                    </p>
                    <p>
                      <span class="el-icon-phone"></span> ：<span
                        >15211778899</span
                      >
                    </p>
                    <p><span class="el-icon-user"></span> ：<span>男</span></p>
                    <p><span class="el-icon-user"></span> ：<span>中国</span></p>
                    <!-- <p><span class="el-icon-user"></span> ：<span>男</span></p> -->
                    <!-- <p><span class="el-icon-user"></span> ：<span>男</span></p> -->
                  </div>
                </div>
              </el-col>
              <el-col :span="24" class="infolist">
                <p>邮箱：<span>10sasdfdgas@166.com</span></p>
                <p>微博：<span>井川里予</span></p>
                <p>小蓝鸟：<span>大鱼海棠</span></p>
                <p>fecebook：<span>柳叶熙</span></p>
                <p>车牌号：<span>京A01000</span></p>
                <p>品牌：<span>劳斯莱斯</span></p>
              </el-col>
            </div>
          </el-col>
          <el-col :span="24" class="back-css left-n2">
            <div class="user-title">人物信息</div>
            <div id="g6id" class="chartcss"></div>
          </el-col>
        </el-col>
  
        <!-- main -->
        <el-col :span="18" class="main-con">
          <el-col :span="24" class="main-conbox elpadding">
            <el-col :span="18" class="main-con-left elpadding">
              <el-col :span="24" class="back-css main-top">
                <div id="ecpuncdID" class="eccrad"></div>
                <div id="echartsbar" class="barcss"></div>
              </el-col>
              <el-col :span="24" class="elpadding">
                <el-col :span="12" class="main-con-leftlist">
                  <el-col id="socialcontact" class="back-css main-con-l1 left-n2">
                    <div class="user-title">社交信息</div>
                    <el-carousel height="250px">
                      <el-carousel-item
                        class="el-swiper-css"
                        v-for="(item, index) in echartsarr"
                        :key="index"
                      >
                        <div class="swiper-img">
                          <img :src="item.url" alt="" />
                        </div>
                        <p class="small">{{ item.text }}</p>
                      </el-carousel-item>
                    </el-carousel>
                    <!-- <div class="social-list">
                      <img
                        src="../assets/fc.jpg"
                        class="social-tip"
                        alt=""
                      /><span class="social-user">柳叶熙</span
                      ><span class="social-text">粉丝：800/万</span>
                    </div> -->
                  </el-col>
                  <!-- <el-col
  
                    class="back-css main-con-l2 callcss left-n2"
                    :class="{ hovercss: hover0 }"
                  >
                    <div class="user-title">车辆信息</div>
  
                    <div class="social-list1">
                      <span class="social-title">车牌号：</span
                      ><span class="social-text">京Acq990</span>
                    </div>
                  </el-col> -->
                  <el-col
                    class="back-css main-con-l2 xuelicss teach left-n2"
                  
                    id="cocial-con"
                  >
                    <div class="user-title">学历信息</div>
                    <!-- <div class="main-education" id="education"></div> -->
                    <div class="education-list">
                      <span
                        v-for="(item, index) in edarr"
                        :class="[edindex === index ? 'activeed' : '']"
                        :key="index"
                        >{{ item }}</span
                      >
                    </div>
                    <div class="social-list1">
                      <span class="social-title">小学：</span
                      ><span class="social-text">明诚小学</span>
                    </div>
                    <div class="social-list1">
                      <span class="social-title">中学：</span
                      ><span class="social-text">国中中学</span>
                    </div>
                    <div class="social-list1">
                      <span class="social-title">高中：</span
                      ><span class="social-text">立前镇高中</span>
                    </div>
                    <div class="social-list1">
                      <span class="social-title">大学：</span
                      ><span class="social-text">台湾大学</span>
                    </div>
                  </el-col>
                </el-col>
                <!--  -->
                <el-col :span="12" class="con-main-center">
                  <div class="con-main-box">
                    <div class="character_css">
                      <img src="../assets/renwu.png" alt="" />
                    </div>
                    <div
                      class="hexagon-css0 hexagon-css-div"
                    >
                      <Ch-lbx txtdata="-"></Ch-lbx>
                    </div>
                    <div
                      id="shejiao"
                      class="hexagon-css1 hexagon-css-div"
                    
                    >
                      <Ch-lbx txtdata="社交"></Ch-lbx>
                    </div>
                    <div id="main-vehicl" class="hexagon-css2 hexagon-css-div">
                      <Ch-lbx txtdata="学历"></Ch-lbx>
                    </div>
                    <div id="main-ren" class="hexagon-css3 hexagon-css-div">
                      <Ch-lbx txtdata="银行"></Ch-lbx>
                    </div>
                    <div class="hexagon-css4 hexagon-css-div">
                      <Ch-lbx txtdata="-"></Ch-lbx>
                    </div>
                    <div id="yiliao" class="hexagon-css5 hexagon-css-div">
                      <Ch-lbx txtdata="医疗"></Ch-lbx>
                    </div>
                    <div id="cheliang" class="hexagon-css6 hexagon-css-div">
                      <Ch-lbx txtdata="车辆"></Ch-lbx>
                    </div>
                    <div id="qita" class="hexagon-css7 hexagon-css-div">
                      <Ch-lbx txtdata="其它"></Ch-lbx>
                    </div>
                  </div>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="6" class="main-con-right">
              <el-col :span="24" class="back-css twmapcss">
                <div id="twechartsMap" class="twmapcon"></div>
              </el-col>
              <el-col
                :span="24"
                id="medical"
                class="back-css teach con-right-box2"
              >
                <div class="user-title">医疗信息</div>
  
                <div class="social-list1">
                  <span class="social-title">医疗日期：</span
                  ><span class="social-text">2015-11-06</span>
                </div>
                <div class="social-list1">
                  <span class="social-title">医疗项目：</span
                  ><span class="social-text">皮肤科</span>
                </div>
                <!-- <div class="social-list1">
                  <span class="social-title">医疗次数：</span
                  ><span class="social-text">1/次</span>
                </div> -->
              </el-col>
              <el-col id="vehicle" class="back-css con-right-box3">
                <div class="user-title">车辆信息</div>
                <div class="social-list1">
                  <span class="social-title">职位：</span
                  ><span class="social-text">劳斯莱斯中国区经理</span>
                </div>
                <div class="social-list1">
                  <span class="social-title">工作时间：</span
                  ><span class="social-text">周一到周三</span>
                </div>
                <div class="social-list1">
                  <span class="social-title">公司规模：</span
                  ><span class="social-text">300人左右</span>
                </div>
                <div class="social-list1">
                  <span class="social-title">工作内容：</span
                  ><span class="social-text"
                    >负责中国地区劳斯莱斯销售及客户服务</span
                  >
                </div>
                <div class="social-list1">
                  <span class="social-title">工作地点：</span
                  ><span class="social-text"
                    >北京市海淀区（劳斯莱斯）北京总部</span
                  >
                </div>
              </el-col>
            </el-col>
          </el-col>
          <!-- foolter -->
          <el-col :span="24" class="foolter-css elpadding left-n2">
            <el-col :span="10" class="fool-con back-css con-n1">
              <div id="basicID" class="basic-css"></div>
            </el-col>
            <el-col
              :span="6"
              id="vehicleInformation"
              class="fool-con back-css con-n2"
            >
              <!-- <div id="leftec" class="foolter-lec"></div> -->
              <div class="user-title">银行信息</div>
  
              <div class="social-list1">
                <span class="social-title">建设银行：</span
                ><span class="social-text">购买1000万分红基金</span>
              </div>
              <div class="social-list1">
                <span class="social-title">招商银行：</span
                ><span class="social-text">存储1亿的备用资金</span>
              </div>
              <div class="social-list1">
                <span class="social-title">工商银行：</span
                ><span class="social-text">公司主体的合作银行</span>
              </div>
            </el-col>
  
            <el-col :span="8" class="fool-con workebox back-css con-n3">
              <el-col :span="12" class="elpadding worke">
                <!-- <div class="user-title">工作信息</div> -->
                <div id="rifhtec" class="foolter-lec"></div>
              </el-col>
              <!-- <el-col :span="12" class="elpadding worke">
                <div class="social-list1">
                      <span class="social-title">品牌：</span
                      ><span class="social-text">劳斯莱斯</span>
                    </div>
                    <div class="social-list1">
                      <span class="social-title">品牌：</span
                      ><span class="social-text">劳斯莱斯</span>
                    </div>
                    <div class="social-list1">
                      <span class="social-title">品牌：</span
                      ><span class="social-text">劳斯莱斯</span>
                    </div>
              </el-col> -->
            </el-col>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  import G6 from '@antv/g6'
  import arrowCreate, { DIRECTION } from 'arrows-svg'
  
  import punchdata from './card.js'
  import luoban from './lbx'
  export default {
    name: 'char',
    data() {
      return {
        acindex: 0,
        echartsarr: [
          {
            text: '11111111',
            url: require('../assets/s1.jpg')
          },
          {
            text: '这是内容标题文字',
            url: require('../assets/s2.jpg')
          },
          {
            text: '这是新闻标题',
            url: require('../assets/s3.jpg')
          },
          {
            text: '北京冬奥会马上就要开幕了',
            url: require('../assets/s4.jpg')
          },
          {
            text: '西安疫情反弹会影响过年回家吗',
            url: require('../assets/s5.jpg')
          },
          {
            text: '相信美好的时刻即将到来',
            url: require('../assets/s6.jpg')
          }
        ],
        imgarr: [
          {
            userimg: require('../assets/img2/1.png'),
            usersoure: [
              { url: require('../assets/img2/2.png') },
              { url: require('../assets/img2/3.png') },
              { url: require('../assets/img2/4.png') },
              { url: require('../assets/img2/5.png') },
              { url: require('../assets/img2/6.png') }
            ]
          },
          {
            userimg: require('../assets/img2/7.png'),
            usersoure: [
              { url: require('../assets/img2/8.png') },
              { url: require('../assets/img2/9.png') },
              { url: require('../assets/img2/10.png') },
              { url: require('../assets/img2/11.png') },
              { url: require('../assets/img2/12.png') }
            ]
          },
          {
            userimg: require('../assets/img2/13.png'),
            usersoure: [
              { url: require('../assets/img2/14.png') },
              { url: require('../assets/img2/15.png') },
              { url: require('../assets/img2/16.png') },
              { url: require('../assets/img2/17.png') },
              { url: require('../assets/img2/18.png') }
            ]
          },
          {
            userimg: require('../assets/img2/19.png'),
            usersoure: [
              { url: require('../assets/img2/20.png') },
              { url: require('../assets/img2/21.png') },
              { url: require('../assets/img2/22.png') },
              { url: require('../assets/img2/23.png') },
              { url: require('../assets/img2/24.png') }
            ]
          }
        ],
        edarr: ['小学', '初中', '高中', '本科', '硕士', '硕士以上'],
        edindex: 4
      
      }
    },
    components: {
      'Ch-lbx': luoban
    },
    mounted() {
      this.antvgr6()
      this.echartsPunch()
      this.echartsBar()
      // this.bareducation()
      this.basicForce()
      this.getmap()
      // this.foolterleft()
      this.foolterright()
  
      const arrow = [
        // 社交
        arrowCreate({
          from: {
            direction: DIRECTION.LEFT,
            node: document.getElementById('shejiao'),
            translation: [-0.5, 0] // 左右  上下
          },
          to: {
            direction: DIRECTION.RIGHT,
            node: document.getElementById('socialcontact'),
            translation: [0.8, 0] // 孤度
          }
        }),
        // 学历
        arrowCreate({
          from: {
            direction: DIRECTION.LEFT,
            node: document.getElementById('main-vehicl'),
            translation: [-0.5, 0] // 左右  上下
          },
          to: {
            direction: DIRECTION.RIGHT,
            node: document.getElementById('cocial-con'),
            translation: [0.5, 0] // 孤度
          }
        }),
        // 银行
        arrowCreate({
          from: {
            direction: DIRECTION.BOTTOM,
            node: document.getElementById('main-ren'),
            translation: [0, 0.8] // 左右  上下
          },
          to: {
            direction: DIRECTION.TOP,
            node: document.getElementById('vehicleInformation'),
            translation: [0, -1]
          }
        }),
        // 医疗
        arrowCreate({
          from: {
            direction: DIRECTION.BOTTOM,
            node: document.getElementById('yiliao'),
            translation: [0, 1] // 左右  上下
          },
          to: {
            direction: DIRECTION.LEFT,
            node: document.getElementById('medical'),
            translation: [-0.5, 0.5]
          }
        }),
        // 车辆
        arrowCreate({
          from: {
            direction: DIRECTION.BOTTOM,
            node: document.getElementById('cheliang'),
            translation: [0, 0.5] // 左右  上下
          },
          to: {
            direction: DIRECTION.LEFT,
            node: document.getElementById('vehicle'),
            translation: [-0.5, 0]
          }
        })
        // arrowCreate({
        //   from: {
        //     direction: DIRECTION.LEFT,
        //     node: document.getElementById('main-social'),
        //     translation: [-0.2, -0.5] // 左右  上下
        //   },
        //   to: {
        //     direction: DIRECTION.RIGHT,
        //     node: document.getElementById('socialcontact'),
        //     translation: [0.2, 0]
        //   }
        // })
      ]
      console.log(arrow)
  
      arrow.forEach((element) => {
        document.body.appendChild(element.node)
      })
    },
    methods: {
      // 人物关系
      antvgr6() {
        const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
          return [
            ['M', x - r, y - r],
            ['a', r, r, 0, 1, 0, r * 2, 0],
            ['a', r, r, 0, 1, 0, -r * 2, 0],
            ['M', x + 2 - r, y - r],
            ['L', x + r - 2, y - r]
          ]
        }
        const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
          return [
            ['M', x - r, y - r],
            ['a', r, r, 0, 1, 0, r * 2, 0],
            ['a', r, r, 0, 1, 0, -r * 2, 0],
            ['M', x + 2 - r, y - r],
            ['L', x + r - 2, y - r],
            ['M', x, y - 2 * r + 2],
            ['L', x, y - 2]
          ]
        }
  
        const odata = {
          id: 'root',
          label: 'root',
          children: [
            {
              id: 'c1',
              label: 'c1',
              children: [
                {
                  id: 'c1-1',
                  label: 'c1-1'
                },
                {
                  id: 'c1-2',
                  label: 'c1-2',
                  children: [
                    {
                      id: 'c1-2-1',
                      label: 'c1-2-1'
                    },
                    {
                      id: 'c1-2-2',
                      label: 'c1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              id: 'c2',
              label: 'c2'
            },
            {
              id: 'c3',
              label: 'c3',
              children: [
                {
                  id: 'c3-1',
                  label: 'c3-1'
                },
                {
                  id: 'c3-2',
                  label: 'c3-2',
                  children: [
                    {
                      id: 'c3-2-1',
                      label: 'c3-2-1'
                    },
                    {
                      id: 'c3-2-2',
                      label: 'c3-2-2'
                    },
                    {
                      id: 'c3-2-3',
                      label: 'c3-2-3'
                    }
                  ]
                },
                {
                  id: 'c3-3',
                  label: 'c3-3'
                }
              ]
            }
          ]
        }
  
        G6.Util.traverseTree(odata, (d) => {
          d.leftIcon = {
            style: {
              fill: '#e6fffb',
              stroke: '#e6fffb'
            },
            img:
              'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
          }
          return true
        })
  
        G6.registerNode(
          'icon-node',
          {
            options: {
              size: [60, 20],
              stroke: '#91d5ff',
              fill: '#91d5ff'
            },
            draw(cfg, group) {
              const styles = this.getShapeStyle(cfg)
              const { labelCfg = {} } = cfg
  
              const w = styles.width
              const h = styles.height
  
              const keyShape = group.addShape('rect', {
                attrs: {
                  ...styles,
                  x: -w / 2,
                  y: -h / 2
                }
              })
  
              /**
               * leftIcon 格式如下：
               *  {
               *    style: ShapeStyle;
               *    img: ''
               *  }
               */
              if (cfg.leftIcon) {
                const { style, img } = cfg.leftIcon
                group.addShape('rect', {
                  attrs: {
                    x: 1 - w / 2,
                    y: 1 - h / 2,
                    width: 38,
                    height: styles.height - 2,
                    fill: '#8c8c8c',
                    ...style
                  }
                })
  
                group.addShape('image', {
                  attrs: {
                    x: 8 - w / 2,
                    y: 8 - h / 2,
                    width: 24,
                    height: 24,
                    img:
                      img ||
                      'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png'
                  },
                  name: 'image-shape'
                })
              }
  
              // 如果不需要动态增加或删除元素，则不需要 add 这两个 marker
              group.addShape('marker', {
                attrs: {
                  x: 40 - w / 2,
                  y: 52 - h / 2,
                  r: 6,
                  stroke: '#73d13d',
                  cursor: 'pointer',
                  symbol: EXPAND_ICON
                },
                name: 'add-item'
              })
  
              group.addShape('marker', {
                attrs: {
                  x: 80 - w / 2,
                  y: 52 - h / 2,
                  r: 6,
                  stroke: '#ff4d4f',
                  cursor: 'pointer',
                  symbol: COLLAPSE_ICON
                },
                name: 'remove-item'
              })
  
              if (cfg.label) {
                group.addShape('text', {
                  attrs: {
                    ...labelCfg.style,
                    text: cfg.label,
                    x: 50 - w / 2,
                    y: 25 - h / 2
                  }
                })
              }
  
              return keyShape
            },
            update: undefined
          },
          'rect'
        )
  
        G6.registerEdge('flow-line', {
          draw(cfg, group) {
            const startPoint = cfg.startPoint
            const endPoint = cfg.endPoint
  
            const { style } = cfg
            const shape = group.addShape('path', {
              attrs: {
                stroke: style.stroke,
                endArrow: style.endArrow,
                path: [
                  ['M', startPoint.x, startPoint.y],
                  ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
                  ['L', endPoint.x, (startPoint.y + endPoint.y) / 2],
                  ['L', endPoint.x, endPoint.y]
                ]
              }
            })
  
            return shape
          }
        })
  
        const defaultStateStyles = {
          hover: {
            stroke: '#1890ff',
            lineWidth: 2
          }
        }
  
        const defaultNodeStyle = {
          fill: '#91d5ff',
          stroke: '#40a9ff',
          radius: 5
        }
  
        const defaultEdgeStyle = {
          stroke: '#91d5ff',
          endArrow: {
            path: 'M 0,0 L 12, 6 L 9,0 L 12, -6 Z',
            fill: '#91d5ff',
            d: -20
          }
        }
  
        const defaultLayout = {
          type: 'compactBox',
          direction: 'TB',
          getId: function getId(d) {
            return d.id
          },
          getHeight: function getHeight() {
            return 16
          },
          getWidth: function getWidth() {
            return 16
          },
          getVGap: function getVGap() {
            return 40
          },
          getHGap: function getHGap() {
            return 70
          }
        }
  
        const defaultLabelCfg = {
          style: {
            fill: '#000',
            fontSize: 12
          }
        }
  
        const container = document.getElementById('g6id')
        const width = container.scrollWidth
        const height = container.scrollHeight || 500
  
        const minimap = new G6.Minimap({
          size: [150, 100]
        })
  
        const graph = new G6.TreeGraph({
          container: 'g6id',
          width,
          height,
          linkCenter: true,
          // plugins: [minimap],//缩略图
          modes: {
            default: ['drag-canvas', 'zoom-canvas']
          },
          defaultNode: {
            type: 'icon-node',
            size: [120, 40],
            style: defaultNodeStyle,
            labelCfg: defaultLabelCfg
          },
          defaultEdge: {
            type: 'flow-line',
            style: defaultEdgeStyle
          },
          nodeStateStyles: defaultStateStyles,
          edgeStateStyles: defaultStateStyles,
          layout: defaultLayout
        })
  
        graph.data(odata)
        graph.render()
        graph.fitView()
  
        graph.on('node:mouseenter', (evt) => {
          const { item } = evt
          graph.setItemState(item, 'hover', true)
        })
  
        graph.on('node:mouseleave', (evt) => {
          const { item } = evt
          graph.setItemState(item, 'hover', false)
        })
  
        graph.on('node:click', (evt) => {
          const { item, target } = evt
          const targetType = target.get('type')
          const name = target.get('name')
  
          // 增加元素
          if (targetType === 'marker') {
            const model = item.getModel()
            if (name === 'add-item') {
              if (!model.children) {
                model.children = []
              }
              const id = `n-${Math.random()}`
              model.children.push({
                id,
                label: id.substr(0, 8),
                leftIcon: {
                  style: {
                    fill: '#e6fffb',
                    stroke: '#e6fffb'
                  },
                  img:
                    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ'
                }
              })
              graph.updateChild(model, model.id)
            } else if (name === 'remove-item') {
              graph.removeChild(model.id)
            }
          }
        })
        if (typeof window !== 'undefined') {
          window.onresize = () => {
            if (!graph || graph.get('destroyed')) return
            if (!container || !container.scrollWidth || !container.scrollHeight) {
              return
            }
            graph.changeSize(container.scrollWidth, container.scrollHeight)
          }
        }
      },
      // 热力图
      echartsPunch() {
        // prettier-ignore
        const mycart = this.$echarts.init(document.getElementById('ecpuncdID'))
  
        // prettier-ignore
        const days = [ 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday' ]
        // prettier-ignore
  
        let data = punchdata.datas.map(function (item) {
          return [item[1], item[0], item[2] || '-']
        })
        console.log(data)
        let option = {
          tooltip: {
            position: 'top'
          },
          title: {
            text: '热力图',
            textStyle: {
              color: '#fff'
            }
          },
          grid: {
            height: '70%',
            left: '15%',
            top: '15%',
            width: '82%'
          },
          xAxis: {
            type: 'category',
            data: punchdata.hours,
            splitArea: {
              show: true
            }
          },
          yAxis: {
            type: 'category',
            data: days,
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: 0,
            max: 30,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            color: ['#2c3e50', '#0e95f1'],
            show: false
          },
          series: [
            {
              name: 'Punch Card',
              type: 'heatmap',
              data: data,
              label: {
                show: true
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mycart.setOption(option, true)
      },
      // 柱状图
      echartsBar() {
        const mycart = this.$echarts.init(document.getElementById('echartsbar'))
  
        let option = {
          yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          title: {
            text: '柱状图',
            textStyle: {
              color: '#fff'
            }
          },
          grid: {
            height: '70%',
            top: '15%',
            bottom: '10%'
          },
          xAxis: {
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(63, 93, 123, 0.30)'
              }
            }
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        }
        mycart.setOption(option, true)
      },
      // 学历柱状图
      bareducation() {
        var fontColor = '#30eee9'
        const myChart = this.$echarts.init(document.getElementById('education'))
  
        let option = {
          color: ['#3398DB'],
          // title: [
          //   {
          //     left: '5%',
          //     top: '3%',
          //     textStyle: {
          //       fontSize: 12,
          //       color: '#b8e3f9'
          //     },
          //     text: '学历'
          //   }
          // ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [
            {
              top: '5%',
              left: '3%',
              right: '4%',
              bottom: '0%',
              containLabel: true,
              gridIndex: 0,
              width: '90%',
              height: '85%'
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: ['小学', '初中', '高中', '大学', '硕士'],
              gridIndex: 0,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              gridIndex: 0,
              splitLine: {
                lineStyle: {
                  color: '#3d3e5a'
                }
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '20%',
              itemStyle: {
                normal: {
                  color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#28daf1'
                    },
                    {
                      offset: 0.5,
                      color: '#6680e2'
                    },
                    {
                      offset: 1,
                      color: '#7244de'
                    }
                  ])
                }
              },
              data: [55, 66, 77, 88, 99]
            }
          ]
        }
        myChart.setOption(option, true)
      },
      // 底部中间-力导向图
      basicForce() {
        const container = document.getElementById('basicID')
        const width = container.scrollWidth
        const height = container.scrollHeight || 500
        const graph = new G6.Graph({
          container: 'basicID',
          width,
          height,
          layout: {
            type: 'force'
          },
          defaultEdge: {
            labelCfg: {
              autoRotate: true,
              style: {
                fill: '#1890ff',
                fontSize: 14
              }
            }
          },
          defaultNode: {
            size: 15
          }
        })
  
        fetch(
          'https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json'
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            graph.data({
              nodes: data.nodes.map((item, i) => {
                item.label = 'a' + i
                return item
              }),
              edges: data.edges.map(function (edge, i) {
                edge.id = 'edge' + i
                edge.label = 'edge' + i
                return Object.assign({}, edge)
              })
            })
  
            graph.render()
  
            graph.on('node:dragstart', function (e) {
              graph.layout()
              refreshDragedNodePosition(e)
            })
            graph.on('node:drag', function (e) {
              const forceLayout = graph.get('layoutController').layoutMethods[0]
              forceLayout.execute()
              refreshDragedNodePosition(e)
            })
            graph.on('node:dragend', function (e) {
              e.item.get('model').fx = null
              e.item.get('model').fy = null
            })
  
            if (typeof window !== 'undefined') {
              window.onresize = () => {
                if (!graph || graph.get('destroyed')) return
                if (
                  !container ||
                  !container.scrollWidth ||
                  !container.scrollHeight
                ) {
                  return
                }
                graph.changeSize(container.scrollWidth, container.scrollHeight)
              }
            }
          })
  
        function refreshDragedNodePosition(e) {
          const model = e.item.get('model')
          model.fx = e.x
          model.fy = e.y
        }
      },
      // 台湾地图
      getmap(val) {
        this.indexs = val
        let datas = [
          {
            name: '高雄市',
            value: 111
          },
          {
            name: '台南市',
            value: 112
          },
          {
            name: '高北市',
            value: 101
          }
        ]
        let myChart = this.$echarts.init(document.getElementById('twechartsMap'))
        myChart.showLoading({
          text: '数据正在努力加载...',
          textStyle: { fontSize: 30, color: '#444' },
          effectOption: { backgroundColor: 'rgba(0, 0, 0, 0)' }
        })
        this.$axios
          .get('../static/twCounty2010.geo.json')
  
          .then((buildingsGeoJSON) => {
            console.log(buildingsGeoJSON)
            myChart.hideLoading()
  
            // buildingsGeoJSON.data.features.map((item)=>{
            //   console.log(item)
            //   if(datas.includes(item.properties.name)){
            //     console.log(item.properties.name)
            //   }
  
            // })
  
            console.log(buildingsGeoJSON.data)
  
            this.$echarts.registerMap('TWN', buildingsGeoJSON.data)
            let option = {
              visualMap: {
                min: 10,
                show: false,
                max: 100,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                  color: ['red', 'yellow', 'orangered']
                }
              },
              series: [
                {
                  name: '数据',
                  type: 'map',
                  map: 'TWN', // 自定义扩展图表类型
                  aspectScale: 1,
                  roam: true,
                  showLegendSymbol: false,
                  // label: {
                  //   show: true,
                  //   color: '#fff',
                  //   fontSize: 10
                  // },
                  label: {
                    normal: {
                      show: true,
                      color: '#fff',
                      formatter: function (params) {
                        console.log(params)
                        if (params.value) {
                          return params.name + '\n' + params.value
                        } else {
                          return params.name // 地图上展示文字 + 数值
                        }
                      }
                    }
                  },
                  zoom: 1,
                  textStyle: {
                    color: 'rgba(255,255,255,0.65)', // 地图初始化区域字体颜色
                    fontSize: 16,
                    opacity: 1,
                    backgroundColor: '#1B212B ',
                    borderColor: '#998484',
                    borderWidth: 1,
                    position: 'insideTop',
                    padding: [6, 8],
                    borderRadius: 0,
                    distanca: 20
                  },
  
                  emphasis: {
                    label: {
                      show: true,
                      color: '#fff',
                      fontSize: 10
                    },
                    itemStyle: {
                      areaColor: '#FFD181',
                      borderColor: '#fff',
                      borderWidth: 1
                    }
                  },
                  itemStyle: {
                    normal: {
                      // 静态模式下显示的默认样式
                      borderWidth: 1.6,
                      borderColor: '#95FFFF',
                      color: '#0090FF',
                      areaColor: '#0E95F1',
                      shadowColor: '#0E95F1',
                      shadowBlur: 20
                    }, // 阴影效果
                    emphasis: {
                      borderWidth: 1.6,
                      borderColor: '#95FFFF',
                      color: '#0058B8',
                      textStyle: {
                        // color:'blue'
                      }
                    }
                  },
                  data: [
                    { name: '台中市', value: '55' },
                    { name: '台北市', value: '68' },
                    { name: '台南市', value: '33' },
                    { name: '高雄市', value: '25' }
                  ],
                  layoutCenter: ['50%', '50%'],
                  layoutSize: '160%',
                  markPoint: {
                    symbol: 'none'
                  }
                }
              ]
            }
  
            myChart.setOption(option, true)
          })
      },
      // 底部饼图
      foolterleft() {
        let mypie = this.$echarts.init(document.getElementById('leftec'))
        let options = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            textStyle: {
              color: '#fff'
            },
            left: 'center'
          },
  
          series: [
            {
              name: 'Access',
              type: 'pie',
              center: ['25%', '60%'],
              radius: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union' },
                { value: 300, name: 'Video' }
              ]
            },
            {
              name: 'Access',
              type: 'pie',
              center: ['75%', '60%'],
              radius: ['30%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union' },
                { value: 300, name: 'Video' }
              ]
            }
          ]
        }
        mypie.setOption(options, true)
      },
      // 底部柱状图
      foolterright() {
        const mycart = this.$echarts.init(document.getElementById('rifhtec'))
  
        let option = {
          color: ['#3398DB'],
          title: [
            {
              left: '2%',
              top: '1%',
              textStyle: {
                fontSize: 12,
                color: '#b8e3f9'
              },
              text: '标题'
            }
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: [
            {
              top: '15%',
              left: '2%',
              containLabel: true,
              width: '45%',
              height: '80%'
            },
            {
              top: '15%',
              left: '50%',
              right: '4%',
              containLabel: true,
              width: '45%',
              height: '80%'
            }
          ],
          xAxis: [
            {
              type: 'category',
              gridIndex: 0,
              data: ['小学', '初中', '高中', '大学', '硕士'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            },
            {
              type: 'category',
              gridIndex: 1,
              data: ['小学', '初中', '高中', '大学', '硕士'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              gridIndex: 0,
              splitLine: {
                lineStyle: {
                  color: '#3d3e5a'
                }
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            },
            {
              type: 'value',
              gridIndex: 1,
              splitLine: {
                lineStyle: {
                  color: '#3d3e5a'
                }
              },
              axisLabel: {
                color: '#b8e3f9'
              }
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '20%',
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#28daf1'
                    },
                    {
                      offset: 0.5,
                      color: '#6680e2'
                    },
                    {
                      offset: 1,
                      color: '#7244de'
                    }
                  ])
                }
              },
              data: [55, 66, 77, 88, 99]
            },
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '20%',
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#28daf1'
                    },
                    {
                      offset: 0.5,
                      color: '#6680e2'
                    },
                    {
                      offset: 1,
                      color: '#7244de'
                    }
                  ])
                }
              },
              data: [55, 66, 77, 88, 99]
            }
          ]
        }
        mycart.setOption(option, true)
      }
    }
  }
  </script>
  