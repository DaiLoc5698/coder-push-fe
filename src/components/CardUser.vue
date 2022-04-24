<template>
  <div class="tinder-card">
    <div class="aspect">
      <img 
        :src="user.avatar"
        class="image"
      />
      <div class="info">
        <div>{{ user.name }}, {{ user.age }}</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {  } from 'bootstrap-vue'

export default {
  components: {
  },
  name: 'CardUser',
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
.aspect {
  aspect-ratio: 9/14;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 4px 12px;
    font-size: 12px;
  }
}

</style>
