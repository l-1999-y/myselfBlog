
module.exports = {
  lang: 'zh-CN',
  title: 'MySelf',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  base:'/myselfBlog/',
  themeConfig: {
    sidebarDepth: 2,
    home:false,
    nav: [
      { text: 'Home', link: '/home/' },
      { text: '前端', link: '/web/', items: [
        {text:'事件循环',link:'/web/事件循环'},
      ]},
      { text: 'GitHub', link: 'https://github.com/l-1999-y/myselfBlog', target: '_blank' },
    ],
    sidebar: 'auto',
    // sidebar: [
    //   {
    //     title: '首页',
    //     path: '/home/',
    //     collapsable:false
    //   },
    //   {
    //     title: '前端',   // 必要的
    //     path: '/web/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: true, // 可选的, 默认值是 true,
    //     sidebarDepth: 2,    // 可选的, 默认值是 1
    //     children: [
    //       {
    //         title: '原理—事件循环',
    //         path: '/web/事件循环',
    //         children: [
    //           {
    //             title: '事件循环',
    //             path: '/web/1',
    //           }
    //         ]
    //       },
    //       {
    //         title: 'two',
    //         path: '/web/two',
    //       }
    //     ]
    //   },
    //   // {
    //   //   title: 'bar',
    //   //   path: '/bar/',
    //   //   children: [
    //   //     {
    //   //       title: 'three',
    //   //       path: '/bar/three',
    //   //     },
    //   //     {
    //   //       title: 'four',
    //   //       path: '/bar/four',
    //   //     }
    //   //   ]
    //   // }
    // ],
    search: true,
    searchMaxSuggestions: 10,
    lastUpdate: '上次更新',
  }
}
