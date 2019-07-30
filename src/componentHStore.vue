<template>
    <div class="card-body" style="text-align: center;">
        <p> {{ team }} </p>
        <input type="text" size="5" readonly="readonly" v-model="goals">
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

        goals: number;

        constructor() {
            super();
            this.goals = 10;
        }
        created(): void {

            this.goals = this.score;
        }

        scoreGoal(): void {
            
            this.goals++;

            console.log("Home team?:" + this.isHomeTeam );

            if(this.isHomeTeam) {
                console.log("enters true");
                // can't call actions
                // this.$store.actions.goalHome;
                  console.log(this.$store.state.homeScore++);
            }
            else{
                console.log("enters false");
                // can't call actions
                // this.$store.actions.goalAway;
                 console.log(this.$store.state.awayScore = this.goals);
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
