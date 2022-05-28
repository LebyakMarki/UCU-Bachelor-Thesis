<template>
  <div class="flex flex-col bg-gray-200 py-[20px] px-[45px] mt-[20px]">
    <h2 class="text-[16px] font-bold">Відгуки</h2>
    <div class="flex items-center bg-gray-700 py-[10px] px-[7px]">
      <p class="mr-5 text-[10px] font-bold text-white mr-[16px]">{{ reviews[0].name }}</p>
      <p class="text-white text-[10px] font-light">{{ reviews[0].review }}</p>
    </div>
    <el-popover v-model="visible" trigger="click">
      <template #reference>
        <el-button class="mt-[10px] w-full" type="warning">Повідомити про шахрайство</el-button>
      </template>
      <template #default>
        <div class="flex flex-col items-center w-[400px] min-h-[280px] p-[10px]">
          <el-tag type="info">Повідомити про шахрайство</el-tag>
          <el-input type="textarea" :rows="6" class="mt-10 mb-10 h-[150px]" v-model="value" placeholder="Опишіть що трапилося"/>
          <el-button :disabled="!!!value" @click="sendMessage">Повідомити</el-button>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "ReviewsCard",
  props: {
    reviews: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      visible: false,
      value: ''
    }
  },
  methods: {
    sendMessage () {
      this.visible = false
      this.value = ''
    }
  }
}
</script>

<style scoped>

</style>
