<template>
  <Header />
  <main>
    <Search />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./app.scss";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

export default defineComponent({
  setup() {},
  components: {
    Header,
    Search,
  },
});
</script>
