<template>
  <div class="home">
<<<<<<< HEAD
    <Hello msg="Welcome to Your Vue.js App" />
    <FormParams />
    <Calculate bla="blabla" />
=======
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FormParams />
>>>>>>> dc37017e2dd6f2f0107f0b2f8fbd5317e38e4c75
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import Hello from "@/components/Hello.vue"
import FormParams from "@/components/FormParams.vue"
import Calculate from "@/components/Calculate.vue"
=======
import HelloWorld from "@/components/HelloWorld.vue"
import FormParams from "@/components/FormParams.vue"
>>>>>>> dc37017e2dd6f2f0107f0b2f8fbd5317e38e4c75

export default {
  name: "home",
  components: {
<<<<<<< HEAD
    Hello,
    FormParams,
    Calculate,
  },
  props: {
    lastname: {
      type: String,
    },
=======
    HelloWorld,
    FormParams,
>>>>>>> dc37017e2dd6f2f0107f0b2f8fbd5317e38e4c75
  },
}
</script>
