<template>
  <div class="social-info">
    <img :src="userGroup" alt="" />
    <p>
      <span>{{ formatter.format(userData.followers) }}</span>
      followers
    </p>
    ·
    <p>
      <span>{{ formatter.format(userData.following) }}</span>
      following
    </p>
  </div>

  <div class="personal-info">
    <p :class="{ 'no-info': !userData.company }">
      <img :src="company" alt="" />{{ userData.company || "No info" }}
    </p>
    <p :class="{ 'no-info': !userData.location }">
      <img :src="location" alt="" />{{ userData.location || "No info" }}
    </p>
    <p :class="{ 'no-info': !userData.twitter }">
      <img :src="twitter" alt="" />{{ userData.twitter || "No info" }}
    </p>
    <p>
      <img :src="link" alt="" />
      <a :href="website.href" :class="{ 'no-info': !userData.blog }">{{
        userData.blog || "No info"
      }}</a>
    </p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  WritableComputedRef,
  ref,
} from "vue";
import company from "../assets/company-icon.svg";
import location from "../assets/location-dot.svg";
import twitter from "../assets/twitter-icon.svg";
import link from "../assets/link-icon.svg";
import userGroup from "../assets/user-group.svg";

export default defineComponent({
  setup({ userData }) {
    const formatter = new Intl.NumberFormat();

    return {
      // href,
      formatter,
      company,
      location,
      twitter,
      link,
      userGroup,
    };
  },
  props: {
    userData: Object,
    website: Object,
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";

.social-info {
  @include app.flex(row, start);
  gap: 7px;
  height: 20px;
  margin: 1.5rem 0;

  span {
    font-weight: 600;
  }

  img {
    height: 80%;
  }
}

.personal-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;

  p {
    width: 100%;
    max-height: 16px;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      @extend p;
      display: inline;
    }
  }

  img {
    height: 100%;
    width: 16px;
    margin-right: 5px;
  }
}
</style>