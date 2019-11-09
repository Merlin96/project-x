<template>
<v-container>
    <v-alert  type="info" @input="onClose">
        {{ text }}
    </v-alert>
    <v-alert type="error" :value="true">
KSKSKSK
    </v-alert>
    </v-container>
</template>
<script>
export default {
    props: ['text'],
    methods: {
        onClose() {
            this.$emit('dismissed')
        }
    }
}
</script>