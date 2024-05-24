<template>
  <div>
    <div style="height: 60px; background-color: #282c35; display: flex; align-items: center; border-bottom: 0px solid #ddd">
      <div style="flex: 1">
        <div style="padding-left: 20px; display: flex; align-items: center">
          <div style="font-weight: bold; font-size: 24px; margin-left: 5px;color: white">教务系统</div>
        </div>
      </div>
    </div>

    <div style="display: flex">
      <div style="width: 200px; border-right: 0px solid #ddd; min-height: calc(100vh - 60px);background-color: #333744">
        <el-menu
            router
            style="border: none"
            :default-active="$route.path"
            :default-openeds="['/home', '2', '3']"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#11A983"
        >
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>系统首页</span>
          </el-menu-item>

          <el-menu-item index="/course" v-if="user.role === 'ADMIN'">
            <el-icon><Document /></el-icon>
            <span>课程信息</span>
          </el-menu-item>

          <el-menu-item index="/courseList" v-if="user.role === 'STUDENT'">
            <el-icon><Document /></el-icon>
            <span>选择课程</span>
          </el-menu-item>

          <el-menu-item index="/studentCourse">
            <el-icon><Document /></el-icon>
            <span>选课信息</span>
          </el-menu-item>

          <el-menu-item index="/grade">
            <el-icon><Document /></el-icon>
            <span>成绩信息</span>
          </el-menu-item>

          <el-menu-item index="/student" v-if="user.role === 'ADMIN'">
            <el-icon><UserFilled /></el-icon>
            <span>用户信息</span>
          </el-menu-item>

          <el-menu-item index="/person" v-if="user.role === 'STUDENT'">
            <el-icon><User /></el-icon>
            <span>个人资料</span>
          </el-menu-item>

          <el-menu-item index="login" @click="logout">
            <el-icon><SwitchButton /></el-icon>
            <span>退出系统</span>
          </el-menu-item>

        </el-menu>
      </div>

      <div style="flex: 1; width: 0; background-color: #f8f8ff; padding: 10px">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const $route = useRoute()
const user = JSON.parse(localStorage.getItem('student-user') || '{}')

const logout = () => {
  localStorage.removeItem('student-user')
}
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: #282c35 !important;
}
.el-menu-item:hover {
  color: #11A983;
}
:deep(th)  {
  color: #333;
}
</style>
