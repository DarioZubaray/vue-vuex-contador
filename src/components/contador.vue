<template>
    <div class="container">
        <h2 class="text-center text-muted">{{appName}}</h2>
        <button @click="increment(1)" class="btn btn-success btn-block">
            Incrementar
        </button>
        <div class="alert alert-secondary text-center mt-3">
            {{ counter }}
        </div>
        <button @click="decrement(1)" class="btn btn-danger btn-block">
            Decrementar
        </button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState(['counter', 'appName'])
    },
    methods: {
        ...mapMutations(['increment', 'decrement'])
    }
}
</script>

<style scoped lang="stylus">
</style>