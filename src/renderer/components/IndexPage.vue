<template>
  <section>
    <h1>어린이부 출석체크</h1>
    <input id="code" onkeyup="check()" onkeydown="onlyNumber()" />
    <div class="result"></div>
  </section>
</template>
<script>
export default {
  name: 'index-page',

  data: () => {
    return {
      list: ['송민구', '송하니', ''],
    }
  },
}
</script>
<style scoped>
.result {
  width: 400px;
  height: 600px;
}
</style>