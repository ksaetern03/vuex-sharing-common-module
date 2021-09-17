<template>
  <div>
    <ViewAnimal
      :dataList="dataList">
      <template v-slot:animal-type>
          <p>Dogs 🐕</p>
      </template>
    </ViewAnimal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ViewAnimal from '../reusable_components/_ViewAnimals'
import animalDynamicModule from '../utils/animalDynamicModule';

const name = 'dogs';

export default {
  name: "Dogs",
  components: {
    ViewAnimal
  },
  extends: animalDynamicModule(name),
  computed: {
    ...mapState(name, {
      dataList: state => state.dataList
    })
  },
  methods: {
    ...mapActions(name,
      ['getAnimalList', 'animalType']
    )
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
</style>