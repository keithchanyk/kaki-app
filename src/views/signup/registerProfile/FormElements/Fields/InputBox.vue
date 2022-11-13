<template>
  <input
    :id="props.field.name"
    v-model="selectedValue"
    v-focus
    :type="props.field.type"
    :name="props.field.name"
    :placeholder="$attrs['placeholder']"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { useFormField } from "../../../../../composables/useFormField";

defineEmits(["update:modelValue"]);

const props = defineProps({
  field: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  }
});

const { selectedValue, vFocus } = useFormField(props);
</script>
