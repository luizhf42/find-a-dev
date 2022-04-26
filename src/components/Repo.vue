<template>
  <li>
    <h4>
      <img :src="book" alt="" />
      <a :href="repo.html_url">{{ repo.name }}</a>
    </h4>
    <p>{{ repo.description }}</p>
    <div>
      <img :src="star" alt="" />
      <span>{{ repo.stargazers_count }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import book from "../assets/book.svg";
import star from "../assets/star.svg";

export default defineComponent({
  setup() {
    return { book, star };
  },
  props: {
    repo: Object,
  },
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
li {
  @include app.flex(column, space-evenly, start);
  border: app.$border;
  width: 100%;
  border-radius: 6px;
  min-height: 107px;
  padding: 1rem;

  h4 {
    font-size: 0.875rem;
    @include app.flex(row, start, center);
    gap: 5px;
    height: 16px;
  }

  div {
    @include app.flex(row, start, center);
    gap: 5px;
    height: 14px;
  }

  p,
  div,
  span {
    color: app.$repo-color;
    font-size: 0.75rem;
  }

  img {
    height: 90%;
  }
}
</style>