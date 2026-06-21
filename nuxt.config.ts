// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-21',

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@invictus.codes/nuxt-vuetify',
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0DYDMZEYDZ',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0DYDMZEYDZ');
          `
        },
        {
          id: 'zsiqchat',
          children: `
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: 'f440e91b3668705fa583df5dbc6e7433860d309db2544bdba3d47511e8b81af17ac46adca5100296f44525750806cb23',
              values: {},
              ready: function () {}
            };
            var d = document;
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.id = 'zsiqscript';
            s.defer = true;
            s.src = 'https://salesiq.zoho.in/widget';
            var t = d.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(s, t);
          `
        }
      ]
    }
  },

  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              primary: '#1976d2',
              accent: '#424242',
              secondary: '#ff8f00',
              info: '#26a69a',
              warning: '#ffc107',
              error: '#ff3d00',
              success: '#00e676',
            },
          },
          light: {
            colors: {
              primary: '#1976d2',
              accent: '#424242',
              secondary: '#ff8f00',
              info: '#26a69a',
              warning: '#ffc107',
              error: '#ff3d00',
              success: '#00e676',
            },
          },
        },
      },
    },
  },

  devtools: { enabled: true }
})
