

<template>
    <div>
        <h4> I am sample component #4 </h4>
        <div>
            <p> My current name is {{ currName }} </p>
            <span> new name      </span>
            <input type="text" v-model="inputName"  /> <br/>
            <button v-on:click="updateName"> Update Name </button> 
        </div>

    </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        name: "Component4",
        props: {
          currName: {
                type: String
          }        
        }
    })

    export default class Component4 extends Vue {

        inputName: string;

        constructor() {
            super();
            this.inputName = 'type here';
        }

        created(): void {}
        
        updateName(): void {
            console.log("updating name...");
            //(1) eimit is activating the event changeName in the parent and passing a parameter
            this.$emit('changeName',this.inputName);
        }
    }

</script>