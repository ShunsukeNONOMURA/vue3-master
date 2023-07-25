import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: 'ja',
  allowComposition: true, // you need to specify that!
  messages: {
    en: {
      hello: 'hello!',
    },
    ja: {
      hello: 'こんにちは！',
    },
  },
})
