<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">问题反馈</div>
      <div class="con_main">
        <div class="con_title">
          给我们留言
          <img src="@/assets/imgs/pen.png" alt>
        </div>
        <div class="con_content">
          <div class="feedback_msg">
            <div class="feedback_content">
              <div>姓名：
                <el-input class="m_input" placeholder="您的姓名"></el-input>
              </div>
              <div>邮箱：
                <el-input class="m_input" placeholder="您的邮箱"></el-input>
              </div>
              <div>有什么我们可以帮助的？
                <el-input class="m_textare" type="textarea" :rows="12" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="feedback_btn">
              <el-button>取消</el-button>
              <el-button type="primary">提交</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/content.css";
.con_content{
  padding: 0;
}
.con_title{
  text-align: center;
}
.feedback_msg {
  height: 900px;
  background: url('../../assets/imgs/bg2.png') no-repeat center bottom;;
}

.feedback_msg .feedback_title {
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 22px;
  font-weight: 250;
  color: #000;
  background-color: #f2f2f2;
}

.feedback_msg .feedback_title img {
  width: 30px;
  padding: 0 10px;
  vertical-align: middle;
}

.feedback_msg .feedback_content {
  width: 450px;
  padding: 30px 40px;
  margin: 0 auto;
}

.feedback_msg .feedback_content .m_input {
  width: 80%;
  padding-bottom: 20px;
}

.feedback_msg .feedback_content .m_textare {
  width: 95%;
  margin-top: 20px;
}

.feedback_msg .feedback_btn {
  text-align: center;
}
</style>
