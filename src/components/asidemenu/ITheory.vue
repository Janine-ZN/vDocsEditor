<template>
  <div class="content">
    <div class="main_content">
      <div class="con_nav">产品简介 > 技术原理</div>
      <div class="con_main">
        <div class="con_title">技术原理</div>
        <div class="con_content">
          <!-- 代码区 -->
          <h1>
            <a></a>
            <a>
              <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">1
                <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </span>VulHunter
            </a>
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">技术原理</span>
          </h1>
          <h2>
            <a></a>
            <a>1.1
              <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;</span>VulHunter
            </a>
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">简介</span>
          </h2>
          <p>SecZone VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">（以下简称</span>VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">）是国内首款基于“交互式应用安全测试（</span>Interactive Application Security Testing
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">，以下简称</span>IAST
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >）”技术的全新一代“灰盒”代码审计、安全测试和第三方软件检测产品，由国内领先的软件安全开发生命周期（</span>S-SDLC
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">）解决方案提供商</span>SecZone
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">自主研发，拥有自主知识产权。</span>IAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是近年来兴起的一项新技术，被</span>Gartner
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">公司列为信息安全领域的</span>Top10
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">技术之一。</span>
          </p>
          <p>VulHunter
            <span style="font-family: &#39;Microsoft YaHei UI&#39;,sans-serif">融合了</span>SAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>DAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">技术的优点，无需源码，支持对字节码的检测。</span>VulHunter
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >极大的提高了安全测试的效率和准确率，良好的适用于敏捷开发和</span>DevOps
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >，可以在软件的开发和测试阶段无缝集成现有开发流程，让开发人员和测试人员在执行功能测试的同时，无感知的完成安全测试，解决了现有应用安全测试技术面临的挑战。</span>
          </p>
          <h2>
            <a></a>
            <a>1.2
              <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">检测基础</span>
            </a>
          </h2>
          <p>
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >自动化安全测试的检测基础是要获取各类被测应用程序的各种信息，基于对这些信息的分析得到应用程序的安全弱点。如：</span>SAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">通过对源码进行静态分析，得到数据流信息；</span>DAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是通过模拟攻击，获取攻击的响应信息。</span>
          </p>
          <p>VulHunter
            <span
              style="font-family: &#39;Microsoft YaHei UI&#39;,sans-serif"
            >则是通过在应用程序的字节码中动态插桩检测“探针”，来获取应用程序各种运行时的上下文信息。在应用程序运行的同时，实时分析程序的安全弱点。</span>
          </p>
          <p>
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">与基于</span>SAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>DAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">技术的产品相比，</span>VulHunter
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >通过字节码插桩应用程序能获得更多准确的运行时信息。表</span>1
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是</span>VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">与</span>DAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>SAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">关于能获取到的信息类型对比。</span>
          </p>
          <p style="text-align:center">
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">表</span>1 VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">与</span>SAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">、</span>DAST
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">所能获取的信息对比</span>
          </p>
          <table>
            <tbody>
              <tr class="firstRow">
                <td
                  width="117"
                  style="border-top: 1px solid rgb(68, 114, 196); border-bottom: 1px solid rgb(68, 114, 196); border-left: 1px solid rgb(68, 114, 196); border-image: initial; border-right: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif;color:white"
                      >获取信息类型</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: 1px solid rgb(68, 114, 196); border-left: none; border-bottom: 1px solid rgb(68, 114, 196); border-right: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;color:white">SAST</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="135"
                  style="border-top: 1px solid rgb(68, 114, 196); border-left: none; border-bottom: 1px solid rgb(68, 114, 196); border-right: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;color:white">DAST</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="132"
                  style="border-top: 1px solid rgb(68, 114, 196); border-right: 1px solid rgb(68, 114, 196); border-bottom: 1px solid rgb(68, 114, 196); border-image: initial; border-left: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;color:white">VulHunter</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span style="font-size:13px;line-height:107%">http</span>
                    </strong>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >请求</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span style="font-size:13px;line-height:107%">http</span>
                    </strong>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >响应</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >数据流</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√（静态）</span>
                  </p>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >第三方软件</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >配置数据</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="117"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; padding: 0px 7px;"
                >
                  <p>
                    <strong>
                      <span
                        style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                      >后端连接信息</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="117"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="135"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <br>
                </td>
                <td
                  width="132"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >√</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>
            <a>1.3
              <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">插桩技术</span>
            </a>
          </h2>
          <p>
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">插桩技术（</span>Instrumentation
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">）是</span>VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">获取应用程序上下文信息的基础</span>.
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">以</span>Java
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">为例，</span>Java
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">字节码插桩（</span>Java Instrumentation
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">）是</span>JDK 1.5
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >引入的一项功能，开发者可以构建一个独立于应用程序的代理程序（</span>Agent
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">），通过插桩检测探针来监测运行在</span>JVM
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">上的程序。</span>
          </p>
          <p>
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">图</span>1
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是一个</span>Java
            <span
              style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
            >程序从源码编译到运行的基本流程，其中，插桩过程是作用在字节码层面，并在</span>JVM
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">加载字节码程序（</span>.class
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">）时触发。</span>
          </p>
          <p style="text-align:center">
            <img
              width="800px"
              :src="imgURL+'/ueditor/php/upload/image/20190218/1550495246.png'"
              title="1550495246.png"
              alt="1.png"
            >
          </p>
          <h2>
            <a></a>
            <a>1.4
              <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">系统架构</span>
            </a>
          </h2>
          <p>VulHunter
            <span style="font-family: &#39;Microsoft YaHei UI&#39;,sans-serif">包括</span>Server
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>Agent
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">两大组件，见图</span>2
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">。</span>
          </p>
          <p style="text-align:center">
            <img
              width="800px"
              :src="imgURL+'/ueditor/php/upload/image/20190218/1550495117.png'"
              title="1550495117.png"
              alt="2.png"
            >
          </p>
          <p style="text-align:center">
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">图2 VulHunter系统组件</span>
          </p>
          <p>VulHunter Server
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是部署在云端或本地的服务器，</span>Agent
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">是部署在被测应用程序所在的</span>Web
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">服务器中的安全检测引擎。</span>Agent
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>Server
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">通过</span>https/http
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">进行通信。</span>Agent
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">和</span>Server
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">的详细说明见表</span>2
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">。</span>
          </p>
          <p style="text-align:center">
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">表</span>2 VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">组件划分</span>
          </p>
          <table width="558">
            <tbody>
              <tr class="firstRow">
                <td
                  width="132"
                  valign="top"
                  style="border-top: 1px solid rgb(68, 114, 196); border-bottom: 1px solid rgb(68, 114, 196); border-left: 1px solid rgb(68, 114, 196); border-image: initial; border-right: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;font-family:等线;color:white">组件</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="425"
                  valign="top"
                  style="border-top: 1px solid rgb(68, 114, 196); border-right: 1px solid rgb(68, 114, 196); border-bottom: 1px solid rgb(68, 114, 196); border-image: initial; border-left: none; background: rgb(68, 114, 196); padding: 0px 7px;"
                >
                  <p style=";text-align:center;text-indent:8px">
                    <strong>
                      <span style="font-size:13px;line-height:107%;font-family:等线;color:white">组件说明</span>
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="132"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;font-family:等线">安全检测引擎（Agent）</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="425"
                  valign="top"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); background: rgb(217, 226, 243); padding: 0px 7px;"
                >
                  <p style="margin-left:0">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >软件, 部署在被测应用程序所在的Web服务器中，负责执行对Web应用的安全弱点的检测，其主要功能如下：</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height: 107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >1)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height: 107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >接收Server上配置的各种安全策略和规则。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size: 13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >2)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >根据Server上配置的安全策略和规则，插桩应用程序的字节码，采集应用程序运行时的各种上下文信息。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size: 13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >3)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >对采集到的应用程序运行时上下文信息进行分析，检测被测程序及其依赖的第三方软件的安全弱点。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span style="font-size: 13px;line-height:107%">4)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >将发现的安全弱点发送给Server。</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  width="132"
                  style="border-right: 1px solid rgb(142, 170, 219); border-bottom: 1px solid rgb(142, 170, 219); border-left: 1px solid rgb(142, 170, 219); border-image: initial; border-top: none; padding: 0px 7px;"
                >
                  <p style="text-align:center">
                    <strong>
                      <span style="font-size:13px;line-height:107%;font-family:等线">安全检测服务器（Server）</span>
                    </strong>
                  </p>
                </td>
                <td
                  width="425"
                  valign="top"
                  style="border-top: none; border-left: none; border-bottom: 1px solid rgb(142, 170, 219); border-right: 1px solid rgb(142, 170, 219); padding: 0px 7px;"
                >
                  <p style="margin-left:0">
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >软件, 是VulHunter管理和使用的主程序，其主要功能如下：</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >1)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >提供Agent下载功能。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >2)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >接收来自Agent的安全弱点信息。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >3)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >向用户提供可视化的界面，实时显示被测应用程序及其依赖的第三方软件的安全弱点信息。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >4)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >提供安全弱点的解决方案。 &nbsp;</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >5)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height:107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >以报表的形式展现产品的安全状态。</span>
                  </p>
                  <p
                    class="MsoListParagraph"
                    style="margin-top:0;margin-right:0;margin-bottom: 10px;margin-left:28px;line-height:107%"
                  >
                    <span style="font-size:13px;line-height:107%">6)
                      <span
                        style="font:9px &#39;Times New Roman&#39;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</span>
                    </span>
                    <span
                      style="font-size:13px;line-height: 107%;font-family:&#39;Microsoft YaHei UI&#39;,sans-serif"
                    >安全策略和规则的配置。</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>
            <a></a>
            <a>1.5
              <span style="font:9px &#39;Times New Roman&#39;">&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">检测流程</span>
            </a>
          </h2>
          <p>VulHunter
            <span
              style="font-family: &#39;Microsoft YaHei UI&#39;,sans-serif"
            >是基于功能测试驱动的被动检测技术，即在开发工程师、测试工程师甚至自动化测试脚本进行功能测试的同时，实时分析软件安全弱点。其使用和检测流程见图</span>3
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">。</span>
          </p>
          <p style=";text-align:center">
            <img
              width="800px"
              :src="imgURL+'/ueditor/php/upload/image/20190218/1550495265.png'"
              title="1550495265.png"
              alt="3.png"
            >
          </p>
          <p style=";text-align:center">
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">图</span>3 VulHunter
            <span style="font-family:&#39;Microsoft YaHei UI&#39;,sans-serif">使用和检测流程</span>
          </p>
          <p>&nbsp;</p>
          <p>
            <br>
          </p>

          <!-- 代码区 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgURL: "http://localhost:80"
    }
  },
  mounted() {
    // this.pageScroll;
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style scoped>
@import "../../assets/css/content.css";
</style>
