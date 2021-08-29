// 1.公共路由(login,notfound)
// 2.私有路由(dashboard,article,setting)
import Detail from "../pages/detail";
const commonRoutes = [
    {
        pathname: '/detail',
        component: Detail
    }
    // },
    // {
    //     pathname: '/404',
    //     component: NotFound
    // }
]
// 加上一个前缀 /admin
// const privateRoutes = [
//     {
//         pathname: '/admin/dashboard',
//         component: Dashboard,
//         title: '仪表盘',
//         isTop: true, //代表一级菜单
//         icon: 'HomeOutlined'
//     },
//     {
//         pathname: '/admin/article',
//         component: Article,
//         title: '文章管理',
//         isTop: true, //代表一级菜单
//         exact: true, //路由精准匹配
//         icon: 'EditOutlined'
//
//     },
//     // http://localhost:3000/#/admin/article/edit/6100f54de3e67140e158fe63
//     // 如果不设置，会匹配到上面的文章管理路由，switch，就会中断后面的
//     {
//         // 路由动态传参
//         pathname: '/admin/article/edit/:id',
//         component: ArticleEdit,
//         title: '编辑文章',
//         isTop: false, //代表一级菜单
//         icon: 'EditOutlined'
//
//     },
//     {
//         pathname: '/admin/setting',
//         component: Setting,
//         title: '系统设置',
//         isTop: true, //代表一级菜单
//         icon: 'SettingFilled'
//     },
//     {
//         pathname: '/admin/notify',
//         component: Notify,
//         title: '通知中心',
//         isTop: false, //代表一级菜单
//         icon: 'SettingFilled'
//     },
// ]
// export {
//     commonRoutes,
//     privateRoutes
// }
