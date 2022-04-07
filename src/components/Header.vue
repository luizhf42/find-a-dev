<template>
  <header>
    <h1>find a dev.</h1>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/luizhf42">
            <i class="devicon-github-original"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luiz-henrique-felix">
            <i class="devicon-linkedin-plain"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
header {
  background: app.$header-bg;
  padding: 0px 32px;
  height: 65px;
  @include app.flex(row, space-between);

  h1 {
    font-size: 2.5rem;
    font-family: app.$title-font;
    color: app.$title;
  }

  nav {
    ul {
      @include app.flex(row, space-between);
      width: 120px;

      li {
        a {
          text-decoration: none;
          color: white;
          
          i {
            font-size: 2.5rem;
            transition: .3s;

            &:hover {
              font-size: 2.7rem;
            }
          }
        }
      }
    }
  }
}
</style>