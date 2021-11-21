
<template>
        <button class="ff-button">
            <slot>Button</slot>
        </button>
</template>

<script>
    export default {
        name: "my-button",
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
        mounted(){
            if(this.widthButton > 0) {
                this.$el.style.width = this.widthButton + 'px';
            }
            this.$el.style.height = this.heightButton + 'px';

        }
    }
</script>
<style scoped></style>
