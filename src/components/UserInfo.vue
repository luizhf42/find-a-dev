<template>
  <section v-if="userData">
    <ProfileInfo :userData="userData" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileInfo from "./ProfileInfo.vue";

export default defineComponent({
  setup() {
  },
  components: { ProfileInfo },
  props: {
    userData: Object,
    userReposData: Object,
  },
});
</script>

<style lang="scss" scoped>
</style>