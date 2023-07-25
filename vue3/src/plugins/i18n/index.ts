import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

export default createI18n({
  locale: 'ja',
  allowComposition: true, // you need to specify that!
  messages,
})
