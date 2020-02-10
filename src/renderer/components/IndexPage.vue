<template>
  <main>
    <section>
      <div class="title">
        <h1>어린이부 출석체크</h1>
      </div>
      <input class="input" v-model="input" id="code" onkeyup="check()" @keyup.enter="check" />
      <div class="result">
        <h2 v-for="(item, idx) in list" :key="idx">{{item}}</h2>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'index-page',
  data: () => {
    return {list: [], input: ''}
  },
  methods: {
    // onlyNumber() {
    //   if (event.keyCode < 48 || event.keyCode > 57) {
    //     event.returnValue = false
    //   }
    // },
    check() {
      this.list.push(this.input)
      this.input = ''
    },
  },
}
</script>
<style lang="scss" scoped>
main {
  padding: 20px;
  .title {
    margin-bottom: 20px;
  }
  .input {
    width: 200px;
    height: 30px;
  }
  .result {
    width: 400px;
    height: 500px;
    margin-top: 20px;
  }
}
</style>