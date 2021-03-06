import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [{
    path: '/',
    name: 'index',
    component: () => import('@/components/MainPage.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/components/admin/Editor.vue')
  },
  /* {
    path: '/add',
    name: 'add',
    component: () => import('@/components/admin/Add.vue')
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('@/components/admin/Update.vue')
  }, */
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/admin/Admin.vue'),
    children: [{
        path: '/',
        name: 'list',
        component: () => import('@/components/admin/List.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/components/admin/List.vue')
      },
      {
        path: 'add-update',
        name: 'add-update',
        component: () => import('@/components/admin/AddAndUpdate.vue')
      }
    ]
  },
  {
    path: '/sub',
    name: 'SubPage',
    component: () => import('@/components/SubPage.vue'),
    children: [{
        path: '/',
        name: 'ITheory',
        component: () => import('@/components/asidemenu/ITheory.vue'),
      },
      {
        path: 'ITheory',
        name: 'ITheory',
        component: () => import('@/components/asidemenu/ITheory.vue'),
      },
      {
        path: 'IAssistant',
        name: 'IAssistant',
        component: () => import('@/components/asidemenu/IAssistant.vue'),
      },
      {
        path: 'IAdvantage',
        name: 'IAdvantage',
        component: () => import('@/components/asidemenu/IAdvantage.vue'),
      },
      {
        path: 'ISpecification',
        name: 'ISpecification',
        component: () => import('@/components/asidemenu/ISpecification.vue'),
      },
      {
        path: 'parames',
        name: 'parames',
        component: () => import('@/components/asidemenu/TechnicalParameters.vue'),
      },
      {
        path: 'MAbout',
        name: 'MAbout',
        component: () => import('@/components/asidemenu/MAbout.vue'),
      },
      {
        path: 'MExplain',
        name: 'MExplain',
        component: () => import('@/components/asidemenu/MExplain.vue'),
      },
      {
        path: 'NAgent',
        name: 'NAgent',
        component: () => import('@/components/asidemenu/NAgent.vue'),
      },
      {
        path: 'NDelivery',
        name: 'NDelivery',
        component: () => import('@/components/asidemenu/NDelivery.vue'),
      },
      {
        path: 'NInstall',
        name: 'NInstall',
        component: () => import('@/components/asidemenu/NInstall.vue'),
      },
      {
        path: 'NInstall',
        name: 'NInstall',
        component: () => import('@/components/asidemenu/NInstall.vue'),
      },
      {
        path: 'AAgent',
        name: 'AAgent',
        component: () => import('@/components/asidemenu/AAgent.vue'),
      },
      {
        path: 'AExplain',
        name: 'AExplain',
        component: () => import('@/components/asidemenu/AExplain.vue'),
      },
      {
        path: 'AAbout',
        name: 'AAbout',
        component: () => import('@/components/asidemenu/AAbout.vue'),
      },
      {
        path: 'Feedback',
        name: 'Feedback',
        component: () => import('@/components/asidemenu/Feedback.vue'),
      }
    ]
  }
]

/* menus.forEach((item,index) => {
  if (item.id != 'feedback') {
    item.sub.forEach((sub) => {
      routes.push({
        path: `/${sub.componentName}`,
        name: sub.componentName+index,
        component: () => import(`@/components/asidemenu/${sub.componentName}`)
      })
    })
  }
}) */

export default new Router({
  // mode: 'history',
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  routes
})
