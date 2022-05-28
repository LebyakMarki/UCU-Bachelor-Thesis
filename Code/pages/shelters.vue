<template>
  <div class="mb-[60px]">
    <div class="flex justify-center">
      <el-tag type="info" class="w-[700px] h-[110px] flex items-center justify-center mb-[20px]">
        <p class="text-[36px] font-extrabold">Безкоштовні прихистки</p>
      </el-tag>
    </div>
    <div v-if="sheltersList.length" class="flex flex-wrap gap-16 items-start h-full">
      <ApartmentCard type="shelter" v-for="apartment in sheltersList" :apartment="apartment"/>
    </div>
    <div v-else class="flex justify-center">
      <p class="text-[36px] text-black font-extrabold">Немає прихистків</p>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "@/components/shared/ApartmentCard";
export default {
  name: "shelters",
  components: {ApartmentCard},
  layout: 'DefaultLayout',
  computed : {
    sheltersList () {
      return this.$store.getters['shelters/sheltersList']
    }
  }
}
</script>
