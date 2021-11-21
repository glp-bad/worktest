<template>
    <div :class=windowClass.modal ref="windowModalRef">
        <div :class=windowClass.window ref="windowRef">
            <div :class=windowClass.header ref="headerRef">
                <span ref="captionRef"></span>
            </div>
            <div :class=windowClass.message>
                <div :class=windowClass.messageIcon ref="iconMessageRef">
                </div>
                <div :class=windowClass.messageText>
                    <p ref="messageRef"></p>
                </div>
            </div>
            <div :class=windowClass.button>
                <div :class=windowClass.buttonAlign>
                    <button-ok ref="buttonOkRef"
                               v-if="this.cTypeWindows == ALERT || this.cTypeWindows == INFORMATION || this.cTypeWindows == CHECK || this.cTypeWindows == REDALERT || this.cTypeWindows == SKULL"
                               :onClick="clickOk">{{getIconAlertConfig().captionButton01}}
                    </button-ok>

                    <button-yes ref="buttonYesRef" v-if="this.cTypeWindows == YESNO" :onClick="clickYes">{{getIconAlertConfig().captionButton01}} </button-yes>
                    <div :class=windowClass.buttonSpace></div>
                    <button-no ref="buttonNoRef" v-if="this.cTypeWindows == YESNO" :onClick="clickNo">{{getIconAlertConfig().captionButton02}} </button-no>

                </div>
            </div>
            <div :class=windowClass.bottomLine ref="colorBottomLineRef"></div>
        </div>
    </div>
</template>

<script>

    import Button from './Button'

    export default {
        name: "AlertWindow",
        components: {
            'button-ok': Button,
            'button-yes': Button,
            'button-no': Button
        },
        props: {
            cWidth: Number,
            cHeight: Number,
            cTypeWindows: Number
        },
        created() {
            this.ALERT = 1,
            this.INFORMATION = 2,
            this.YESNO = 3,
            this.REDALERT = 4,
            this.CHECK = 5,
            this.SKULL = 6,
            this.ALERT_COLOR = "#DED208",
            this.INFORMATION_COLOR = "#15BEF8",
            this.YESNO_COLOR = "#22C206",
            this.REDALERT_COLOR = "red",
            this.CHECK_COLOR = "#15BEF8",
            this.SKULL_COLOR = "red"
        },
        mounted() {
        },
        methods: {
        },
        data() {
            return {}
        }
    }
</script>

<style scoped></style>
