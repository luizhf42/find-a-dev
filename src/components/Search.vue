<template>
  <form @submit.prevent="makeRequest">
    <input type="text" placeholder="Search the dev." v-model="inputText" />
    <button>
      <img :src="searchIcon" alt="" />
    </button>
  </form>
  <p v-show="searchErrorOccurred">{{ errorMessage }}</p>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, Ref } from "vue";
import searchIcon from "../assets/search-icon.svg";
import axios from "../services/axios";
import { animateOnError } from "../utils/animateOnError";

type errorMessage = "An error occurred!" | "Type the user!";

export default defineComponent({
  setup(props, { emit }) {
    const userData = ref({});
    const userReposData = ref([]);
    const inputText = ref("");
    const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
    const searchErrorOccurred = ref(false);
    const errorMessage: Ref<errorMessage> = ref("An error occurred!");

    onMounted(async () => {
      try {
        const dataResponse = await axios.get("luizhf42");
        userData.value = dataResponse.data;
        const reposResponse = await axios.get("luizhf42/repos");
        userReposData.value = reposResponse.data;
        emit("request", {
          userData: userData.value,
          userReposData: userReposData.value,
        });
      } catch (error) {
        console.error(error);
      }
    });

    const makeRequest = async () => {
      inputText.value = inputText.value.trim();

      if (inputText.value.match(githubUsernameRegex)) {
        try {
          const dataResponse = await axios.get(inputText.value);
          userData.value = dataResponse.data;
          const reposResponse = await axios.get(`${inputText.value}/repos`);
          userReposData.value = reposResponse.data;

          emit("request", {
            userData: userData.value,
            userReposData: userReposData.value,
          });
          searchErrorOccurred.value = false;
          inputText.value = "";
        } catch (error) {
          console.error(error);
          animateOnError();
          errorMessage.value = "An error occurred!";
          searchErrorOccurred.value = true;
        }
      } else {
        animateOnError();
        errorMessage.value = "Type the user!";
        searchErrorOccurred.value = true;
      }
    };

    return {
      makeRequest,
      searchIcon,
      inputText,
      searchErrorOccurred,
      errorMessage,
    };
  },
  emits: ["request"],
});
</script>

<style lang="scss" scoped>
@use "../app.scss";
form {
  width: min(95%, 600px);
  margin: auto;
  @include app.flex(row);

  input {
    width: 65%;
    height: 32px;
    padding: 0 32px 0 7px;
    border: app.$border;
    background: app.$main-bg;
    color: app.$text;
    border-radius: 6px;

    &::placeholder {
      color: app.$input-placeholder;
      font-size: 0.9rem;
    }

    &:focus {
      outline: 0;
      border: 1px solid app.$input-focus;
      &::placeholder {
        color: app.$input-focus-placeholder;
      }
    }
  }
  button {
    border-radius: 0 6px 6px 0;
    height: 32px;
    width: 40px;
    margin-left: -28px;
    background: app.$input-focus;
    border: 0;
    @include app.flex();

    img {
      height: 65%;
    }
  }
}

p {
  color: app.$error;
  text-align: center;
  margin: 10px;
  font-size: 1.1rem;
}
</style>