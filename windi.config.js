/**
 * @Description: windicss
 * @Author bianpengfei
 * @create 2022/5/20 11:55
 */
const { defineConfig } = require('windicss/helpers')

module.exports = defineConfig({
  // prefix: '',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,md}'],
    exclude: ['node_modules', '.git', 'dist']
  },
  purge: [],
  presets: [],
  plugins: [require('windicss/plugin/line-clamp')]
})
