
<template>
    <img class="ff-icon-background-red" :src=this.urlSvg>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            size: {
                type: Number,
                default: 15
            },
            urlSvg: {
                type: URL,
                required: true
            }
        },
        components: {},
        mounted() {
            this.$el.nextElementSibling.style.width = this.size + 'px'
        },
        methods: {
            setPath() {
                return '/img/' + this.urlSvg;
            }
        }
    })

    export default class Icon extends Vue {}
</script>

<style scoped>

</style>
