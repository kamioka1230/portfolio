export default {
  head: {
    titleTemplate: 'Yd - Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { 'http-equiv': 'x-ua-compatible', content:'ie=edge' },
      { name: 'robots', content: 'noindex'},

      // hidは一意の識別子として使用されます。`vmid` は動作しないので使わないでください
      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
    link: [
        {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.11.2/css/all.css' },
    ]
  },
  css: [
      '@assets/css/bootstrap.min.css',
      '@assets/css/mdb.min.css',
      '@assets/css/style.min.css',
      
  ]
}
