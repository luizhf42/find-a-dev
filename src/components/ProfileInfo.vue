<template>
  <div class="profile-info" v-if="userData">
    <img :src="userData.avatar_url" alt="User Profile Pic" />
    <div>
      <h2>
        {{ userData.login }}
        <a href="" target="_blank" rel="noopener noreferrer"></a>
      </h2>
      <h3></h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
    userData: Object,
  },
});
</script>

<style lang="scss" scoped>
</style>