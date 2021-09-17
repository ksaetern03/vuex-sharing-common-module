<template>
  <div class="app">
    <section>
      <div class="tile is-ancestor box">
        <div class="tile is-vertical is-4">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child box">
              <div>
                <slot name="animal-type"></slot>
                <br>
                <hr>
                <p class="title">Status</p>
              </div>
              <div class="columns">
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':dataList.status.pending,
              'is-danger':!dataList.status.pending}"
                    >Pending</span>
                  </div>
                </div>
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':dataList.status.success,
              'is-danger':!dataList.status.success}"
                    >Success</span>
                  </div>
                </div>
                <div class="column">
                  <div>
                    <span
                      class="tag"
                      :class="{'is-success':dataList.status.fail,
              'is-danger':!dataList.status.fail}"
                    >Fail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-vertical is-8">
          <div class="box">
            <p class="title">State</p>
            <vue-json-pretty :data="dataList" highlightMouseoverNode></vue-json-pretty>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  props: {
    name: String,
    status: String,
    dataList: Object,
  },
  components: {
    VueJsonPretty
  },
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