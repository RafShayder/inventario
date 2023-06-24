<template>
    <v-col cols="3" class="ma-2">
        <label class="text-blue">{{ label }}</label>
        <v-text-field :modelValue="valor"  variant="solo" @update:modelValue="valor = $event">
        </v-text-field>
    </v-col>
</template>


<script setup>
defineProps(
    {
        label: {
            type: String,
            required: true
        },
        valor: {
            required: true
        },


    }
);
</script>
