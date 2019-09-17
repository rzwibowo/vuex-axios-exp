<template>
    <div>
        <h2>{{ nama }}</h2>
        <input type="text" :value="nama"/>
        <br/>
        <input type="text" v-model="nama">
    </div>
</template>

<script>
    export default {
        name: 'KomponenBaru',
        data: function() {
            return {
                nama: 'Wibowo'
            }
        }
    }
</script>