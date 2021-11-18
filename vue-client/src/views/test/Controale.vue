<template>
    <my-button :onClick="onClickCancel">Noul buton cu SLOT</my-button>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Button from '../../components/base/Button.vue';

    @Options({
        components: {
            'my-button': Button
        },
        onclickCancel(): void {
            console.log('click cancel');
        }
    })



    export default class Controale extends Vue {}
</script>

<style scoped>
</style>