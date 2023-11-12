<template>
  <nav
class="sticky top-0 left-0 right-0 flex items-center justify-between p-5"
>
<nuxt-link to="/" class="p-2 text-xl"> Index </nuxt-link>
<div
  class="flex bg-blue-500/10 rounded-[9px] border border-blue-400/30 gap-2"
>
  <button
    class="aspect-square border-r rounded-lg border-blue-400/30 bg-blue-500/10 shadow-md"
    @click="$colorMode.preference = 'system'"
  >
    <svg
      class="fill-[currentColor] py-3 h-full aspect-square"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <path
        d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
      ></path>
    </svg>
  </button>
  <div class="flex relative">
    <div
      id="sel"
      class="absolute left-0 top-0 w-1/2 h-full rounded-lg -z-10"
    ></div>
    <button class="aspect-square" @click="$colorMode.preference = 'light'">
      <svg
        class="fill-[currentColor] py-3 h-full aspect-square"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path
          d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
        ></path>
      </svg>
    </button>
    <button class="aspect-square" @click="$colorMode.preference = 'dark'">
      <svg
        class="fill-[currentColor] py-3 h-full aspect-square"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path
          d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"
        ></path>
      </svg>
    </button>
  </div>
</div>
</nav>
</template>
<style scoped>
#sel {
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.075);
}

.light #sel {
  transform: translateX(0%);
  @apply bg-slate-200;
}
.dark #sel {
  transform: translateX(100%);
  @apply bg-slate-800;
}
</style>