
<template>
  <div>
    <h4>I am sample component #3 {{ title }}</h4>
    <p> {{ someText }} </p>
    <h5>Reference Type Prop:</h5>

    <table>
      <tr>
        <th>Fruit Name</th>
        <th>Fruit Color</th>
        <th>Available</th>
      </tr>
      <tr v-for="fruit in fruits">
        <td>{{fruit.name}}</td>
        <td>{{ fruit.color }}</td>
        <td><input type="checkbox" v-model="fruit.isAvailable"></td>
      </tr>
     
    </table>

    <p> Given that the array is passed to this component as a reference, if I add a fruit within the component, it will be reflected even outside: </p>
    <button v-on:click="addFruit"> Add Fruit </button>

    <div>
       <h4> Primitive Type Prop: </h4>
       <p> Given that the number is passed to this component by value, if you change the temperature below, it won't affect the same variable outside
        (and you get a warning too in the console!) </p>
       <p> Temperature: {{ temp }} </p>
       <button v-on:click="increaseTemp">Increase temperature</button>
        
    </div>

  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

interface Ifruit {
  name?: string;
  color?: string;
  isAvailable?: boolean;
}

@Component({
  name: "Component3",
//   props: {
//     title: String,
//     someText:String,
// //     fruits: Ifruit[] <-- does not recognize the interface
//     fruits: {
//         type:  Array as () => Ifruit[],
//     },
//     temp: {
//         type: Number,
//         required: true
//     }
//   }
})
export default class Component3 extends Vue {
      @Prop({ type: String }) title!: string;
      @Prop({ type: String }) someText!: string;
      @Prop({ type: Array as () => Ifruit[] }) fruits!: object[];
      @Prop({ type: Number }) temp!: number;
     
  constructor() {
    super();
  }

  created(): void {}

  addFruit(): void {

        //   can't access the received prop
        // console.log("Trying to add fruit" + this.fruit);
         let mango = {
                name: "mango",
                color: "yellow",
                isAvailable: false
            };
            this.fruits.push(mango);                
  }

  increaseTemp(): void {
    //   can't access the received prop
    this.temp++;
  };
  
}
</script>