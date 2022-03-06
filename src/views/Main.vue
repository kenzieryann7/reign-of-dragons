<template>
  <!--
    `container` for max width 1320px
    `container-fluid` for full width.
    https://getbootstrap.com/docs/5.0/layout/containers/
  -->
  <div class="container">hi</div>
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
