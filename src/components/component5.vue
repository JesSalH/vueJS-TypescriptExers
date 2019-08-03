

<template>
    <div>
        <h4> I am sample component #5 </h4>
        <h5> Search Filter example </h5>
        <div>
            <input type="text" v-model="search" placeholder="Search for a town" />
            <p><b> Visited Towns </b></p>
            <!-- en lugar de hacer directamente el foreach del array lo hacemos de una funcion -->
            <!-- que filtra el array original -->
            <p v-for="town in filteredTowns" >{{ town }}</p>

        </div>       
    </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        name: "Component5",
        props: {
          currName: {
                type: String
          }        
        }
    })

    export default class Component5 extends Vue {            
        search: string;
        towns: string[];

        constructor() {
            super(); 
            this.search = '';
            this.towns = [
                "London",
                'Rome',
                'New York',
                'Los Angeles',
                'Miami',
                'Liverpool',
                'New Dehli',
                'Livorno',
                'Madrid',
                'Paris'
            ]           
        }

        created(): void {}
        // esta computed property devuelve el array towns filtrado
        get filteredTowns(){
            return this.towns.filter((town) => {
                return town.match(this.search); //search es el v-model del input text
            });
        }
    }

</script>