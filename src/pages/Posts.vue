<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Home',
    data() {
        return {
            data: [], //I POST VENGONO SALVATI QUI
            store,
        };
    },
    methods: {
    },
    mounted() {
        axios.get(store.apiURL + 'posts') // URL API
            .then(res => {
                this.data = res.data.results.data; // A BUON FINE
                console.log('data:', res); // LOG
            })
            .catch(err => {
                console.log('Errore nel recupero dei dati:', err); // LOG ERRORE
            });
    },
};
</script>

<template>
    <div class="container my-4">
        <h2 class="fs-4 text-secondary my-4">
        </h2>
        <div class="row justify-content-center">
            <div class="col">
                <div class="card">

                    <div class="card-header">
                        <h2>posts</h2>
                    </div>

                    <div class="bigcontainer">
                        <div class="card" style="width: 18rem;" v-for="post in data">
                            <div class="card-body">
                                <h5 class="card-title">#{{ post.id }}: {{ post.title }}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{{ post.slug }}</h6>
                                <p class="card-text">{{ post.subject }}</p>
                                <a href="#" class="card-link">{{ post.number_of_posts }}</a>
                                <a href="#" class="card-link">{{ post.collaborators }}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bigcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.bigcontainer>.card {
    margin: 15px;
}
</style>
