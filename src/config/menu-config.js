module.exports = [
  {
    name: '产品介绍',
    id: 'introduce',
    sub: [
      {
        name: '技术原理',
        componentName: 'ITheory'
      },
      {
        name: '产品优势',
        componentName: 'IAdvantage'
      },
      {
        name: '产品助理',
        componentName: 'IAssistant'
      },
      {
        name: '产品规格',
        componentName: 'ISpecification'
      }
    ]
  },
  {
    name: '安装引导',
    id: 'navigation',
    sub: [
      {
        name: '安装包安装',
        componentName: 'NInstall'
      },
      {
        name: '硬件交付',
        componentName: 'NDelivery'
      },
      {
        name: 'Agent 设置',
        componentName: 'NAgent'
      }
    ]
  },
  {
    name: '使用手册',
    id: 'manual',
    sub: [
      {
        name: '介绍说明',
        componentName: 'MExplain'
      },
      {
        name: '相关操作说明',
        componentName: 'MAbout'
      }]
  },
  {
    name: 'API',
    id: 'api',
    sub: [
      {
      name: '介绍说明',
      componentName: 'AExplain'
    }, 
    {
      name: '相关操作说明',
      componentName: 'AAbout'
    }, 
    {
      name: 'Agent 设置',
      componentName: 'AAgent'
    }
  ]
  },
  {
    name: '问题反馈',
    id: 'feedback'/* ,
  sub: [{
    name: 'Layout 布局',
    componentName: 'BasicLayout'
  }, {
    name: 'Container 布局容器',
    componentName: 'BasicContainer'
  }] */
  }

]