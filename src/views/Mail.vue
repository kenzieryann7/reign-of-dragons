<template>
  <!--
    `container` for max width 1320px
    `container-fluid` for full width.
    https://getbootstrap.com/docs/5.0/layout/containers/
  -->
  <div class="container">
    <div class="text-white fw-bold">Mail</div>
    <div class="card bg-dark text-white" style="width: 25rem">
      <div class="card-body">This is some text within a card body.</div>
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
