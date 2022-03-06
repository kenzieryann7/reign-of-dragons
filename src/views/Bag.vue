<template>
  <!--
    `container` for max width 1320px
    `container-fluid` for full width.
    https://getbootstrap.com/docs/5.0/layout/containers/
  -->
  <div class="container">
    <div class="text-white fw-bold">Bag</div>
    <div class="card bg-dark text-white text-center" style="width: 65px">
      <div class="card-body">
        <img class="" src="@/assets/log.svg" width="38" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Main",
  components: {},
  data: function () {
    return {};
  },
  props: {},
  computed: {},
  methods: {
    ...mapActions(["setValue"])
  }
};
</script>
