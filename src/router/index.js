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
        component: () => import('@/views/user/UserList.vue')
      },
      {
        path: "/useradd",
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

        component: () => import('@/views/statistics/GoodsStatistics.vue')
      },
      {
        path: "/orderstaistics",
        name: ["订单统计", "订单统计"],
        component: () => import('@/views/statistics/OrderStaistics.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
});
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
