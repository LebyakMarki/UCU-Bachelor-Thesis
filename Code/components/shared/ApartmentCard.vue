<template>
  <div @click="goToApartment" class="flex p-[16px] h-[280px] bg-gray-200 w-[700px] max-w-inherit cursor-pointer">
    <div class="flex h-[280px]">
      <img class="mr-[20px] h-[218px] w-[240px]" :src="image" alt="image">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <p v-if="type === 'shelter'" class="font-extrabold text-[24px]">Безкоштовно</p>
          <p v-else class="font-extrabold text-[24px]">{{ apartment.price }}грн</p>
          <div class="flex" :class="{'flex-col' : type === 'shelter'}">
            <el-tag class="mb-7 flex items-center justify-center" :class="{ 'mr-16' : type !== 'shelter' }" type="info">{{ apartment.rent_period }}</el-tag>
            <img @click.stop="removeFromSelected" v-if="type === 'favorite'" src="~/assets/icons/trash.svg" alt="trash" class="w-[35px] h-[35px]">
            <el-tag class="flex items-center justify-center" type="info" v-else-if="type === 'shelter' && apartment.accomodations">{{ apartment.accomodations }}</el-tag>
            <div v-if="type === 'list'">
              <img v-if="!ifSelectedApartment.length" @click.stop="selectApartment" class="h-[45px] w-[45px] cursor-pointer" src="~/assets/icons/Star.svg" alt="star">
              <img v-else @click.stop="removeFromSelected" class="h-[45px] w-[45px] cursor-pointer" src="~/assets/icons/Star_2.svg" alt="star">
            </div>
          </div>

        </div>
        <div class="flex flex-col">
          <div class="w-full">
            <p class="text-[24px] font-extrabold w-full">{{ apartment.address }}</p>
            <p class="text-[15px] text-[16px] font-bold">{{ apartment.city_region }}</p>
            <p class="font-extrabold text-[16px]">{{ apartment.rooms_num }} кімнати · {{ apartment.area }}м²  · поверх {{ apartment.floor }}</p>
            <p>{{ apartment.description.length > 90
                  ? apartment.description.slice(0,90) + '...'
                  : apartment.description  }}</p>
          </div>
          <div class="flex mt-[10px]">
            <el-popover>
              <template #reference>
                <el-button @click.stop class="ml-[5px]">Зателефонувати</el-button>
              </template>
              <template>
                <p v-if="type === 'shelter'" class="p-[10px]">{{ apartment.phone_number || apartment.owner.phone_number }}</p>
                <p v-else class="p-[10px]">{{ apartment.owner.phone_number }}</p>
              </template>
            </el-popover>
            <el-popover>
              <template #reference>
                <el-button @click.stop >Переглянути на карті</el-button>
              </template>
              <template>
                <div v-html="map[apartment.address]"></div>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flat_1 from "assets/images/flat-images/flat_1.jpg";
import flat_2 from "assets/images/flat-images/flat_2.jpg";
import flat_3 from "assets/images/flat-images/flat_3.jpg";
import flat_4 from "assets/images/flat-images/flat_4.jpg";
import shelter_1 from "assets/images/shelter-images/shelter_1.jpg"
import shelter_2 from "assets/images/shelter-images/shelter_2.jpg"
import shelter_3 from "assets/images/shelter-images/shelter_3.jpg"

export default {
  name: "ApartmentCard",
  data () {
    return {
      map: {
        'вул. Сельських, 7':'<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1EdiNlzmdw1ScxFCzs3MlBRYfuiQQZFZJ&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Євгена Коновальця, 23': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=14_-FOauUFd9P73d8ir4GnlyCEWyp-veW&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Івана Франка, 27': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=156Wiw8IBtlbcLDWb3xWBEv9V0fHgtXIp&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Героїв Упа, 73': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1sOTikf4oBtVcMTX9OIhOw-e0119cIUpy&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Миколи Пимоненка, 3': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Yg_LZUGm0rZtK4ocGrdvkHDdHfRUOZfR&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Куликівська, 18': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=19F34QiLZF78ye5N-AJRa4R3XLrbvTz_r&ehbc=2E312F" width="640" height="480"></iframe>',
        'вул. Гіпсова, 17': '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IIbUGEl4zMfXKIkUEWQTy8iaThhTMJBr&ehbc=2E312F" width="640" height="480"></iframe>'
      }
    }
  },
  props: {
    apartment: {
      type: Object,
      require: true
    },
    type: {
      type: String,
      default: 'list'
    },

  },
  computed: {
    image () {
      if (this.apartment) {
        if (this.apartment.id === '1') {
          return flat_1
        } else if (this.apartment.id === '2') {
          return flat_2
        } else if (this.apartment.id === '3') {
          return flat_3
        } else if (this.apartment.id === '4') {
          return flat_4
        } else if (this.apartment.id === '12') {
          return shelter_1
        } else if (this.apartment.id === '22') {
          return shelter_2
        } else if (this.apartment.id === '32') {
          return shelter_3
        }
      }
    },
    ifSelectedApartment () {
      return this.$store.getters['flats/selectedList'].filter(el => {
        return  el.id === this.apartment.id
      })
    },

  },
  methods: {
    selectApartment () {
      this.$store.commit('flats/addToSelected',this.apartment)
    },
    removeFromSelected () {
      this.$store.commit('flats/removeFromSelected',this.apartment.id)
    },
    goToApartment () {
      if (this.type !== 'shelter') {
        this.$router.push({ name : 'flat-id', params: {id : this.apartment.id}  })
      }
    }
  }
}
</script>
