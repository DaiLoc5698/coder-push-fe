<template>
  <div id="app">
    <div class="tinder">
      <BTabs end> 
        <BTab>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Like
          </template>
          <TinderLike />
        </BTab>
        <BTab>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Discover
          </template>
          <TinderDiscover />
        </BTab>
        <BTab>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Matches
          </template>
          <TinderMatches />
        </BTab>
      </BTabs>
    </div>
    
  </div>
</template>

<script>
import { BTabs, BTab, BIcon } from 'bootstrap-vue'
import TinderDiscover from './components/TinderDiscover.vue'
import TinderLike from './components/TinderLike.vue'
import TinderMatches from './components/TinderMatches.vue'

export default {
  name: 'App',
  components: {
    BTabs,
    BTab,
    TinderLike,
    TinderMatches,
    TinderDiscover,
    BIcon,
  }
}
</script>

<style lang="scss">
#app {
  
  display: flex;
  justify-content: center;
  .tinder {
    background: snow;
    aspect-ratio: 9/16;
    width: 40%;
    max-width: 450px;
    min-width: 370px;
  }
}
.tabs {
  height: 100%;

  .nav .nav-item {
    flex: 1;
    text-align: center;
  }
}
.tab-content {
  height: calc(100% - 42px);
}
.tab-pane {
}
.tinder-tab {
}
</style>
