<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <!-- Vues's Exercises -->
    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">1. Button Events HOME TESTING</h2>

        <p>This is incrementing A variable by one locally on click event:</p>
        A = {{ a }}
        <button v-on:click="a++">Increment A</button>

        <p>This is incrementing B variable by one calling a function defined in the Vue Instance:</p>
        B = {{ b }}
        <button v-on:click="incrementB">Increment B</button>

        <p>This button will increment B variable only once (we used the modifier .once on the event):</p>
        B = {{ b }}
        <button v-on:click.once="incrementB">Increment B</button>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">2. v-model Basic Usage & Custom Styling</h2>

        <p>This is a sample usage of v-model to obtain a two-way binding between an HTML element and a Vue variable.</p>
        <p>Notice also how this A counter is affected by the button in the previous sample</p>
        <p>A = {{ a }}</p>
        <div>
          Change A value:
          <input type="number" v-model="a" />
        </div>

        <p>Moreover, in this case we applied also a custom style to the input element, binding the background color to a Vue variable:</p>
        <p>C = {{ c }}</p>
        <div>
          Change C value:
          <input type="number" v-model="c" v-bind:style="backgroundInputText" />
        </div>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">3. Computed Properties</h2>

        <p>
          We can use computed properties to make Vue "watch" some variables and react only when those change.
          For example (play with A and C from previous sample):
        </p>
        <p>Open the console and check that every computed method is called only when needed (that is when Age, A or C change)</p>
        <p>Age = {{ age }}</p>Change Age value:
        <input type="number" v-model="age" />
        <p>(Computed) Age + A = {{ agePlusA }}</p>
        <p>(Computed) Age + C = {{ agePlusC }}</p>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">4. Dynamic Classes</h2>

        <p>This is a very simple example on how to use v-bind:class to change the class of an HTML element according to Vue variables:</p>
        <p>Open the console and check that every computed method is called only when needed (that is when Age, A or C change)</p>
        <div>
          <button v-on:click="withBorder = !withBorder">Toggle Border</button>
          <span v-bind:class="compBorder">Change Me</span>
        </div>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">5. Conditionals</h2>
        <button v-on:click="isHidden = !isHidden">Hide/Show</button>
        <p>There are two ways to show/hide an HTML element according to a Vue condition truthness:</p>

        <ul>
          <li
            v-if="isHidden"
          >v-if: Use it for heavy loads, as this renders the HTML element only when condition is met</li>
          <li v-show="isHidden">
            v-show: Use this for quick and light operations, as the HTML element is always rendered
            (if you inspect it, you can see a 'display: none;' style added when hidden)
          </li>
        </ul>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">6. Looping with v-for</h2>

        <p>A simple example on how a v-for can be used to loop through elements of a collection.</p>
        <p>
          Notice also how we can use v-model to bind to a property of a single element of the loop
          (click on a checkbox to see it in action, together with the v-show)
        </p>

        <template>
          <div v-for="(number,index) in numbers">
            <span>{{ index + 1 }} :</span>
            <input
              type="checkbox"
              v-bind:value="number.text"
              v-bind:id="number.text"
              v-model="number.active"
            />
            <span v-show="number.active">{{number.text}}</span>
          </div>
        </template>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">7. Components Usage & Props</h2>

        <p>Check how everything is entered here below is sent directly to 'Sample Component #1' through a prop</p>
        <p>
          Notice also that if you change the name inside the component, it won't be reflected outside it
          ('cause string is a primitive type and is passed by value)
        </p>

        <greeting></greeting>

        <div>
          <h3>I am a sample Component #1</h3>
          <greeting></greeting>
        </div>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">8. Ref Usage</h2>

        <p>In this example we show how to use ref attribute on an HTML element to get a reference of that element straight inside Vue instance:</p>
        <p>Here you can see also another event, the keyup (with .enter modifier) in action</p>

        <div>
          <span>Input here your favourite colour</span>

          <div class="wrapper">
            <!-- alternative to v-on:keyup.enter -->
            <input
              type="text"
              ref="colorInput"
              v-on:input="bgc.backgroundColor = $event.target.value"
              v-bind:style="bgc"
            />
          </div>

          <button v-on:click="readRefs">Get Refs</button>
        </div>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">9. Slot Usage</h2>

        <p>In this example we show how to use the Vue slot feature to inject content into a specifically designed area of the component itself:</p>
        <component2>
          <!--... elements to go into slots...-->
          <div slot="content1">
            <p>
              <b>Below here there is slot 1:</b>
            </p>
            <span>Type something here (we are within a slot):</span>
            <input type="text" />
          </div>

          <div slot="content2">
            <p>
              <b>Below here there is slot 2:</b>
            </p>
            <p>Here we are injecting content from parent page to slot 2 of Sample Component #2</p>
            <input type="radio" name="gender" value="male" /> Male
            <br />
            <input type="radio" name="gender" value="female" /> Female
            <br />
            <input type="radio" name="gender" value="other" /> Other
            <br />
          </div>
        </component2>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">10. Slot Usage (2)</h2>

        <p>
          In this different slot example, we show how a slot can be used to obtain 'components inception'.
          Here we are injecting Sample Component 1 inside Sample Component 2 slot1:
        </p>

        <p>See also how the slot2 heading has been removed, as it is conditioned upon the presence of a slot2 injection</p>
        <component2>
          <div slot="content1">
            <p>
              <b>Below here there is slot 1:</b>
            </p>
            <component1></component1>
          </div>
        </component2>
      </div>
    </div>

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">11. Props Usage with v-bind & References vs Primitive Types</h2>

        <p>In this example, we have an array of objects (fruits) that we pass down to Sample Component 3 through a prop:</p>
        <p>
          <i>Given that array is an object, it's passed by reference, so any change to the array will be reflected everywhere (inside and outside the component):</i>
        </p>

        <ul>
          <li v-for="fruit in fruits">
            {{ fruit.name }} ({{fruit.color}}) -> Is available?
            <input type="checkbox" v-model="fruit.isAvailable" />
          </li>
        </ul>
        <button v-on:click="addGrape">Add Grape</button>

        <div> 
          <p> Moreover, let's pass a number to Sample Component 3, always through a prop: </p>
          <p> Temperature: {{ temperature }} </p>
           <button v-on:click="increaseTemp">Increase temperature</button>
        </div>

        <component3 
          v-bind:title="myTitle" 
          v-bind:someText="myText1" 
          v-bind:fruits="fruits"
          v-bind:temp="temperature"
        ></component3>
      </div>
    </div>


    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">12. Emit Events & Update Primitive Types</h2>

        <p>In this example, we are sending the 'name' prop to the 'Sample Component 4', 
          but we are also listening to a specific event that we defined in the component itself. </p>
        <p>In this way, we are able to update the name outside the component, even if it's a primitive type.</p>
        <div>  
          <span> Current Name: </span> <input type="text" v-model="name12" v-on:input="currValName12" />        
          <div>
            <Component4 v-bind:currName="name12" v-on:changeName="updateName($event)" ></Component4>
          </div>
        </div>
      </div>
    </div>
 

    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title"> 13. Event Bus </h2>
        <p>In this example a bus is used to forward an event from a component 
          (the two teams components) to another component (the result one):</p>
        
        <div>
          
         <componentHome></componentHome>

         <componentScore></componentScore>

         <componentAway></componentAway>

        </div>

      </div>
    </div>
  
   
    <div class="card content-panel">
      <div class="card-body">
        <h2 class="card-title">TEMPLATE</h2>

        <p></p>
        <p></p>
      </div>
    </div>


  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Component2 from "./components/component2.vue";
import Component1 from "./components/component1.vue";
import Component3 from "./components/component3.vue";
import Component4 from "./components/component4.vue";
import ComponentHome from "./components/componentHome.vue";
import ComponentAway from "./components/componentAway.vue";
import ComponentScore from "./components/componentScore.vue";

interface Ifruit {
  name?: string;
  color?: string;
  isAvailable?: boolean;
}

@Component({
  name: "App",
  components: {
    HelloWorld,
    Component2,
    Component1,
    Component3,
    Component4,
    ComponentHome,
    ComponentAway,
    ComponentScore    
  }
})
export default class App extends Vue {
  age: number;
  name: string;
  a: number;
  b: number;
  c: number;
  withBorder: boolean;
  isHidden: boolean;
  numbers: object[];
  output: string;
  isChecked: boolean;
  fruits: Ifruit[];
  myTitle: string;
  myText1: string;
  temperature: number;
  name12:String;
  backgroundInputText = {
    backgroundColor: "green"
  };
  bgc = {
    backgroundColor: ""
  };

  constructor() {
    super();

    this.age = 25;
    this.name = "Peter";
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.withBorder = false;
    this.isHidden = true;
    this.numbers = [
      { text: "one", active: false },
      { text: "two", active: false },
      { text: "three", active: false },
      { text: "four", active: false }
    ];
    this.isChecked = false;
    this.output = "orange";
    this.fruits = [
      { name: "banana", color: "yellow", isAvailable: false },
      { name: "apple", color: "green", isAvailable: false },
      { name: "strawberry", color: "red", isAvailable: false }
    ];
    this.myTitle = "I am sample component #3";
    this.myText1 = "Another thext for the component";
    this.temperature = 15;
    this.name12='';
  }

  created(): void {}

  incrementB(): void {
    this.b++;
  }

  addGrape(): void {
    let grape = {
      name: "grape",
      color: "purple",
      isAvailable: false
    };
    this.fruits.push(grape);
  }

  increaseTemp(): void {
    this.temperature++;
  };

  //refs
  readRefs(): void {
    console.log(
      "Current output: " + (this.$refs.colorInput as HTMLInputElement).value
    );

    this.output = (this.$refs.colorInput as HTMLInputElement).value;
  }

  currValName12(): void {
    console.log("current value of name12: " + this.name12);    
  }

  updateName(passedName:String): void {
    this.name12 = passedName;
  }

  //Computed
  get agePlusA(): number {
    let value: number = +this.a + +this.age;
    console.log(" calling agePlusA");
    return value;
  }

  get agePlusC(): number {
    let value: number = +this.c + +this.age;
    console.log(" calling agePlusC");
    return value;
  }

  get compBorder(): object {
    return {
      myBorder: this.withBorder
    };
  }  
}

//Component
Vue.component("greeting", {
  template:
    '<div> <label for="componentInputText"> Current Name: {{ name }} </label>   <input type="text" id="componentInputText"> </div> ',
  data: function() {
    return {
      name: "John"
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  .column {
  float: left;
  width: 33.33%;
  }
}
</style>
