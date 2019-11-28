<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FormParams />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import FormParams from "@/components/FormParams.vue"

export default {
  name: "home",
  components: {
    HelloWorld,
    FormParams,
  },
}
</script>
