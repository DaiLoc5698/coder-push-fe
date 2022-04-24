<template>
  <div class="tinder-tab">
    <h6 class="my-4 mx-2"> Matches: </h6>
    <template v-for="user in listUserMatching">
      <card-user-match :key="user.id" :user="user" />
    </template>
  </div>
</template>

<script>
import CardUserMatch from "./CardUserMatch.vue"

export default {
  components: {
    CardUserMatch,
  },
  name: 'TinderLike',
  props: {
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.fetchUsersMatch()
  },
  data() {
    const listUserMatching = []

    return {
      listUserMatching
    }
  },
  methods: {
    fetchUsersMatch() {
      fetch(`http://localhost:3000/user/${this.currentUser.id}/match`)
        .then(response => response.json())
        .then(response => {
          this.listUserMatching = response.users
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
