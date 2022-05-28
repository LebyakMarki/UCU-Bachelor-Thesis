<template>
  <div class="pt-[47px] flex">
    <div class="mr-[66px] flex flex-col gap-16">
      <div class="flex py-[32px] px-[26px]">
        <el-avatar shape="squire" :size="90">Photo</el-avatar>
        <div class="ml-[40px]">
          <p class="text-[24px] font-extrabold">Маркіян Лебяк</p>
          <p class="text-[16px] font-extrabold">lebyak.m@gmail.com</p>
        </div>
      </div>
      <el-button class="w-full h-[57px]">Надати прихисток</el-button>
      <div>
        <el-button class="w-full h-[57px]">Додати оголошення</el-button>
      </div>
      <a
        href="https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
        target="_blank">
        <el-button class="w-full h-[57px]">Підтримати ЗСУ</el-button>
      </a>
      <el-button class="w-full h-[57px]">Налаштування</el-button>

    </div>
    <div class="flex flex-col">
      <div class="border-2 w-[280px] mb-[16px] h-[150px] flex flex-col items-center justify-center">
        <p>Ваші оголошення:</p>
        <p>1</p>

      </div>
      <ApartmentCard type="shelter" :apartment="apartment"/>
    </div>

  </div>
</template>

<script>
import ApartmentCard from "@/components/shared/ApartmentCard";
export default {
  name: "user",
  components: {ApartmentCard},
  layout: 'DefaultLayout',
  computed: {
    apartment () {
      return this.$store.getters['flats/flatList'][0]
    }
  }
}
</script>

<style scoped>

</style>
