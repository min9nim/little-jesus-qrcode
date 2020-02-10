<template>
  <section>
    <h1>어린이부 출석체크</h1>
    <input v-model="input" id="code" onkeyup="check()" @keydown="onlyNumber" @keyup.enter="check" />
    <div class="result">
      <ul>
        <li v-for="(item, idx) in list" :key="idx">{{item}}</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'index-page',
  data: () => {
    return {list: ['송민구', '송하니', ''], input: ''}
  },
  methods: {
    onlyNumber() {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false
      }
    },
    check() {
      console.log(33)
    },
  },
}
</script>
<style scoped>
.result {
  width: 400px;
  height: 600px;
}
</style>