<template>
<main class="p-[5%] sm:px-[20%] lg:px-[30%]">
	<Calculator />
</main>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>

@font-face {
  font-family: "LeagueSpartan";
  src: local("LeagueSpartan"),
   url(./fonts/LeagueSpartan-VariableFont_wght.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
	background-color: hsl(222, 26%, 31%);
}

</style>
