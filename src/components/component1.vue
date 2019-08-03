
<template>
    <div>
        <h4> I am sample component #1 </h4>

        <div>
            <span> Name      </span>
            <input type="text" v-model="passedText" />
            <p>My name is {{ passedText }}</p>
        </div>

    </div>
</template>


<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Component1",
        props: {
        passedText: {
            type: String
        }
        },
})

export default class Component1 extends Vue {

    textInput1: string;

    constructor() {
        super();

        this.textInput1 = 'type here';
    }

    created(): void { };
}

</script>