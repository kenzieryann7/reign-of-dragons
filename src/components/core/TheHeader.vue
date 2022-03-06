<template>
  <div class="card bg-dark text-white" style="border-radius: 0px">
    <div class="card-body p-2">
      <div class="row">
        <div class="col">
          <img class="me-1" src="@/assets/gold.svg" width="30" /> 20
        </div>
        <div class="col">
          <img class="me-1" src="@/assets/wheat.svg" width="30" /> 20
        </div>
        <div class="col">
          <img class="me-1" src="@/assets/log.svg" width="30" /> 20
        </div>
        <div class="col">
          <img class="me-1" src="@/assets/stone.svg" width="30" /> 20
        </div>
        <div class="col">
          <img class="me-1" src="@/assets/fire-gem.svg" width="30" /> 20
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: process.env.VUE_APP_COURSE
    },
    subtitle: {
      type: String,
      default: process.env.VUE_APP_TITLE
    }
  }
};
</script>
