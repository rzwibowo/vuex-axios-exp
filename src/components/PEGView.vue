<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pgw in Pegawai" :key="pgw.PegawaiID">
                    <td>{{ pgw.PegawaiID }}</td>
                    <td>{{ pgw.PegawaiName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'DataPeg',
    computed: mapState([
        'Pegawai'
    ])
}
</script>