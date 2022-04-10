<template>
  <table class="users">
    <caption>使用者資料</caption>
    <tr class="field-name">
      <th>NAME</th>
      <th>CITY</th>
    </tr>
    <tr :class="( (idx-1) === getSelectIdx) ? 'user-info active': 'user-info'"
        v-for="idx in userList.length"
        @click.capture.stop="setSelected(idx-1)">
      <td>{{ userList[idx-1].name }} </td>
      <td>{{ userList[idx-1].city }} </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['userList', 'getSelected'],
  data() {
    return {
      selectedIdx: this.getSelected
    }
  },
  methods: {
    setSelected(idx) {
      this.selectedIdx = idx;
      this.$emit('set-selected', this.selectedIdx);
    }
  },
  computed: {
    getSelectIdx() {
      return this.selectedIdx;
    }
  },
  watch: {
    getSelected(newValue) {
      this.selectedIdx = newValue;
    }
  }
}
</script>

<style lang="scss" scoped>
  .users, td, th {
    border: 1px solid #000;
  }
  .users {
    margin: auto;
    margin-bottom: 1em;
    border-collapse: collapse;

    th, td {
      padding: 0.3em 1em;
    }

    .user-info {
      cursor: pointer;
      transition: .5s;

      &:not(.active):hover {
        background-color: #888;
        color: #eee;
      }
    }
  }
</style>