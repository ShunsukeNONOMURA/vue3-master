// https://zerotomastery.io/blog/how-to-auto-register-components-for-vue-with-vite/
import { App } from 'vue'
import _ from 'lodash'

export default {
  install(app: App<Element>): void {
    const componentFiles = import.meta.glob('../components/**', { eager: true })

    Object.entries(componentFiles).forEach(([path, m]) => {
      const componentName = _.upperFirst(
        _.camelCase(
          path
            .split('/')
            .pop()
            .replace(/\.\w+$/, ''),
        ),
      )

      app.component(`${componentName}`, m.default)
    })
  },
}
