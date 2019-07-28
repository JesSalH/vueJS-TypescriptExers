
<template>
  <div class="column">

    <div class="column">
      <input type="text" v-model="goalHome" />
    </div>

    <div class="column">
      <p>-</p>
    </div>

    <div class="column">
      <input type="text" v-model="goalAway"/>
    </div>

  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { bus } from '../main';

@Component({
  name: "ComponentScore",
  props: {}
})
export default class ComponentScore extends Vue {

  goalHome: number;
  goalAway: number;

  constructor() {
    super();
    this.goalHome = 0;
    this.goalAway = 0;
  }

  created(): void{
          
        bus.$on('homeScored', () => {
            this.goalHome ++;
        });

        bus.$on('awayScored', () => {
            this.goalAway ++;
        });
    }
}
</script>

<style lang="scss">
.column {
  float: left;
  width: 33.33%;
}
</style>