<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Home',
    data() {
        return {
            data: '',
            store,
        };
    },
    methods: {
    },
    mounted() {
        axios.get(store.apiURL + 'posts') // URL API
            .then(res => {
                this.data = res.data; // A BUON FINE
                console.log('data:', res); // ERRORE
            })
            .catch(err => {
                console.log('Errore nel recupero dei dati:', err); // ERRORE
            });
    },
};
</script>

<template>
    <pre>
        {
        "success": true,
        "results": {
            "current_page": 1,
            "data": [
            {
                "id": 1,
                "type_id": 1,
                "title": "Sassari Hater",
                "slug": "insurance-sales-agent-65218",
                "subject": "JUST HATE SASSARI MAN",
                "start_date": "0001-01-01",
                "end_date": "9999-12-31",
                "number_of_posts": 1,
                "collaborators": "ALL THE WORLD",
                "image_path": "uploads/AVwygwJmgc4Wvi7FGR5ELVF1pe1gSdWSdqBmZtvx.png",
                "image_original_name": "Screenshot 2024-07-26 112928.png",
                "created_at": "2024-09-30T22:45:31.000000Z",
                "updated_at": "2024-09-30T22:48:13.000000Z",
                "type": {
                "id": 1,
                "name": "HTML",
                "slug": "html",
                "created_at": "2024-09-30T22:45:31.000000Z",
                "updated_at": "2024-09-30T22:45:31.000000Z"
                },
                "tags": [
                {
                    "id": 4,
                    "name": "UX",
                    "slug": "ux",
                    "created_at": "2024-09-30T22:45:31.000000Z",
                    "updated_at": "2024-09-30T22:45:31.000000Z",
                    "pivot": {
                    "post_id": 1,
                    "tag_id": 4
                    }
                }
                ]
            },
      </pre>
</template>

<style scoped></style>
