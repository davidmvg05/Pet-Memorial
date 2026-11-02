// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidmvg05.github.io',
  base: '/Pet-Memorial/',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({
      include: {
        tabler: [
          'phone',
          'phone-call',
          'paw',
          'heart',
          'clock',
          'map-pin',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'mail',
          'shield-check',
          'calendar',
          'menu-2',
          'x',
          'check',
          'info-circle',
          'star-filled',
          'sparkles',
          'car',
          'certificate',
          'candle',
          'leaf',
          'shield',
          'shield-lock',
          'cookie',
          'file-text'
        ]
      }
    })
  ]
});
