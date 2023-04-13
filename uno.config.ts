import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno
} from 'unocss'
import transformerAttributifyJsx from './transformer-attributify-jsx'
// 使用 babel 的方法 import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx-babel'

export default defineConfig({
  theme: {
  },
  shortcuts: {
    'h-btn': 'h-48px w-100% bg-#ffc141 b-none text-white text-18px rounded-8px px-12px',
    'h-input-text': 'h-48px px-16px leading-32px py-8px b-#ffc141 b-1 b-solid focus:shadow focus:shadow-inset rounded-8px text-18px',
    'h-form': 'px-16px flex flex-col gap-y-8px children-flex children-flex-col',
    'h-form-label': 'text-18px mb-8px',
  },
  safelist: [],
  rules: [
    ['h-screen', { height: 'calc(100vh - var(--vh-offset, 0px))' }]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})
