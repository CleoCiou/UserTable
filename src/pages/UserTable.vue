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
    setSelectIdx(idx) {
      this.selectedIdx = idx;
    },
    userHandler(updateUser) {
      // 刪除使用者
      if (typeof updateUser === 'string') {
        this.userList = this.userList.filter( user => user.id !== updateUser );
        this.selectedIdx = -1;
        return
      }
      // 新增 | 修改
      const user = this.userList.filter( user => user.id !== updateUser.id );
      this.userList = [updateUser, ...user];
      this.selectedIdx = 0;
    }
  },
  computed: {
    selectedData() {
      if (this.selectedIdx === -1) return false
      return this.userList[this.selectedIdx];
    },
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