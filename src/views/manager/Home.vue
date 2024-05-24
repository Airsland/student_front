<template>
  <div>
    <div class="card" style="line-height: 30px">
      <div>欢迎<span style="color: dodgerblue;">{{ user.name }}</span>登录教务系统</div>
      <el-calendar v-model="value">
      </el-calendar>
    </div>
  </div>
</template>

<script setup>
  import request from "@/utils/request";
  const user = JSON.parse(localStorage.getItem('student-user') || '{}')
</script>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>