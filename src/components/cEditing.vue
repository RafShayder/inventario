<template>
    <v-col cols="3" class="ma-2">
        <v-text-field :modelValue="modelValue" :label="label" variant="solo"
            @input="$emit('update:modelValue', $event.target.value)">
        </v-text-field>

        <v-select v-if="label == 'color'" disabled v-model="datos.select" :hint="`${datos.select.cod}, ${datos.select.value}`"
            :items="datos.data" item-title="value" item-value="cod" label="Select" persistent-hint return-object
            variant="solo"></v-select>
    </v-col>
</template>
<script setup>
defineProps(['modelValue', 'label'])
defineEmits(['update:modelValue'])
</script>
<script>
export default {
    data() {
        return {
            datos: {
                select: { cod: '', value: ''},
                data: [
                    { cod: '1', value: 'prueba 1' },
                    { cod: '2', value: 'prueba 2' },
                ],
                key: true
            }
        }
    }
}
</script>