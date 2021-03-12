<template>
  <div class="menu-control">
      <menu-control-item></menu-control-item>
  </div>
</template>

<script>
export default {
    components:{
        MenuControlItem:()=>import("./menuControl/menuControlItem")
    }
}
</script>

<style>

</style>