

<template>
    <div>
        <h4> I am sample component #2 </h4>      
        <slot name="content1"></slot>    
        <slot name="content2"></slot>

    </div>
</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";   

    @Component({
        name: "Component2"      
    })

    export default class Component2 extends Vue {

        constructor() {
            super();
        }

        created(): void { };
    }
              
</script>