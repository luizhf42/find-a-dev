<template>
  <Header />
  <main>
    <Search @request="handleNewData" />
    <div class="infos" v-if="data && reposData">
      <UserInfo :userData="data" />
      <ReposInfo :userReposData="reposData" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "./app.scss";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import UserInfo from "./components/UserInfo.vue";
import ReposInfo from "./components/ReposInfo.vue";

export default defineComponent({
  setup() {
    const data = ref();
    const reposData = ref([] as any);

    const handleNewData = ({
      userData,
      userReposData,
    }: {
      userData: Object;
      userReposData: Object[];
    }) => {
      data.value = userData;
      reposData.value = userReposData;
    };

    return { handleNewData, data, reposData };
  },
  components: {
    Header,
    Search,
    UserInfo,
    ReposInfo,
  },
});
</script>
