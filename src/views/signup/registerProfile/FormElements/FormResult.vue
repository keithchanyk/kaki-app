<template>
  <TypeBasedTransition :transition-type="'fadeUpDown'">
    <div v-if="isLastField" class="form-complete">

      <!-- <h1 @click="LastField()">hello</h1> -->
      <!-- <pre> {{ store.formData }} </pre> -->
      <pre> {{ LastField() }} </pre>
    </div>
  </TypeBasedTransition>
</template>
<script setup>
// Transition - functional component
import TypeBasedTransition from "../Transitions/TypeBasedTransition";

// Pinia
import { useLeadStore } from "../../../../stores/LeadStore";


defineProps({
  isLastField: {
    type: Boolean,
    default: false,
  },
});
const store = useLeadStore();
// console.log(store)
</script>

<script>
export default {
  methods: {
    LastField() {
      console.log(this.isLastField)
      console.log("boo")
      window.location.href = 'http://localhost:5173/project';
      sessionStorage.setItem('isAuth', 'true');
    }
  }
}
</script>