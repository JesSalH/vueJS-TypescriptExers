<template>
    <div class="card-body" style="text-align: center;">
        <p> {{ team }} </p>
        <input type="text" size="5" readonly="readonly" v-model="getGoals">
        <button @click="scoreGoal" >Score Goal</button>
        <hr>
    </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";
    import { Prop } from "vue-property-decorator";
    import store from "./store";
   
    @Component({
        name: "ComponentHomeStore",
        props: {
        },
        store,
    })
    export default class ComponentHomeStore extends Vue {     
        @Prop({ type: String }) team!: string;
        @Prop({ type: Number }) score!: number;
        @Prop({ type: Boolean }) isHomeTeam!: Boolean;

        constructor() {
            super();           
        }
        created(): void {            
        }

        scoreGoal(): void {                       
            console.log("Home team?:" + this.isHomeTeam );

            if(this.isHomeTeam) {              
                // don't call directly actions, dispatch them
                // this.$store.actions.goalHome;                
                this.$store.dispatch('goalHome');
            }
            else{             
                // don't call directly actions, dispatch them
                // this.$store.actions.goalHome;  
                this.$store.dispatch('goalAway');
            }
        }

        get getGoals():number {

            if(this.isHomeTeam){
                return this.$store.getters.currentHomeScore;
            }
            else{
                 return this.$store.getters.currentAwayScore;
            }
        }
        
    }
</script>

<style lang="scss">
    .column {
        float: left;
        width: 33.33%;
    }
</style>
