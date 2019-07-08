<template>
  <div>
    <transition name="fade">
      <slot></slot>
    </transition>
   
  </div>
</template>

<script>
  export default {
    name: "fadeAnimation",
    
  }
</script>

<style lang="scss" scoped>

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0s;
}


  
</style>