<template>
    <v-col cols="3" class="ma-2">
        <v-text-field :modelValue="modelValue" :label="label" variant="solo"  @input="$emit('update:modelValue', $event.target.value)">
        </v-text-field>
    </v-col>
</template>
<script setup>
defineProps(['modelValue','label'])
defineEmits(['update:modelValue'])
</script>
