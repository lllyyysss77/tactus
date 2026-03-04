import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  manifest: ({ browser }) => {
    const isFirefox = browser === 'firefox';

    return {
      name: 'Tactus',
      description: 'AI Assistant with OpenAI-compatible API support',
      version: '1.2.0',
      ...(isFirefox ? {} : { minimum_chrome_version: '120' }),
      permissions: [
        'storage',
        'unlimitedStorage',
        'activeTab',
        'scripting',
        'identity',
        ...(isFirefox ? [] : ['sidePanel']),
      ],
      host_permissions: ['<all_urls>'],
      action: {
        default_title: 'Tactus',
        default_icon: {
          16: '/icon/16.png',
          32: '/icon/32.png',
          48: '/icon/48.png',
          128: '/icon/128.png',
        },
      },
      ...(isFirefox
        ? {}
        : {
            side_panel: {
              default_path: 'sidepanel.html',
            },
          }),
      icons: {
        16: 'icon/16.png',
        32: 'icon/32.png',
        48: 'icon/48.png',
        128: 'icon/128.png',
      },
      web_accessible_resources: [
        {
          resources: ['/icon/*'],
          matches: ['<all_urls>'],
        },
      ],
      ...(isFirefox && process.env.FIREFOX_EXTENSION_ID
        ? {
            browser_specific_settings: {
              gecko: {
                id: process.env.FIREFOX_EXTENSION_ID,
              },
            },
          }
        : {}),
    };
  },
});
