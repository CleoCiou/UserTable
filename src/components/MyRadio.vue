<template>
  <div :id="info.id" :class="info.class">
      {{ this.info.placeholder }}
      <label v-for="{id, value, innerText} in info.optionObj">
        <input :type="info.type" :name="info.name" v-model="info.value" :value="value" :id="id">
        {{ innerText }}
      </label>
  </div>
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