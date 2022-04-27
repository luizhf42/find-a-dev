<template>
  <section v-if="userData" class="info-section user-info">
    <ProfileInfo :userData="userData" />
    <SocialInfo
      :userData="userData"
      :website="{ href: userData.blog || '#' }"
    />
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
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
.user-info {
  @include app.flex(column, center, start);
}
</style>