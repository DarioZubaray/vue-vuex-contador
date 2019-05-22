<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{message}}</p>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from '@/components/contador'

export default {
  name: 'app',
  components: {
    Counter
  },
  data () {
    return {
      message : 'Hola Juli'
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
