import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/yamada/git/disaster_events/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}