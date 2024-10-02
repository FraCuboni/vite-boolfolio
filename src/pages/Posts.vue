<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Home',
    data() {
        return {
            data: [], //I POST VENGONO SALVATI QUI
            requestType : 'posts',
            store,
        };
    },
    methods: {
        getAPI(){
        axios.get(store.apiURL + this.requestType) // URL API
            .then(res => {

                // RICHIESTA POSTS
                if(this.requestType == 'posts'){
                    this.data = res.data.results.data; // A BUON FINE
                    console.log('POST DATA:', res); // LOG

                // RICHIESTA TYPES
                }else if(this.requestType == 'types'){
                    this.data = res.data; // A BUON FINE
                    console.log('TYPES DATA:', res); // LOG

                // RICHIESTA TAGS
                }else if(this.requestType == 'tags'){
                    this.data = res.data; // A BUON FINE
                    console.log('TAGS DATA:', res); // LOG

                // ELSE
                }else{
                    console.log('wrong requestType value');
                }
            })
            .catch(err => {
                console.log('Errore nel recupero dei dati:', err); // LOG ERRORE
            });
        },

        changeType(value){
            this.requestType = value;
            this.getAPI();
        }
    },
    mounted() {
        this.getAPI();
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
                    
                    <nav class="paginate" aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li @click="changeType('posts')" class="page-item"><a class="page-link" href="#">posts</a></li>
                            <li @click="changeType('types')" class="page-item"><a class="page-link" href="#">types</a></li>
                            <li @click="changeType('tags')" class="page-item"><a class="page-link" href="#">tags</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="bigcontainer">
                        <div class="card" style="width: 18rem;" v-for="item in data">
                            <img :src="item.image_path" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">#{{ item.id }}: {{ item.title }}{{ item.name }}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{{ item.slug }}</h6>
                                <p class="card-text">{{ item.subject }}</p>
                                <a href="#" class="card-link">{{ item.number_of_posts }}</a>
                                <a href="#" class="card-link">{{ item.collaborators }}</a>
                            </div>
                        </div>
                    </div>

                    <nav class="paginate" aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>

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
    margin: 10px;
}

.paginate{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
