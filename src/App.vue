<template>
  <div id="app">
    <nav>
      <!-- 라우터 링크로 페이지 이동 -->
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
    </nav>
    <!-- 페이지가 렌더링될 위치 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 네비게이션 스타일 */
nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
