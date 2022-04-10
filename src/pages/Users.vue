<script>
import { v4 } from 'uuid';
import $ from 'jquery';
window.$ =$;

// components
import Edit from '../components/Edit.vue';
import UserTable from '../components/UserTable.vue';

export default {
  mounted() {
    // TODO get user data from fake api
    fetchAPI: {
      const API_HOST = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';

      fetch(API_HOST)
      .then( res => res.json() )
      .then( res => { res.map( info => {
          this.userList.push({id: v4(), ...info}) 
        });
      });
    }
  },
  data() {
    return {
      userList: [],
      selectedIdx: -1
    }
  },
  methods: {
    // TODO catch selected user data from UserTable component
    setSelectIdx(idx) {
      this.selectedIdx = idx;
    },
    // TODO catch action from Edit component
    // add | update | delete user
    userHandler(updateUser) {
      // delete user
      if (typeof updateUser === 'string') {
        this.userList = this.userList.filter( user => user.id !== updateUser );
        this.selectedIdx = -1;
        return
      }
      // add | update user
      const user = this.userList.filter( user => user.id !== updateUser.id );
      this.userList = [updateUser, ...user];
      this.selectedIdx = 0;
    }
  },
  computed: {
    // TODO pass selected user data to Edit component
    selectedData() {
      if (this.selectedIdx === -1) return false
      return this.userList[this.selectedIdx];
    },
    // TODO pass userList to UserTable component
    getUserList() {
      return this.userList;
    }
  },
  components: {
    UserTable,
    Edit
  }
}
</script>

<template>
  <div class="page">
    <UserTable @set-selected="setSelectIdx"
              :user-list="getUserList" 
              :get-selected="selectedIdx"></UserTable>
    <Edit @update-user="userHandler"
          @add-user="userHandler"
          @delete-user="userHandler"
          :selected-data="selectedData"></Edit>
  </div>
</template>