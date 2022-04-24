<template>
  <div class="tinder-card-user-match">
    <b-avatar variant="info" :src="user.avatar"></b-avatar>
    <p>{{ user.name }}</p>
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
  },
  name: 'CardUserMatch',
  props: {
    user: {
      type: Object,
      default: () => ({
        avatar: "https://hanoispiritofplace.com/wp-content/uploads/2015/10/hinh-nen-girl-xinh-cho-iphone-2-1.jpg",
        name: "Linh Tran",
        age: 24,
      })
    }
  },
}
</script>

<style scoped lang="scss">
.tinder-card-user-match {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c3b4b4;
  p { 
    margin: 0 0 0 1rem; 
    color: #c3b4b4
  }
}

</style>
