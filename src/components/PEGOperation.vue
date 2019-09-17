<template>
    <div>
        <!-- without mapActions -->
        <!-- <button @click="$store.dispatch('loadPegawai')">get data</button> -->

        <!-- with mapActions -->
        <button @click="loadPegawai">get data</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'OpPeg',
    methods: {
        ...mapActions([
            'loadPegawai'
        ])
    }
}
</script>