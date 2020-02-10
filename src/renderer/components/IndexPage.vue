<template>
  <main>
    <section>
      <div class="title">
        <h1>어린이부 출석체크({{today}})</h1>
      </div>
      <input ref="input" class="input" v-model="input" id="code" @keyup.enter="check" />
      <div class="result">
        <div class="item" v-for="(item, idx) in list" :key="idx">
          <div class="name">{{item.name}}</div>-
          <span>{{item.time}}</span>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import {codeMap} from '../../biz/codeMap'
import moment from 'moment'
import Swal from 'sweetalert2'

export default {
  name: 'index-page',
  data: () => {
    return {
      list: [{name: '송하니', time: '12:12:12'}],
      input: '',
      today: moment().format('YYYY-MM-DD'),
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    // onlyNumber() {
    //   if (event.keyCode < 48 || event.keyCode > 57) {
    //     event.returnValue = false
    //   }
    // },
    check() {
      const name = codeMap[this.input]
      if (!name) {
        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: 'The name of code is not founddwd',
          showConfirmButton: true,
          timer: 3000,
        })
        this.input = ''
        return
      }
      this.list = [{name, time: moment().format('HH:mm:ss')}, ...this.list]
      this.input = ''
      Swal.fire({
        icon: 'success',
        title: 'Welcome ' + name + ':)',
        text: '출석체크 완료~*',
        showConfirmButton: true,
        timer: 3000,
      })
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
    .item {
      margin-bottom: 10px;
      .name {
        display: inline-block;
        width: 100px;
        font-size: 20px;
        font-weight: bold;
        color: #555;
      }
    }
  }
}
</style>