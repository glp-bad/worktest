
<template>
        <button @click="onClick" class="ff-button">
            <slot>Button</slot>
        </button>
</template>

<script lang="ts">

    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            onClick: {
                type: Function
                // required: true
            },
            widthButton: {
                type: Number,
                default: 0
            }
        },
        mounted(){
            if(this.widthButton > 0) {
                this.$el.style.width = this.widthButton + 'px';
            }
        }
    })

    export default class Button extends Vue {}

</script>

<style scoped>

</style>
