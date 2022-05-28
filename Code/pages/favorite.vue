<template>
  <div>
    <div class="flex justify-center">
      <el-tag type="info" class="w-[700px] h-[110px] flex items-center justify-center mb-[20px]">
        <p class="text-[36px] font-extrabold">Обрані</p>
      </el-tag>
    </div>
    <div v-if="selectedApartment.length" class="flex flex-wrap gap-16 items-start h-full">
      <ApartmentCard @click.stop type="favorite" v-for="apartment in selectedApartment" :apartment="apartment"/>
    </div>
    <div v-else class="flex justify-center">
      <p class="text-[36px] text-black font-extrabold">Немає обраних</p>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "@/components/shared/ApartmentCard";
export default {
  name: "favorite",
  components: {ApartmentCard},
  layout: 'DefaultLayout',
  computed : {
    selectedApartment () {
      return this.$store.getters['flats/selectedList']
    }
  }
}
</script>

