import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const counte:Ref<"dark" | "light"> = ref("light")
  function change() {
    console.log(counte.value)
    counte.value = counte.value.toString() == "dark" ? "light" : "dark"
  }
  return { counte, change  }
})
