<template>
  <div>
    <ViewAnimal
      :dataList="dataList">
      <template v-slot:animal-type>
          <p>Birds 🐦</p>
      </template>
    </ViewAnimal>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import axios from "../api/axiosFakeBirds";
import ViewAnimal from '../reusable_components/_ViewAnimals'
import animalDynamicModule from '../utils/animalDynamicModule';

const name = 'birds';

export default {
  name: "Birds",
  extends: animalDynamicModule(name),
  components: {
    ViewAnimal
  },
  computed: {
    ...mapState(name, {
      dataList: state => state.dataList
    })
  },

  methods: {
    ...mapActions(name,
      ['getAnimalList', 'animalType']
    ),
    setaxiosFail() {
      axios.fail = !axios.fail;
    }
  },
  watch: {
    '$route': {
      handler: (to) => {
        document.title = to.meta.title || ''
      },
      immediate: true
    }
  },
  mounted(){
    this.getAnimalList(name);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>