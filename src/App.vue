<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./app.scss";
import Header from "./components/Header.vue";

export default defineComponent({
  setup() {},
  components: {
    Header,
  },
});
</script>
