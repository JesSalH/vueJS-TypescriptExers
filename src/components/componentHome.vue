
<template>
   <div class="column">
        <p>Arsenal</p> 
        <button v-on:click="score"> Score Goal </button>
   </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";
    import { bus } from '../main';

    @Component({
        name: "ComponentHome",
        props: {
                         
        }
    })

    export default class ComponentHome extends Vue {
                         
        constructor() {
            super();            
        }

        created(): void {}
        
        score(): void {
                console.log("Arsenal scored!!");              
                bus.$emit('homeScored', null);
        }
    }

</script>

<style lang="scss">
 .column {
  float: left;
  width: 33.33%;
  }

</style>