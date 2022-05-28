<template>
  <el-container class="flex flex-col justify-between">
      <AppHeader/>
      <div class="flex justify-center min-h-[77vh]">
        <nuxt class="max-w-[1450px] py-[24px]"/>
      </div>
      <AppFooter class=""/>
  </el-container>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>
