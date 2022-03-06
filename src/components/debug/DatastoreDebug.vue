<template>
  <div class="container" v-if="isDebugMode">
    <div class="alert alert-warning text-dark text-start">
      <div class="fw-bold border-bottom mb-3">Datastore</div>
      <p class="mb-0">isLoaded: {{ isLoaded }}</p>
      <p class="mb-0">Value: {{ getValue }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DatastoreDebug",
  computed: {
    ...mapGetters("datastore", ["getValue", "isLoaded"]),
    isDebugMode() {
      return process.env.VUE_APP_DEBUG;
    }
  }
};
</script>
