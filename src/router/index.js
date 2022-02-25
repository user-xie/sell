import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 一级路由
import Login from "@/views/login/Login.vue"
import Layout from "@/views/layout/Layout.vue"
import Admin from "@/views/administrators/Administrators.vue"


const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home", //重定向
  }
]
// 动态路由
const dynamicRouter = [
  {
    path: "/",
    component: Layout,
    redirect: "/home", //重定向
    children: [
      {
        path: "/home",
        name: ["后台首页"],
        component: () => import("@/views/home/Home.vue")
      },

      // 订单管理
      {
        path: "/order",
        name: ["订单管理"],
        component: () => import("@/views/order/Order.vue")
      },
      // 店铺管理
      {
        path: "/shop",
        name: ["店铺管理"],
        role: "super",
        component: () => import("@/views/shop/Shop.vue")
      }
    ]
  },
  // 商品管理
  {
    path: "/goods",
    component: Layout,
    redirect: "/goodslist",
    children: [
      {
        path: "/goodslist",
        name: ["商品管理", "商品列表"],
        component: () => import('@/views/goods/GoodsList.vue')
      },
      {
        path: "/goodsadd",
        name: ["商品管理", "商品添加"],
        component: () => import('@/views/goods/GoodsAdd.vue')
      },
      {
        path: "/goodstype",
        name: ["商品管理", "商品分类"],
        component: () => import('@/views/goods/GoodsType.vue')
      }
    ]
  },
  //账号管理
  {
    path: "/users",
    component: Layout,
    redirect: "/userlist",
    children: [
      {
        path: "/userlist",
        name: ["账号管理", "账号列表"],
        role: "super",
        component: () => import('@/views/user/UserList.vue')
      },
      {
        path: "/useradd",
        role: "super",
        name: ["账号管理", "账号添加"],

        component: () => import('@/views/user/UserAdd.vue')
      },
      {
        path: "/userpawd",
        name: ["账号管理", "修改密码"],
        component: () => import('@/views/user/UserPawd.vue')
      },
      {
        path: "/admin",
        name: ["账号管理", "个人中心"],
        component: Admin
      }
    ]
  },
  // 销售统计
  {
    path: "/statistics",
    component: Layout,
    redirect: "/goodsstatistics",
    children: [
      {
        path: "/goodsstatistics",
        name: ["订单统计", "商品统计"],
        role: "super",
        component: () => import('@/views/statistics/GoodsStatistics.vue')
      },
      {
        path: "/orderstaistics",
        name: ["订单统计", "订单统计"],
        role: "super",
        component: () => import('@/views/statistics/OrderStaistics.vue')
      }
    ]
  },

]
//错误路由
const errorRouter = [
  {
    path: '/404',
    component: () => import('@/views/404/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }

]
const router = new VueRouter({
  routes
});

//根据不同的角色 筛选不同的路由
const createRouterData = (routes, role) => {
  // return 当前角色可访问的所有的路由数据
  return routes.filter(item => {
    console.log(item);
    //如果有children 将children 的所有数据 再次删选 并返回给当前的item.children 递归
    if (item.children && item.children.length) {
      item.children = createRouterData(item.children, role)
    }
    //如果item中没有 meta 或者 meta里面没有 role
    if (!item || !item.role) {
      return true;
    }
    // 如果item中有meta   并且item.meta 有role
    // 看role===item.meta.role 返回到新数组
    if (item && item.role && item.role === role) {
      return true;
    }
  })
}
// 拼接动态动态路由
export const power = () => {

  if (localStorage.getItem('user')) {
    let role = JSON.parse(localStorage.getItem('user')).role;
    //调用生成动态路由的 数据
    let newRouter = createRouterData(dynamicRouter, role)
    let routes1 = [...routes, ...newRouter, ...errorRouter];
    router.addRoutes(routes1)
  } else {
    router.addRoutes([...routes, ...errorRouter])
  }
}
power()

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.path == "/login") {
    next()
  }
  if (localStorage.getItem("user")) {
    next()
  }
  else {
    next("/login")
  }
})

export default router
