<template>
  <!-- <div style="width: 100%; position: fixed"> -->
  <div class="container  position-fixed" style="width: 100%; position: fixed">
    <div class="formProgress">
    <FormProgress />
    </div>
    <div class="nav-form">
      <button type="button" :class="{ disabled: isFirstField }" class="form-button" @click="$emit('back')"
        @keyup.page-up="$emit('back')">
        <Icon icon="ep:arrow-up-bold" />
      </button>

      <button type="button" :class="{ disabled: isLastField }" class="form-button" @click="$emit('next')"
        @keyup.page-down="$emit('next')">
        <Icon icon="ep:arrow-down-bold" />
      </button>
    </div>
  </div>
</template>
<script setup>
import FormProgress from "./FormProgress.vue";
import { Icon } from "@iconify/vue";

defineEmits(["back", "next"]);

defineProps({
  isFirstField: {
    type: Boolean,
    default: true,
  },
  isLastField: {
    type: Boolean,
    default: false,
  },
});
</script>


<style scoped>
.container {
  /* border: 2px solid red; */
}

/* .formProgress {
  border: 2px solid red;
  background-color: yellow;
} */
</style>