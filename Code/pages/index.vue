<template>
  <div>
    <div class="flex max-h-[70vh]">
      <div class="flex flex-col items-center w-6/12 py-[36px] px-[70px] bg-gray-300">
        <img class="h-[190px] w-[270px]" src="~/assets/images/logo_transparent.png" alt="logo">
        <p class="text-[20px] font-extrabold">Penaty — це пошуковик нерухомості на вторинному ринку.
          Ми збираємо всі актуальні оголошення,перевіряємо власників та пропонуємо нашим користувачам
          зручний інтерфейс для перегляду всіх пропозицій в одному місці.
        </p>
        <div class="flex justify-between w-full mt-16">
          <nuxt-link :to="{ name: 'user' }">
            <el-button class="w-[200px]">Кабінет</el-button>
          </nuxt-link>
          <nuxt-link :to="{ name: 'favorite' }">
            <el-button class="w-[200px]">Улюблені</el-button>
          </nuxt-link>
        </div>
        <div class="flex justify-between w-full mt-16">
          <a href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
             target="_blank"
          >
            <el-button class="w-[200px]">Підтримати ЗСУ</el-button>
          </a>
          <nuxt-link :to="{ name: 'shelters' }">
            <el-button class="w-[200px]">Прихистки</el-button>
          </nuxt-link>
        </div>

      </div>
      <div class="w-7/12 flex flex-col items-center">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10VLzHQ2YH4RpoHAfg1SfG0ap-6Bldnag&ehbc=2E312F" width="900" height="685"></iframe>
          </div>
        </div>
        <div style="z-index: 100" class="w-[640px] h-[256px] bg-gray-900 mt-[-250px] py-[27px] px-[75px]">
          <el-form class="flex flex-col items-center">
            <el-select class="w-full h-[56px]" value="Оренда житла"/>
            <el-input class="w-full my-[16px] h-[56px]" value="Львів"/>
            <nuxt-link :to="{ name: 'search' }">
              <el-button class="h-[56px]">Пошук</el-button>
            </nuxt-link>
          </el-form>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="my-[30px]">
        <el-tag
          class="ml-[20px] h-[88px] w-[700px] text-[36px] font-extrabold flex items-center justify-center"
          type="info">Гарячі пропозиції</el-tag>
      </div>
      <el-carousel
        type="card"
        :interval="5000"
        indicator-position="outside"
        class="min-w-[700px]"
        height="280px"
      >
        <el-carousel-item v-for="apartment in flatList" :key="apartment.id">
          <ApartmentCard  :apartment="apartment"/>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

</template>

<script>
import ApartmentCard from "@/components/shared/ApartmentCard";

export default {
  name: 'IndexPage',
  components: { ApartmentCard },
  layout: 'HomeLayout',
  data () {
    return {
      some: ''
    }
  },
  computed: {
    flatList() {
      return this.$store.getters['flats/flatList']
    }
  },
  methods: {
    qqq () {
      console.log(this.flatList)
    }
  }
}
</script>
