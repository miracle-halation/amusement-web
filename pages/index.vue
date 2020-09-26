<template>
  <div class="full" v-if="toggle">
    <v-container>
      <v-row>
        <v-col cols="auto" lg="3" class="games">
          <div class="my-2">
            <v-btn x-large color="secondary" dark>ラッキーパズル</v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="secondary" dark>お買い物しよう！</v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="secondary" dark>おもしろ漢字広場</v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="secondary" dark>都道府県言えるかな?</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else class="text-center full">
    <v-btn @click="isToggle" rounded color="primary" dark>Rounded Button</v-btn>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){
    return {
      toggle: false
    }
  },
  methods: {
    isToggle(){
      this.toggle = true
    }
  }
}
</script>

<style>
  .full{
    min-height: 100vh;
    width: auto;
    background-image: url("~@/assets/main.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .games{
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }

  .my-2{
    margin: 0px 300px;
    padding: 50px 0
  }
</style>