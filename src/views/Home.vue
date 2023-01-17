<template>
  <div class="home-container">
    <div class="nav-container">
      <Sidebar />
    </div>
    <div class="flow-container">
      <Main />
    </div>
    <div class="trends-container">
      <Trends />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar/index.vue'
import Trends from '@/components/Trends/index.vue'
import Main from '@/components/Main/index.vue'
export default {
  name :'Home',
  components: {
    Sidebar,
    Trends,
    Main
  }
}
</script>
<style lang="scss">
@import '@/assets/theme/colors.scss';
  .home-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    .nav-container{
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    }
    .flow-container{
      width: 100%;
      height: 100%;
      // background-color: rgb(222, 222, 252);
      border: $light-grey-border;
    }
    .trends-container{
      width: 80%;
      height: 100%;
      // background-color: blueviolet;
    }

  }
</style>