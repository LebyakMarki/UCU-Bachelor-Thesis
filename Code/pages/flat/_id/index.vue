<template>
  <div class="gap-24 flex flex-col justify-center items-center lg:flex-row">
    <div class="flex flex-col h-full w-8/12">
      <img class="w-[575px] h-[268px] object-cover" :src="image" alt="flat image">
      <p class="pt-[20px] max-w-[575px] text-[18px] font-medium">{{ description }}
        <span @click="shortDescription = !shortDescription" class="cursor-pointer text-gray-300 hover:text-current" v-if="shortDescription">...</span>
      </p>
      <div class="flex justify-center">
        <el-tag type="info" class="flex w-1/3 justify-center my-[12px]">Вас також може зацікавити</el-tag>
      </div>
      <el-carousel
        :interval="5000"
        indicator-position="outside"
        class="min-w-[700px]"
        height="280px"
      >
        <el-carousel-item v-for="apartment in randomFlat" :key="apartment.id">
          <ApartmentCard  :apartment="apartment"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="h-full flex flex-col justify-start w-5/12">
      <p class="text-[30px] font-bold">{{ apartment.address }}</p>
      <p class="text-[24px] font-bold">{{ apartment.city_region }}</p>
      <p class="text-[24px] font-bold">{{ apartment.rooms_num }} кімнати · {{ apartment.area }}м²  · поверх {{ apartment.floor }}</p>
      <div class="flex gap-8 mt-8">
        <el-tag type="info">{{ apartment.rent_period }}</el-tag>
        <el-tag :type="apartment.owner.tag === 'шахрай' ? 'danger' : 'info'">{{ apartment.owner.tag }}</el-tag>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-[36px] font-extrabold">{{ apartment.price }} грн</p>
        <img v-if="!ifSelectedApartment.length" @click="selectApartment" class="h-[45px] w-[45px] cursor-pointer" src="~/assets/icons/Star.svg" alt="star">
        <img v-else @click="removeFromSelected" class="h-[45px] w-[45px] cursor-pointer" src="~/assets/icons/Star_2.svg" alt="star">
      </div>
      <el-popover>
        <template #reference>
          <el-button>Забронювати огляд</el-button>
        </template>
        <template>
          <div class="p-10">
            <el-form class="flex flex-col items-center px-20" :model="form">
              <el-form-item label="Ім'я та прізвище">
                <el-input placeholder="ПІБ" v-model="form.name" />
              </el-form-item>
              <el-form-item label="Номер телефону">
                <el-input v-model="form.number" type="number"/>
              </el-form-item>
              <el-form-item>
                <el-date-picker style="width: 100%" v-model="form.date" type="date"/>
              </el-form-item>
              <el-button @click="confirm" type="submit">Забронювати зустріч</el-button>
            </el-form>
          </div>
        </template>
      </el-popover>
      <OwnerCard :owner="apartment.owner"/>
      <ReviewsCard :reviews="apartment.owner.reviews"/>
    </div>
  </div>
</template>

<script>
import flat_1 from '~/assets/images/flat-images/flat_1.jpg'
import flat_2 from '~/assets/images/flat-images/flat_2.jpg'
import flat_3 from '~/assets/images/flat-images/flat_3.jpg'
import flat_4 from '~/assets/images/flat-images/flat_4.jpg'
import ApartmentCard from "@/components/shared/ApartmentCard";
import OwnerCard from "@/components/shared/OwnerCard";
import ReviewsCard from "@/components/shared/ReviewsCard";
import { MessageBox } from 'element-ui';
export default {
  name: "FlatEntity",
  components: {ReviewsCard, OwnerCard, ApartmentCard, MessageBox},
  layout: 'DefaultLayout',
  data () {
    return {
      shortDescription: true,
      form: {
        name: '',
        number: '',
        date: ''
      }
    }
  },
  computed: {
    randomFlat () {
      return this.$store.getters['flatList'].filter(el => el.id !== this.$route.params.id )
    },
    apartment () {
      return this.$store.getters['flatList'].filter(el => el.id === this.$route.params.id)[0]
    },
    ifSelectedApartment () {
      return this.$store.getters['flats/selectedList'].filter(el => {
        return  el.id === this.$route.params.id
      })
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
    description () {
      const description = this.apartment.description
      if(description.length < 200) { return description }
      if (this.shortDescription) {
        return description.slice(0,200)
      } else {
        return description
      }
    }
  },
  methods: {
    selectApartment () {
      this.$store.commit('flats/addToSelected',this.apartment)
    },
    removeFromSelected () {
      this.$store.commit('flats/removeFromSelected',this.$route.params.id)
    },
    confirm () {
      console.log(new Date(this.form.date).getDay())
      MessageBox.alert('Чудово! Ви забронювали огляд квартири. У найближчому часі власник зв’яжеться з вами і узгодить годину.Додатково, ви можете зв’язатися з власником через дзвінок чи наш чат.',{
        confirmButtonText: 'Ок',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            console.log('confirm')
            this.$notify({
              title: 'Вітаю!',
              type : 'success',
              message: 'Вітаю ви успішно забронювали огляд!'
            });
            done();
          } else if (action === 'cancel') {
            console.log('cancel')
            done();
          }
        },
        type: 'success'
      })
    }
  }

}
</script>

