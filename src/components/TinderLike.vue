<template>
  <div class="tinder-tab">
    <BCarousel>
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=52">
        <h1>123123</h1>
      </BCarouselSlide>
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=52">
        <h1>123123</h1>
      </BCarouselSlide>
    </BCarousel>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
  name: 'TinderLike',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
