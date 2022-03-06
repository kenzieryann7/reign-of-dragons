<!-- In most cases, this file shouldn't be changed. -->

<template>
  <div class="container">
    <div class="game-window mt-5">
      <TheHeader />
      <div class="row">
        <div class="col-3">
          <div
            class="card sidebar bg-dark text-white"
            style="border-radius: 0px"
          >
            <div class="card-body">Rynzaii Lvl 1</div>
          </div>
        </div>
        <div class="col"><router-view /></div>
      </div>

      <TheFooter class="test border-top" />
    </div>
  </div>
</template>

<script>
import Datastore from "@/helpers/Datastore";
import TheHeader from "@/components/core/TheHeader.vue";
import TheFooter from "@/components/core/TheFooter.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  mixins: [Datastore],
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    this.readDatastore();
  },
  computed: {
    ...mapGetters(["payload"])
  },
  watch: {
    $route: "readDatastore",
    payload(newValue, oldValue) {
      if (!oldValue.isReady) {
        return;
      }
      this.writeDatastore(newValue.value);
    }
  }
};
</script>

<style scoped>
.game-window {
  border: 1px solid white;
  width: 800px !important;
  height: 600px !important;
  position: relative;
}

.sidebar {
  height: 550px;
}

.test {
  bottom: 0 !important;
  position: absolute;
  width: 798px;
  left: 0 !important;
}
</style>
