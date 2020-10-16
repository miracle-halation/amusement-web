<template>
  <v-app dark>
    <div>
      <Loading />
      <Success />
    </div>
    <v-main>
      <div class="full">
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Loading from "@/components/Loading";
import Success from "@/components/Success";

export default {
  data () {
    return {
    }
  },
  components: {
    Loading,
    Success
  },
}
</script>

<style>
  .full{
    min-height: 150vh;
    width: auto;
    background-image: url("~@/assets/main.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
</style>