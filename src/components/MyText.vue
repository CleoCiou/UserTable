<template>
  <input :id="info.id" 
        :class="info.class" 
        :type="info.type" v-model="info.value" 
        :placeholder="info.placeholder">
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