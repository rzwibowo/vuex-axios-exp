<template>
    <div>
        <ul>
            <li v-for="(item, index) in Users" :key="index">
                <img :src="item.avatar">
                {{ item.first_name }}
            </li>
        </ul>
        <form @submit.prevent="SaveData">
            <label>Nama: </label><input type="text" v-model="User.name">
            <br>
            <label>Job: </label><input type="text" v-model="User.job">
            <br>
            <input type="submit" value="Simpan">
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'OlahData',
    data: function() {
        return {
            Users: [],
            User: {}
        }
    },
    mounted() {
        this.GetData()
    },
    methods: {
        GetData: function() {
            axios.get('https://reqres.in/api/users?page=2')
            .then(
                response => {
                    this.Users = response.data.data
                }
            )
            .catch(
                error => alert(error)
            )
        },
        SaveData: function() {
            axios.post('https://reqres.in/api/users',
                { body: this.User }
            )
            .then(
                response => alert('berhasil')
            )
            .catch(
                error => alert(error)
            )
        }
    }
}
</script>
