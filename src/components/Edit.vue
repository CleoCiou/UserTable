<template>
  <section class="edit">
    <my-component :component="userName" />
    <my-component :component="citys" />
    <button class="add" @click="addUser">add</button>
    <button class="update" @click="updateUser">update</button>
    <button class="delete" @click="deleteUser">delete</button>
    <div>
      <my-component :component="thumb" />
    </div>
  </section>
</template>

<script>
import { v4 } from 'uuid';
import MyComponent from '../components/MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  props: ['selectedData'],
  data() {
    return {
      id: '',
      citys: {
        type: 'select',
        class: 'userName',
        optionArr: ['London', 'Madrid', 'Paris', 'Alabama'],
        placeholder: 'Select Citys',
        value: ''
      },
      userName: {
        type: 'text',
        placeholder: 'Please Enter Name..',
        value: ''
      },
      thumb: {
        type: 'radio',
        class: 'rate',
        placeholder: 'Rate This Test: ',
        value: 'pass',
        optionObj: [
          {id: 'pass', value: 'pass', innerText: 'Pass'},
          {id: 'fail', value: 'fail', innerText: 'Fail'}
        ],
        name: 'rate'
      }
    }
  },
  methods: {
    // TODO update user when click update after select user
    // select user data will be passed from User which passed from UserTable component
    // textbox value and select value must not empty
    updateUser() {
      if (!this.userName.value || !this.citys.value) return;
      const info = {
        id: this.id,
        name: this.userName.value,
        city: this.citys.value
      }
      this.$emit('update-user', info);
    },
    // TODO add user when click add btn
    // textbox value and select value must not empty
    addUser() {
      if (!this.userName.value || !this.citys.value) return;
      const info = {
        id: v4(),
        name: this.userName.value,
        city: this.citys.value
      }
      this.$emit('add-user', info);
    },
    // TODO delete user when click delete btn after select user
    deleteUser() {
      if (!this.selectedData) return
      this.$emit('delete-user', this.id);
    }
  },
  watch: {
    // TODO update textbox(userName) and select(city) when click different user
    selectedData() {
      const {id, name, city} = this.selectedData;
      this.id = id;
      this.userName.value = name;
      this.citys.value = city;
    }
  }
}
</script>

<style lang="scss" scoped>
  .edit {
    text-align: center;
  }
  .rate {
    margin-top: 1em;
  }
</style>