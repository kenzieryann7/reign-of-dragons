<template>
  <div class="card bg-dark text-white" style="border-radius: 0px">
    <div class="card-body p-1">
      <div class="row">
        <div class="col">
          <router-link :to="{ name: 'Mail' }">
            <button type="button" class="btn btn-primary">Mail</button>
          </router-link>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Dailies</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Heroes</button>
        </div>
        <div class="col">
          <router-link :to="{ name: 'Bag' }">
            <button type="button" class="btn btn-primary">Bag</button>
          </router-link>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Achievements</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Market</button>
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
