
<template>
        <button :class=this.getClassButton() :title=this.title>
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
            },
            buttonType: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: "button"
            }
        },
        mounted(){
            if(this.widthButton > 0) {
                this.$el.style.width = this.widthButton + 'px';
            }
            this.$el.style.height = this.heightButton + 'px';
        },
        methods:{
            getClassButton: function () {
                let returnValue = 'ff-button';

                if(this.buttonType == 1){
                    returnValue = returnValue + '-icon';

                }else if(this.buttonType == 2){
                    returnValue = returnValue + '-icon-toolbar';

                }
                return returnValue;
            }
        }
    }
</script>
<style scoped></style>
