<template>
  <section v-if="userData" class="info-section">
    <ProfileInfo :userData="userData" />
    <SocialInfo :userData="userData" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileInfo from "./ProfileInfo.vue";
import SocialInfo from "./SocialInfo.vue";

export default defineComponent({
  setup() {},
  components: { ProfileInfo, SocialInfo },
  props: {
    userData: Object,
    userReposData: Object,
  },
});
</script>

<style lang="scss" scoped>
</style>