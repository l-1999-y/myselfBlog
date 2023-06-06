
module.exports = {
  lang: 'zh-CN',
  title: 'MySelf',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  base: '/myselfBlog/',
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated:'上次更新',
    home: false,
    nav: [
      { text: 'Home', link: '/home/' },
      {
        text: '前端', items: [
          {
            text: 'JavaScript',
            link: '/JavaScript/',
          },
          {
            text: 'ES6',
            link: '/ES6/',
          },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/l-1999-y/myselfBlog', target: '_blank' },
    ],
   
    sidebar: {
      '/JavaScript/': [
        {
          title: 'JavaScript',
          collapsible: true,
          children: [
            '/JavaScript/',
            '/JavaScript/渲染原理',
            '/JavaScript/属性描述符',
            '/JavaScript/CSS 属性计算过程',
            '/JavaScript/你不知道的 CSS 之包含块',
            '/JavaScript/防抖',
            '/JavaScript/节流',
          ],
        }
      ],
      '/ES6/': [
        {
          title: 'ES6',
          collapsible: true,
          children: [
            {title:'简介', path:'/ES6/'},
            // '/ES6/防抖',
            // '/ES6/节流',
          ],
        }
      ],
      '/home/': [{
        title: '首页',
        path: '/home/',
        collapsable: false
      }],
    },

    search: true,

    searchMaxSuggestions: 10,
    lastUpdate: '上次更新',
  },
  markdown: {
    lineNumbers: true
  }
}
