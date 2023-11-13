<template>
  <ContentDoc>
    <template #not-found>
      <h1 class="fixed left-1/2 -translate-x-1/2 top-[10rem]">404 - You're Lost</h1>
      <h1><nuxt-link to="/" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 border-blue-400 border-2 p-5 rounded-full bg-gradient-to-tr from-blue-300/20 to-indigo-500/40 shadow-xl hover:shadow-md">◀ Go Home</nuxt-link></h1>
    </template>
  </ContentDoc>
</template>
