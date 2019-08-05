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
        <input type="text" v-model="text7">
        <Component1 v-bind:passedText="text7" ></Component1>
        <!-- <greeting></greeting> -->

        <!-- <div>
          <h3>I am a sample Component #1</h3>
          <greeting></greeting>
        </div> -->
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
            <!-- Version with event  -->
            <!-- alternative to v-on:keyup.enter -->
            <p>Version with event</p>
            <input
              type="text"            
              v-on:input="bgc.backgroundColor = $event.target.value"
              v-bind:style="bgc"
            />
             <!-- Version with Ref -->
             <p>Version with ref</p>
            <input
              type="text"
              ref = "colorInput"            
              v-on:input="modifyBgc2"
              v-bind:style="bgc2"
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
            <!-- (2) cange name is an emit activated inside the component -->
            <!-- $event contains the parameter passed with ghe emit (inputName) -->
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
                <h2 class="card-title"> 14. Dynamic Components</h2>

                <p>In this example, the component to show is selected from the dropdown. In this way the component shown can be changed dynamically.</p>

                <!-- El valor de selectedComponent será el del value de la opcion seleccionada  -->
                <select v-model="selectedComponent">
                    <option value="default">Select</option>
                    <option value="Component1">Sample 1</option>
                    <option value="Component2">Sample 2</option>
                </select>

                <p><i>Please notice that every time you change from sample1 to sample2, you loose everything previously typed in sample1</i></p>
                <component v-bind:is="selectedComponent"></component>

                <p><i> Instead, using the keep-alive tag, we can retain changes done to sample1 even after switching to sample2 (check below) </i> </p>
                <keep-alive>
                    <component v-bind:is="selectedComponent"></component>
                </keep-alive>

            </div>
        </div>


          <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title">15. Lazy Input Fields v-model </h2>
                <p>In this example, we show the difference when we apply the .lazy modifier to a v-model of an input field.</p>
                <div>
                    <span> Type something and TAB/ENTER to see it applied below:</span>
                    <input type="text" v-model.lazy="text15Lazy" />
                </div>

                <div>
                    <span>Type something and will be immediately shown below:</span>
                    <input type="text" v-model="text15" />
                </div>

                <p>Lazy bound string = {{ text15Lazy }}</p>
                <p>Not Lazy bound string = {{ text15 }}</p>

            </div>
        </div>

        <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> 16. Checkboxes magic (array filling) </h2>
                <p>In this example, we see how Vue is able to automatically fill an array of objects according to some checkboxes all bound to that array.</p>
                <div id="checkboxes">
                    <!-- Magic Array Filling -->
                    <!-- la gracia de esto es que cada vez que hagamos un check la variable que apunta  -->
                    <!-- a v-model (un array) cargara (o borrara) ese value -->
                    <label>Carrot</label>
                    <input type="checkbox" value="carrot" v-model="foods" />
                    <label>Salad</label>
                    <input type="checkbox" value="salad" v-model="foods" />
                    <label>Fennel</label>
                    <input type="checkbox" value="fennel" v-model="foods" />
                </div>

                <div>
                    <p> Selected vegetables: </p>
                    <ul>
                        <li v-for="food in foods"> {{ food }} </li>
                    </ul>
                </div>


                <p>And here we are using a select to fill an array</p>
                <label>Authors:</label>
                <!-- el valor de la option que elijamos se guardara en 'author' -->
                <select v-model="author">
                    <option v-for="auth in authorsList"> {{ auth }} </option>
                </select>

                <p>Author: {{ author }}</p>

            </div>
        </div>
  
   
      <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> 20. Filters </h2>

                <p> In this example, we see how to define filters to apply rendering changes to Vue variables. </p>
                <p><i> Please notice that these changes are for browser rendering only and don't affect 
                  the variable value itself. </i></p>
            </div>

            <div>
              <p> This is a Span html tag without any filter applied </p>
               <span v-dColor1> {{ text20 }}  </span>
            </div>

            <div>
              <p>This is the same span HTML tag as above, but this time with the 'shortenString' filter applied 
                with argument '20' XXX: </p>
               <span v-dColor1 > {{ text20 | shorten }}  </span>
            </div>

        </div>

        <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> 21. Search function (computed property) </h2>
                <p>In this example, we see how to implement a search filter over an array 
                  with a computed property and 'filter' function.</p>

                <Component5></Component5>
               
            </div>
        </div>

         <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> 22. VueX Store Usage </h2>

                <p> In this example, we see how to use VueX store to share a 'state' between different components. </p>
                <p> <i> Notice how the randomizer button changes the store team names and this is reflected on the components </i> </p>
                <button @click="changeTeamNames">Randomize Team Names</button>
                <ComponentHStore v-bind:team="localTeam" v-bind:score="localScore" v-bind:isHomeTeam="true"></ComponentHStore>
                <ComponentHStore v-bind:team="awayTeam" v-bind:score="awayScore" v-bind:isHomeTeam="false" ></ComponentHStore>
                <div>
                    <p><b> {{this.$store.getters.currentHomeScore}} - {{ updateScore }} - {{this.$store.getters.currentAwayScore}} </b></p>
                </div>

            </div>
        </div>

        <h5>Multi-Select Testing</h5>

        <!--<div>
            <multiselect v-model="selectedValue" :options="options"></multiselect>
        </div>

        <div>
            <label class="typo__label">Single select</label>
            <multiselect v-model="selectedValue" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
            <pre class="language-json"><code>{{ selectedValue  }}</code></pre>
        </div>-->

        <!-- <div>
          <label class="typo__label">Single select / dropdown</label>
          <multiselect v-model="selectedValue" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="languageOptions" :searchable="false" :allow-empty="false">
              <template slot="singleLabel" slot-scope="{ option }">
                  <strong>{{ option.name }}</strong> is written in <strong>  {{ option.language }}</strong>
              </template>
          </multiselect>
          <pre class="language-json"><code> {{ selectedValue  }}</code></pre>
        </div>

        <div>
          <label class="typo__label">Select with search</label>
          <multiselect v-model="selectedValue" :options="languageOptions" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
          <pre class="language-json"><code> {{ value  }} </code></pre>
        </div>


        <div>
          <label class="typo__label">Simple select / dropdown</label>
          <multiselect v-model="selectedValue" :options="languageOptions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Choose a few" label="name" track-by="name" :preselect-first="true">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
          </multiselect>
          <pre class="language-json"><code>{{ selectedValue  }}</code></pre>
        </div> -->

        <!-- <div class="card content-panel">
            <div class="card-body">
               <p><b>Custom validation:</b></p>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            Birth Date:
                        </div>
                    </div>
                    <div class="block">

                        <div class="el-date-editor el-input el-input--prefix el-input--suffix el-date-editor--date" data-vv-as="Birth Date" aria-required="false" aria-invalid="false">
                            
                            <input type="datetime"
                                   autocomplete="off"
                                   name="birthDate"
                                   id="startDateInput"
                                   class="el-input__inner"                                  
                                   v-validate="'required|date_format:DD/MM/YYYY|earlier'"
                                   >
                            <span class="el-input__prefix"><i class="el-input__icon el-icon-date"></i></span>
                            <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                        </div>
                    </div>
                </div> 

                <div v-show="errors.has('birthDate')">
                    {{ errors.first('birthDate') }}
                </div>
            </div>
         </div> -->


        <div>
          <label class="typo__label" for="ajax">Async multiselect</label>
          <multiselect v-model="selectedCountries" id="ajax" label="name" track-by="code" placeholder="Type to search" open-direction="bottom" :options="countries" :multiple="true" :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="false" :close-on-select="false" :options-limit="300" :limit="3" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" @search-change="asyncFind">
            <template slot="tag" slot-scope="{ option, remove }"><span class="custom__tag"><span>{{ option.name }}</span><span class="custom__remove" @click="remove(option)">❌</span></span></template>
            <template slot="clear" slot-scope="props">
              <div class="multiselect__clear" v-if="selectedCountries.length" @mousedown.prevent.stop="clearAll(props.search)"></div>
            </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
          <pre class="language-json"><code>{{ selectedCountries  }}</code></pre>
        </div>

        <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> TEMPLATE </h2>

                <p></p>
                <p></p>
            </div>
        </div>

          <div class="card content-panel">
            <div class="card-body">
                <h2 class="card-title"> Watchers Example </h2>
                <p> When the name variable changes the watcher will activate </p>
                <!-- 'nameW is being watched' -->
                <p> The name is: {{ nameW }} </p>
               <!-- <button @click="changeName"> Change Name </button>-->
                <input type="text" v-model.lazy="nameW" />
                <p> {{ watchNameMessage }} </p>              
            </div>
        </div>



  </div>  
</template>

<script lang="ts">
//watch added
import { Component, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Component2 from "./components/component2.vue";
import Component1 from "./components/component1.vue";
import Component3 from "./components/component3.vue";
import Component4 from "./components/component4.vue";
import ComponentHome from "./components/componentHome.vue";
import ComponentAway from "./components/componentAway.vue";
import ComponentScore from "./components/componentScore.vue";
import Component5 from "./components/component5.vue";
import store from "./store";
import ComponentHStore from "./componentHStore.vue";
import Multiselect from 'vue-multiselect';
// import { ajaxFindCountry } from 'Countries-Api';

//import 'Validator' and 'moment' libraries
import { Validator } from 'vee-validate';
import moment from "moment";

//register multiselect globally
Vue.component('multiselect', Multiselect);


interface Ifruit {
  name?: string;
  color?: string;
  isAvailable?: boolean;
}

//our custom validation rule 'earlier' (we have to import 'Validator')
Validator.extend('earlier', {
        getMessage(field:any, val:any) {
            return 'You should be over 18 years old'
        },
        validate(value:any, field:any) {
            console.log('validating ...');
            console.log('entered date: ' + value);
            //let dateParts = value.split('-')
            //let date = new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
            let date = moment(value, "DD/MM/YYYY");
            let dateYear = date.year();

            let currentDate = moment();
            let currentDateYear = currentDate.year();

            return (currentDateYear - dateYear) > 18;

        }
    })  

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
    ComponentScore,
    Component5,
    ComponentHStore,
    Multiselect    
  },
  
  store

})
export default class App extends Vue {

  //Watcher as a decorator
     @Watch('nameW')
    onChildChanged(val: string, oldVal: string) {
        //watcher calls this func
        this.changeName(val, oldVal);
    }

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
   bgc2 = {
    backgroundColor: ""
  };
  text20:string;
  localTeam: string;
  awayTeam: string;
  localScore: number;
  awayScore: number;
  text7: string;
  selectedValue: string;
  options: string[];
  languageOptions: object[];
  selectedCountries: string[];
  countries: string[];
  isLoading: boolean;
  selectedComponent: string;
  text15Lazy: string = '';
  text15: string = '';
  foods: string[]; 
  authorsList: string[]; 
  author: string = '';
  nameW: string = '';
  watchNameMessage: string = '';

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
    this.text20= 'This is a very long string I want to shorten in a sample, just to learn filters';
    this.selectedComponent = '';
    this.foods = [];   
    this.authorsList = ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'];
    this.localTeam = this.$store.getters.teamsList[0];;
    this.awayTeam = this.$store.getters.teamsList[6];;
    this.localScore = this.$store.getters.currentHomeScore;
    this.awayScore = this.$store.getters.currentAwayScore;
    this.text7 = '';
    this.selectedValue = '';
    this.options = ['list', 'of', 'options']; 
    this.languageOptions = [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
    ],
    this.selectedCountries = [],
    this.countries = [
      'Albania',
      'Armenia',
      'Argentina',
      'Brazil',
      'Roamnia'
    ],
    this.isLoading = false

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

  //ref
  readRefs(): void {
    console.log(
      "Current output: " + (this.$refs.colorInput as HTMLInputElement).value
    );

    this.output = (this.$refs.colorInput as HTMLInputElement).value;
  }

  //ref
  modifyBgc2(): void {

    this.bgc2.backgroundColor = (this.$refs.colorInput as HTMLInputElement).value;
  }

  currValName12(): void {
    console.log("current value of name12: " + this.name12);    
  }

  // passedName is how we are calling the $ event received from the emit (inputName)
  updateName(passedName:String): void {
    this.name12 = passedName;
  }

  changeTeamNames():void {
    let rnd1 = Math.floor((Math.random() * this.$store.getters.teamsList.length));
    let rnd2 = Math.floor((Math.random() * this.$store.getters.teamsList.length));

    while(rnd1 === rnd2){
      rnd2 = Math.floor((Math.random() * this.$store.getters.teamsList.length));
    }

    this.localTeam  = this.$store.getters.teamsList[rnd1];
    this.awayTeam   = this.$store.getters.teamsList[rnd2];
  }

  //Computed
  get agePlusA(): number {
    let value: number = +this.a + +this.age;
    console.log(" calling agePlusA");
    return value;
  }

  get agePlusC(): number {
    let value: number = +this.c + +this.age;
    console.log(" calling agePlusC ");
    return value;
  }

  get compBorder(): object {
    return {
      myBorder: this.withBorder
    };
  }
  
   get updateScore(): string {         
    console.log(" calling update score");
    let message = '';
    if (this.$store.getters.currentHomeScore > this.$store.getters.currentAwayScore){
      message = "Local Team is Winning!";
    } else if (this.$store.getters.currentHomeScore < this.$store.getters.currentAwayScore){
      message = "Away Team is Winning!";
    }
    else {
      message = "There is a Draw!";
    }
    return message;
  }

   nameWithLang (obj:{ name:string, language :string}) {
      return `${obj.name} — [${obj.language}]`
    }

    limitText (obj:{count:number}) {
      return `and ${obj.count} other countries`
    }

    asyncFind (query:any) {
      this.isLoading = true
      // ajaxFindCountry(query).then((response:any) => {
      //   this.countries = response
      //   this.isLoading = false
      // })
    }

    clearAll () {
      this.selectedCountries = []
    }
    
     changeName(newP: string, old: string): void {
        this.watchNameMessage = 'The old name was: ' +old +  ' and now is ' + newP ;
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
