<template>
  <div class="tinder-tab" v-if="user">
    <div>
      <b-carousel 
        :interval="0"
        background="#ababab"
        img-width="1024"
        img-height="480"
        v-model="slide"
        style="text-shadow: 1px 1px 2px #333;" 
        ref='carousel'
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide key='slide-user'>
          <template #img>
            <img
              style="object-fit: cover; aspect-ratio: 2/3; width: 100%; height: 100%"
              :src="user.avatar"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide key='slide-blank'>
          <template #img>
            <img
              style="object-fit: cover; aspect-ratio: 2/3; width: 100%; height: 100%"
              src="https://wallpaperaccess.com/full/1397755.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
      </b-carousel>

      <p class="pt-1 pl-2 text-muted">{{user.name}}, {{user.age}}</p>

      <div class="actions">
        <b-button class="mr-2 danger" @click="passHandler(user)">
          <b-icon icon="x-circle" scale="2" ></b-icon>  
        </b-button>
        <b-button class="ml-2 success" @click="likeHandler(user)">
          <b-icon icon="suit-heart-fill" scale="2" ></b-icon>
        </b-button>
      </div>      
    </div>
    
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide, BIcon, BButton } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BIcon,
    BButton,
  },
  name: 'TinderDiscover',
  props: {
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.fetchRandomUser()
  },
  data() { 
    const slide = 0
    const user = null

    return {
      slide,
      user,
    }
  },
  methods: {
    fetchRandomUser() {
      return fetch(`http://localhost:3000/user/random?currentUser=${this.currentUser.id}`)
        .then(response => response.json())
        .then(response => {
          this.user = response.users[0]
        })
    },
    async onSlideEnd(slide) {  
      if (slide%2 === 1) {
        this.fetchRandomUser()
      } 
      
      setTimeout(() => {
        if (slide%2 !== 0) {
          this.$refs.carousel.next()
        }
      }, 0)
      
    },
    async likeHandler() {
      this.likeUser(this.user._id)
      this.$refs.carousel.next()
    },
    likeUser(likedUserId) {
      return fetch("http://localhost:3000/user/like", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentUser: this.currentUser, 
          likedUserId: likedUserId,
        })
      })
      .then(() => this.$emit('fetchCurrentUser'))
    },
    async passHandler() {
      this.passUser(this.user._id)
      this.$refs.carousel.next()
    },
    passUser(passedUserId) {
      return fetch("http://localhost:3000/user/pass", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentUser: this.currentUser, 
          passedUserId: passedUserId,
        })
      })
      .then(() => this.$emit('fetchCurrentUser'))
    }
  },
}
</script>

<style scoped lang="scss">
.actions {
  position: absolute;
  bottom: -28px;
  left: calc(50% - 55px);
  display: flex;
  .btn {
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    box-shadow: 0 0 5px 2px #888888;
    border: none;
    svg {
      width: 0.75rem;
    }
  }
  .danger {
    svg {
      color: red;
    }
  }
  .success {
    svg {
      color: green;
    }
  }
}
.tinder-tab {
  position: relative;
}
</style>
