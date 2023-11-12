<template>
  <nav
    class="sticky top-0 left-0 right-0 flex items-center justify-end p-6 z-50"
  >
    <nuxt-link
      to="/"
      class="aspect-square rounded-lg shadow-lg border border-gray-400/30 bg-gray-500/10 ml-0 mr-auto"
      ><svg
        class="w-12 p-2"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path
          d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
        ></path></svg
    ></nuxt-link>
    <div class="flex gap-6 backdrop-blur-lg rounded-xl">
      <div
        class="flex bg-gray-500/10 rounded-[9px] border border-gray-400/30 gap-2 shadow-lg"
      >
        <div class="flex relative">
          <div
            id="font"
            class="absolute left-0 top-0 w-1/2 h-full rounded-lg -z-10"
          ></div>
          <button class="aspect-square w-12 font-sans" id="serif" @click="sans">
            Aa
          </button>
          <button
            class="aspect-square w-12 font-serif"
            id="sans"
            @click="serif"
          >
            Aa
          </button>
        </div>
      </div>
      <div
        class="flex bg-gray-500/10 rounded-[9px] border border-gray-400/30 gap-2 shadow-lg"
      >
        <button
          class="aspect-square border-r rounded-lg border-gray-400/30 bg-gray-500/10 shadow-md"
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
          <button
            class="aspect-square"
            @click="$colorMode.preference = 'light'"
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
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    serif() {
      console.log("serif");
      document.documentElement.classList.add("serif");
      document.documentElement.classList.remove("sans");
    },
    sans() {
      console.log("sans");
      document.documentElement.classList.add("sans");
      document.documentElement.classList.remove("serif");
    },
  },
};
</script>
<style>
.serif body {
  font-family: "IBM Plex Serif", serif !important;
}
.sans body {
  @apply font-sans !important;
}
</style>
<style scoped>
#sel,
#font {
  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.075);
}

.sans #font {
  transform: translateX(0%);
}
.serif #font {
  transform: translateX(100%);
}
.light #font {
  @apply bg-gray-200;
}
.dark #font {
  @apply bg-neutral-700;
}
.light #sel {
  transform: translateX(0%);
  @apply bg-gray-200;
}
.dark #sel {
  transform: translateX(100%);
  @apply bg-neutral-700;
}
</style>
