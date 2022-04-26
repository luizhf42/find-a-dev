<template>
  <section class="info-section repos-section" v-if="userReposData">
    <h2>Public Repos ({{ userReposData.length }})</h2>
    <ul>
      <Repo
        v-for="repo in userReposData"
        :key="repo.id"
        :repo="repo"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Repo from "./Repo.vue";

export default defineComponent({
  setup() {},
  props: {
    userReposData: Object,
  },
  components: { Repo },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
.repos-section {
  overflow: auto;

  h2 {
    margin: 1rem 0;
  }

  ul {
    width: 100%;
    @include app.flex(column, start, start);
    gap: 10px;
  }
}
</style>