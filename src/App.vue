<template>
  <div id="app">
    <div class="tinder">
      <BTabs end> 
        <BTab lazy>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Like
          </template>
          <TinderLike v-if="users" :users="users" />
        </BTab>
        <BTab lazy>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Discover
          </template>
          <TinderDiscover 
            v-if="currentUser" 
            :currentUser="currentUser" 
            @fetchCurrentUser="fetchCurrentUser"
          />
        </BTab>
        <BTab lazy>
          <template #title>
            <b-icon icon="suit-heart-fill" scale="1" ></b-icon> Matches
          </template>
          <TinderMatches 
            v-if="currentUser" 
            :currentUser="currentUser"  
          />
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
  },
  beforeCreate() {
    localStorage.setItem('currentUser', "62640f1e55b4af61252d1074")
  },
  created() {
    this.fetchUsers()
    this.fetchCurrentUser()
  },
  data() {
    const users = null
    const currentUser = null
    
    return {
      users,
      currentUser
    }
  },
  methods: {
    fetchUsers() {
      fetch("http://localhost:3000/user")
        .then(response => response.json())
        .then(response => {
          this.users = response.users
        })
    },
    fetchCurrentUser() {
      const currentUserId = localStorage.getItem('currentUser')

      if (!currentUserId) return 

      fetch(`http://localhost:3000/user/${currentUserId}`)
        .then(response => response.json())
        .then(response => {
          this.currentUser = response.user
        })
    }
  }
}
</script>

<style lang="scss">
#app {
  background: black;
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
  overflow: scroll;
}
.tab-pane {
}
.tinder-tab {
}
</style>
