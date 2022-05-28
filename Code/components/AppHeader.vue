<template>
<header class="h-[133px] bg-gray-500 w-full px-12 py-5 flex items-center justify-between">
  <div>
    <nuxt-link to="/">
      <img class="h-[120px] w-[150px]" src="~/assets/images/logo_transparent.png" alt="logo">
    </nuxt-link>
  </div>
  <div class="flex">
    <a
      href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
      target="_blank"
      class="mr-[10px]"
    >
      <el-button class="h-[46px]">Донат ЗСУ</el-button>
    </a>
    <nuxt-link :to="{ name: 'user' }">
      <el-button>
        <img alt="user" src="~/assets/icons/user.svg" class="w-[20px] h-[20px]">
      </el-button>
    </nuxt-link>
    <nuxt-link class="ml-[10px]" :to="{name: 'favorite'}">
      <el-button>
        <img alt="star" src="~/assets/icons/Star.svg" class="w-[20px] h-[20px]">
      </el-button>
    </nuxt-link>
  </div>
</header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>
