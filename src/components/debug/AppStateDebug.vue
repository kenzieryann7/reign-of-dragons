<template>
  <div class="container" v-if="isDebugMode">
    <div class="alert alert-warning text-dark text-start">
      <div class="fw-bold border-bottom mb-3">AppState</div>
      <p class="mb-0">isReady: {{ isReady }}</p>
      <p class="mb-0">Value: {{ getValue }}</p>
      <p class="mb-0">Name: {{ getName }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppStateDebug",
  computed: {
    ...mapGetters(["getValue", "isReady", "getName"]),
    isDebugMode() {
      return process.env.VUE_APP_DEBUG;
    }
  }
};
</script>
