<template>
  <select :id="info.id" :class="info.class" v-model="info.value">
    <option value="" disabled>{{ this.info.placeholder }}</option>
    <option v-for="option in info.optionArr">{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: ['component'],
  data() {
    return {
      info: this.component
    }
  }
}
</script>