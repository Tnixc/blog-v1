<template>
  <nav
    class="sticky top-0 left-0 right-0 flex items-center justify-between p-5"
  >
    <nuxt-link to="/">Home</nuxt-link>
    <div class="flex gap-1 bg-blue-500/10 rounded-lg border border-blue-400/30">
      <button class="aspect-square" @click="$colorMode.preference = 'system'">
        <svg
          class="fill-[currentColor] p-3 h-full aspect-square"
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
      <button class="aspect-square" @click="$colorMode.preference = 'light'">
        <svg
          class="fill-[currentColor] p-3 h-full aspect-square"
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
          class="fill-[currentColor] p-3 h-full aspect-square"
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
  </nav>
  <div class="flex justify-center pt-20">
    <div class="max-w-[70ch] w-fullp-10">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
const colorMode = useColorMode();

console.log(colorMode.preference);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
}
.dark body {
  @apply bg-neutral-900 text-white;
}
code,
code * {
  font-family: "Fira Code", monospace;
}

table {
  @apply min-w-full rounded-lg overflow-hidden;
  padding-top: 20rem;
}

table th,
table td {
  @apply p-2 border border-gray-200;
}

.dark table th,
.dark table td {
  @apply border-gray-700;
}

h1 {
  @apply text-4xl font-bold mb-4;
}

h2 {
  @apply text-3xl font-bold mb-3;
}

h3 {
  @apply text-2xl font-bold mb-2;
}

h4 {
  @apply text-xl font-bold mb-2;
}

h5 {
  @apply text-lg font-bold mb-2;
}

h6 {
  @apply text-base font-bold mb-2;
}

p {
  @apply leading-normal mb-4 opacity-70 leading-8;
}

ul {
  @apply list-disc ml-6 mb-4;
}

ol {
  @apply list-decimal ml-6 mb-4;
}

blockquote {
  @apply border-l-4 pl-4 italic;
}

em {
  @apply italic;
}

strong {
  @apply font-bold;
}
</style>
