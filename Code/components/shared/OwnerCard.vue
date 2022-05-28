<template>
  <div class="flex flex-col w-full mt-[20px] bg-gray-200 py-[16px] px-[20px]">
    <div class="flex pb-[15px]">
      <el-avatar class="mr-[15px]" :size="60" shape="square">Photo</el-avatar>
      <div>
        <div class="flex justify-between">
          <p class="text-[12px]">Власник</p>
          <p class="text-[12px]">Рейтинг {{ owner.rating }}/10</p>
        </div>
        <p class="text-[13px] font-bold">{{ owner.name }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center mt-[25px]">
      <p v-if="owner.tag === 'не перевірений'" class="text-red-600 font-bold mb-[16px]">Будьте обережні, не перевірений власник</p>
      <p v-if="owner.tag === 'шахрай'" class="text-red-600 font-bold mb-[16px]">Будьте обережні, власник шахрай</p>
      <el-popover>
        <template #reference>
          <el-button size="mini" class="w-[200px] ml-[5px]">Зателефонувати</el-button>
        </template>
        <template>
          <div class="p-[10px]">
            <p>{{ owner.phone_number }}</p>
          </div>
        </template>
      </el-popover>
      <el-popover v-model="chatVisible">
        <template #reference>
          <el-button size="mini" class="w-[200px] mt-5">Чат</el-button>
        </template>
        <template>
          <div class="w-[400px] h-[550px] flex flex-col justify-between">
            <div class="flex flex-col">
              <div class="flex bg-gray-300 h-[85px] py-[30px] px-[26px] justify-between items-center">
                <img
                  @click="chatVisible = false"
                  src="~/assets/icons/cancel.svg"
                  class="h-[24px] w-[24px] cursor-pointer"
                  alt="cancel"
                >
                <p class="text-[20px] font-bold">{{ owner.name }}</p>
              </div>
              <div class="flex py-[15px] px-[20px] bg-gray-400">
                <img :src="image" class="w-[95px] h-[90px] object-cover mr-[26px]" alt="image">
                <div>
                  <p class="text-[20px] font-bold">{{ apartment.address }}</p>
                  <p class="text-[20px] font-extrabold">{{ apartment.price }} грн</p>
                </div>
              </div>
            </div>
            <div class="flex px-[20px] mb-10">
              <el-input class="mr-[16px]" placeholder="Введіть повідомлення" v-model="value"/>
                <img src="~/assets/icons/send.svg" alt="send" class="cursor-pointer" @click="sendMessage"/>
            </div>

          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
import flat_1 from "assets/images/flat-images/flat_1.jpg";
import flat_2 from "assets/images/flat-images/flat_2.jpg";
import flat_3 from "assets/images/flat-images/flat_3.jpg";
import flat_4 from "assets/images/flat-images/flat_4.jpg";

export default {
  name: "OwnerCard",
  data () {
    return {
      chatVisible: false,
      value: ''
    }
  },
  props: {
    owner: {
      type: Object,
      require: true
    }
  },
  computed: {
    apartment() {
      return this.$store.getters['flatList'].filter(el => el.id === this.$route.params.id)[0];
    },
    image () {
      if (this.$route.params.id === '1') {
        return flat_1
      } else if (this.$route.params.id === '2') {
        return flat_2
      } else if (this.$route.params.id === '3') {
        return flat_3
      } else if (this.$route.params.id === '4') {
        return flat_4
      }
    },
  },
  methods: {
    sendMessage () {
      this.chatVisible = false
      this.value = ''
    }
  }
}
</script>

<style>
.el-popover {
  padding: 0 !important;
}
</style>

