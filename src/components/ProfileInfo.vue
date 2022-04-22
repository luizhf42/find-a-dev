<template>
  <div class="profile-info" v-if="userData">
    <img :src="userData.avatar_url" alt="User Profile Pic" />
    <div class="names">
      <h2>
        <a
          :href="userData.html_url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ userData.name }}</a
        >
      </h2>
      <h3>{{ userData.login }}</h3>
    </div>
  </div>

  <div class="bio">
    <h2>Bio</h2>
    <p :class="{ 'no-info': !userData.bio }">{{ userData.bio || "No bio" }}</p>
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
@use "../app.scss";
.profile-info {
  @include app.flex(row, start);
  margin-bottom: 1rem;

  img {
    border: app.$border;
    width: 30%;
    border-radius: 50%;
  }

  .names {
    padding: 10px;
    @include app.flex(column, center, start);
  }

  h2 {
    font-size: 1.5rem;
    padding-bottom: 10px;
  }

  h3 {
    font-family: app.$username-font;
    color: app.$username;
    font-weight: 400;
    font-size: 1.3rem;
  }
}

.bio {
  h2 {
    font-size: 1.35rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 400px) {
  .profile-info {
    @include app.flex(column, start, start);

    img {
      width: 45%;
    }

    .names {
      padding-left: 0;
    }
  }
}
</style>