<template>
  <div class="tinder-tab">
    <div>
      <b-carousel 
        :interval="0"
        background="#ababab"
        img-width="1024"
        img-height="480"
        v-model="slide"
        style="text-shadow: 1px 1px 2px #333;" 
      >
        <template v-for="user in users"> 
          <b-carousel-slide :key='user.key'>
            <template #img>
              <img
                style="object-fit: cover; aspect-ratio: 2/3; width: 100%; height: 100%"
                :src="user.image"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </template>
      </b-carousel>

      <p class="pt-1 pl-2 text-muted">{{users[slide].name}}, {{users[slide].age}}</p>

      <div class="actions">
        <b-button class="mr-2 danger">
          <b-icon icon="x-circle" scale="2" ></b-icon>  
        </b-button>
        <b-button class="ml-2 success">
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

  },
  data() { 
    const slide = 0
    const users = [
      { 
        id: 1,
        image: 'https://nhacchuonghinhnen.com/wp-content/uploads/2020/03/hinh-nen-gai-xinh-full-hd-cho-dien-thoai-2-scaled.jpg',
        name: 'name1',
        age: '24',
      },
      { 
        id: 2,
        image: 'https://luv.vn/wp-content/uploads/2021/11/avatar-gai-xinh-17.jpg',
        name: 'name2',
        age: '24',
      },
      { 
        id: 3,
        image: 'https://luv.vn/wp-content/uploads/2021/10/hinh-nen-gai-xinh-11-1.jpg',
        name: 'name3',
        age: '24',
      }
    ]
    return {
      users,
      slide,
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
