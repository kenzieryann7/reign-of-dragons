<template>
  <div class="container" v-if="isDebugMode">
    <div class="alert alert-warning text-dark text-start">
      <div class="fw-bold border-bottom mb-3">Auth</div>
      <p class="mb-0">Name: {{ getFullname }}</p>
      <p class="mb-0">Role: {{ getRole }}</p>
      <p class="mb-0">Token : {{ getToken }}</p>
      <p class="mb-0">Time: {{ getExpirationTime }}</p>
      <p class="mb-0">Remaining: {{ getExpirationTimeRemaining }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AuthDebug",
  computed: {
    ...mapGetters([
      "getToken",
      "getFullname",
      "getRole",
      "getExpirationTime",
      "getExpirationTimeRemaining"
    ]),
    isDebugMode() {
      return process.env.VUE_APP_DEBUG;
    }
  }
};
</script>
