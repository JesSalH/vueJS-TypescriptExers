
<template>
   <div class="column">
        <p>Chelsea</p> 
        <button v-on:click="score"> Score Goal </button>
   </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";
    import { bus } from '../main';

    @Component({
        name: "ComponentAway",
        props: {
                         
        }
    })

    export default class ComponentAway extends Vue {
        
        constructor() {
            super();           
        }

        created(): void {}
        
        score(): void {
                console.log("Chelsea scored!!");
                bus.$emit('awayScored', null);
        }
    }

</script>

<style lang="scss">
 .column {
  float: left;
  width: 33.33%;
  }

</style>