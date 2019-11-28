<template>
  <div class="home">
    <Hello msg="Welcome to Your Vue.js App" />
    <FormParams />
    <Calculate bla="blabla" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue"
import FormParams from "@/components/FormParams.vue"
import Calculate from "@/components/Calculate.vue"

export default {
  name: "home",
  components: {
    Hello,
    FormParams,
    Calculate,
  },
  props: {
    lastname: {
      type: String,
    },
  },
}
</script>
