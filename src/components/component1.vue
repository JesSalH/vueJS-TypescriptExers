
<template>
    <div>
        <h4> I am sample component #1 </h4>

        <div>
            <span> Name      </span>
            <input type="text" v-model="textInput1" />
            <p>My name is {{ textInput1 }}</p>
        </div>

    </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        name: "Component1",
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