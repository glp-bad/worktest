
<template>
        <button :class=this.getColorIcon() :title=this.title>
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
            iconColor: {
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
            getColorIcon: function () {
                let returnValue = 'ff-button';

                if(this.iconColor == 1){
                    returnValue = returnValue + '-icon--green';
                }else if(this.iconColor == 2){
                    returnValue = returnValue + '-icon--blue';
                }else if(this.iconColor == 3){
                    returnValue = returnValue + '-icon--red';
                }else if(this.iconColor == 11){
                    returnValue = returnValue + '-icon-toolbar--green';
                }else if(this.iconColor == 22){
                    returnValue = returnValue + '-icon-toolbar--blue';
                }else if(this.iconColor == 33){
                    returnValue = returnValue + '-icon-toolbar--red';
                }

                return returnValue;
            }
        }
    }
</script>
<style scoped></style>
