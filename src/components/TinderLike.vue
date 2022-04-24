<template>
  <div class="tinder-tab">
    <b-row>
      <template v-for="user in users">
        <b-col :key="user._id" cols="6">
          <card-user :user="user" />
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import CardUser from './CardUser.vue'

export default {
  components: {
    CardUser,
  },
  name: 'TinderLike',
  props: {
    users: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.col-6 {
  padding: 4px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>
