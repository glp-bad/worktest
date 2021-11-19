
<template>
        <button class="ff-button">
            <slot>Button</slot>
        </button>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            widthButton: {
                type: Number,
                default: 0
            },
            heightButton: {
                type: Number,
                default: 25
            }
        },
        components: {},
        mounted(){
            if(this.widthButton > 0) {
                this.$el.style.width = this.widthButton + 'px';
            }


             this.$el.style.height = this.heightButton + 'px';

        }

    })

    export default class Button extends Vue {}

</script>

<style scoped>

</style>
