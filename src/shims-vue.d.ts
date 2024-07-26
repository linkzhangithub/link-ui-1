declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
//专门用来解决对 vue 兼容的文件

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const str: string
  export default str
}
//专门用来解决对 md 兼容的文件