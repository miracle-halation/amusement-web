<template>
  <div v-if="toggle">
    <v-container>
      <v-row>
        <v-col cols="auto" lg="3">
          <div class="game">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>ラッキーパズル</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">シルエットを組み立てよう！</v-card-subtitle>
              
              <v-card-text class="text--primary">
                <div>お題のシルエットを用意されている図形だけで組み立てよう！</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  このゲームを遊ぶ
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>

        <v-col cols="auto" lg="3">
          <div class="game">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>お買い物ゲーム</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">買い物をしよう！</v-card-subtitle>
              
              <v-card-text class="text--primary">
                <div>カートの中の商品を財布の中にあるお金でぴったり払おう</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  このゲームを遊ぶ
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>

        <v-col cols="auto" lg="3">
          <div class="game">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>漢字クイズ</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">面白い漢字の読み方を知ろう！</v-card-subtitle>
              
              <v-card-text class="text--primary">
                <div>偏を選んでその漢字がどんな読み方なのか当てるゲーム！</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  このゲームを遊ぶ
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>

        <v-col cols="auto" lg="3">
          <div class="game">
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>都道府県クイズ</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">都道府県の名前を当てよう！</v-card-subtitle>
              
              <v-card-text class="text--primary">
                <div>都道府県の正しい場所に正しい名前を書こう！</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  このゲームを遊ぶ
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else class="text-center">
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
  }

  .game{
    margin: 30px;
  }

</style>