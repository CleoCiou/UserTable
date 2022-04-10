<template>
  <MySelect v-if="getComponent === 'select'" :component="component" @update-value="updateValue"  />
  <MyRadio v-else-if="getComponent === 'radio'" :component="component" @update-value="updateValue"  />
  <MyText v-else-if="getComponent === 'text'" :component="component" @update-value="updateValue" />
  <p v-else style="color: red">error</p>
</template>

<script>
import MySelect from './MySelect';
import MyRadio from './MyRadio';
import MyText from './MyText';

export default {
  props: {
    component: {
      type: Object,
      default: function() {
        return {
          // -- common
          type: 'text',
          // MyText: id for input tag
          // MyRadio: id for outer div
          // MySelet: id for select tag
          id: '',
          class: '',
          // input:text will be placeholder
          // select | radio will be innerText
          placeholder: '',
          // default value
          value: '',
          // -- select | radio
          // innerText same with value
          optionArr: [],
          // [{ id: '', value: 'innerText' }]
          optionObj: [],
          // -- radio
          // radio group
          name: ''
        }
      }
    }
  },
  methods: {
    updateValue(newComponent) {
      this.component = newComponent;
    }
  },
  computed: {
    getComponent() {
      return this.component.type;
    }
  },
  components: {
    MySelect,
    MyRadio,
    MyText
  }
}
</script>

<style>

</style>