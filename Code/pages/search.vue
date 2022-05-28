<template>
  <div class="flex">
    <div class="w-6/12">
      <div class="w-[700px] mr-10 bg-gray-200 h-[170px] p-[16px]">
        <div class="flex justify-between">
          <el-form :model="form">
            <el-select class="w-[300px]" v-model="form.city" placeholder="Select">
              <el-option
                v-for="item in [{value: 'Львів',label: 'Львів'}]"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form>

          <div>
            <el-popover>
              <template #reference>
                <el-button class="w-[165px]">Ціна</el-button>
              </template>
              <template>
                <div class="flex flex-col justify-center w-[350px] h-[160px] p-[10px]" >
                  <p class="text-[20px] font-extrabold mb-[10px]">Ціна у грн</p>
                  <div class="flex">
                    <el-input placeholder="від" class="border h-[20px]" v-model="form.fromPrice" type="number"></el-input>
                    <el-input placeholder="до" class="border h-[20px]" v-model="form.toPrice" type="number"></el-input>
                  </div>
                  <el-button class="mt-[30px]" @click="filterPrice">Застосувати</el-button>
                </div>
              </template>
            </el-popover>

            <el-popover>
              <template #reference>
                <el-button class="w-[165px]">Площа</el-button>
              </template>
              <template>
                <div class="flex flex-col justify-center w-[350px] h-[160px] p-[10px]" >
                  <p class="text-[20px] font-extrabold mb-[10px]">Загальна площа, м²</p>
                  <div class="flex">
                    <el-input placeholder="від" class="border h-[20px]" v-model="form.fromSquare" type="number"></el-input>
                    <el-input placeholder="до" class="border h-[20px]" v-model="form.toSquare" type="number"></el-input>
                  </div>
                  <el-button class="mt-[30px]" @click="filterSquare">Застосувати</el-button>
                </div>
              </template>
            </el-popover>
          </div>
        </div>

        <el-popover>
          <template #reference>
            <el-button>Поверх</el-button>
          </template>
          <template>
            <div class="flex flex-col justify-center w-[350px] h-[160px] p-[10px]" >
              <p class="text-[20px] font-extrabold mb-[10px]">Поверх</p>
              <div class="flex">
                <el-input placeholder="від" class="border h-[20px]" v-model="form.fromFloor" type="number"></el-input>
                <el-input placeholder="до" class="border h-[20px]" v-model="form.toFloor" type="number"></el-input>
              </div>
              <el-button class="mt-[30px]" @click="filterFloor">Застосувати</el-button>
            </div>
          </template>
        </el-popover>

        <el-popover >
          <template #reference>
            <el-button>Кімнати</el-button>
          </template>
          <template>
            <div class="flex flex-col justify-center w-[350px] h-[160px] p-[10px]" >
              <p class="text-[20px] font-extrabold mb-[10px]">Кількість кімнат</p>
              <div class="flex">
                <el-checkbox-group v-model="form.roomCount">
                  <el-checkbox value="1" label="1"></el-checkbox>
                  <el-checkbox value="2" label="3"></el-checkbox>
                  <el-checkbox value="3" label="2"></el-checkbox>
                  <el-checkbox value="4+" label="4+"></el-checkbox>
                </el-checkbox-group>
              </div>
              <el-button class="mt-[30px]" @click="filterRooms">Застосувати</el-button>
            </div>
          </template>
        </el-popover>
        <el-popover >
          <template #reference>
            <el-button>Термін</el-button>
          </template>
          <template>
            <div class="flex flex-col justify-center w-[350px] h-[160px] p-[10px]" >
              <p class="text-[20px] font-extrabold mb-[10px]">Термін оренди</p>
              <div class="flex">
                <el-checkbox-group v-model="form.term">
                  <el-checkbox value="подобова" label="подобова"></el-checkbox>
                  <el-checkbox value="довготривала" label="довготривала"></el-checkbox>
                </el-checkbox-group>
              </div>
              <el-button class="mt-[30px]" @click="filterTerm">Застосувати</el-button>
            </div>
          </template>
        </el-popover>
        <el-popover >
          <template #reference>
            <el-button>Розширені</el-button>
          </template>
          <template>
            <div class="flex flex-col justify-center w-[350px] h-[200px] p-[10px]" >
              <p class="text-[20px] font-extrabold mb-[10px]">Розширені параметри</p>
              <div class="flex">
                <el-checkbox-group v-model="form.others">
                  <el-checkbox value="біля_садочку" label="Поруч садок"></el-checkbox>
                  <el-checkbox value="центр_міста" label="Центр міста"></el-checkbox>
                  <el-checkbox value="біля_школи" label="Поруч школа"></el-checkbox>
                  <el-checkbox value="тихий_район" label="Тихий район"></el-checkbox>
                  <el-checkbox value="транспорт" label="Поруч міський транспорт"></el-checkbox>
                </el-checkbox-group>
              </div>
              <el-button class="mt-[30px]" @click="filterOther">Застосувати</el-button>
            </div>
          </template>
        </el-popover>
        <el-button type="danger" @click="reset">Скинути параметри</el-button>
      </div>
      <div>
        <ApartmentCard :apartment="apartment" v-for="apartment in sorted"></ApartmentCard>
      </div>
    </div>
    <div class="gmap_canvas w-6/12">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10VLzHQ2YH4RpoHAfg1SfG0ap-6Bldnag&ehbc=2E312F" width="700" height="900"></iframe>
    </div>
  </div>

</template>

<script>
import ApartmentCard from "@/components/shared/ApartmentCard";
export default {
  name: "search",
  components: {ApartmentCard},
  layout: 'DefaultLayout',
  data () {
    return {
      form: {
        city: '',
        fromPrice: null,
        toPrice: null,
        fromSquare: null,
        toSquare: null,
        fromFloor: null,
        toFloor: null,
        roomCount: [],
        term: [],
        others: []
      },
      apartaments: [],
      sorted : []
    }
  },
  beforeMount () {
    this.sorted = this.$store.getters['flats/flatList']
    this.apartaments = this.$store.getters['flats/flatList']
  },
  methods: {
    filterPrice () {
      const arr = []
      this.apartaments.map(el => {
        if (this.form.fromPrice || this.form.toPrice) {
          if (el.price >= this.form.fromPrice
            && el.price <= this.form.toPrice) {
            arr.push(el)
          }
        } else {
          arr.push(el)
        }
      })
      this.sorted = arr
      this.apartaments = arr
    },
    filterSquare () {
      const arr = []
      this.apartaments.map(el => {
        if (this.form.fromSquare || this.form.toSquare) {
          if (el.area >= this.form.fromSquare
            && el.area <= this.form.toSquare) {
            arr.push(el)
          }
        } else {
          arr.push(el)
        }
      })
      this.sorted = arr
      this.apartaments = arr
    },
    filterFloor () {
      const arr = []
      this.apartaments.map(el => {
        if (this.form.fromFloor || this.form.toFloor) {
          if (el.floor >= this.form.fromFloor
            && el.floor <= this.form.toFloor) {
            arr.push(el)
          }
        } else {
          arr.push(el)
        }
      })
      this.sorted = arr
      this.apartaments = arr
    },
    filterRooms () {
      const arr = []
      if (this.form.roomCount.length) {
        this.apartaments.map(el => {
          if (this.form.roomCount.includes(el.rooms_num)) {
            arr.push(el)
          }
        })
      } else {
        return
      }
      this.sorted = arr
      this.apartaments = arr
    },
    filterTerm () {
      const arr = []
      if (this.form.term.length) {
        this.apartaments.map(el => {
          if (this.form.term.includes(el.rent_period)) {
            arr.push(el)
          }
        })
      } else {
        return
      }
      this.sorted = arr
      this.apartaments = arr
    },
    filterOther () {
      const arr = {}
      this.form.others.forEach(el => {
        this.apartaments.forEach(elem => {
          if(elem.tags.toString().includes(el)) {
            arr[elem.id] = elem
          }
        })
      })
      this.sorted = Object.values(arr)
      this.apartaments = Object.values(arr)
    },
    reset () {
      this.apartaments = this.$store.getters['flats/flatList']
      this.sorted = this.apartaments
      this.form = {
        city: '',
        fromPrice: null,
        toPrice: null,
        fromSquare: null,
        toSquare: null,
        fromFloor: null,
        toFloor: null,
        roomCount: [],
        term: [],
        others: []
      }
    }
  },
}
</script>

