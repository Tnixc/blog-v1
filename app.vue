<template>
  <Nav />
  <div class="fixed top-0 left-0 w-96 p-6 overflow-scroll">
    <Contents />
  </div>
  <div class="flex justify-center pt-10">
    <div class="max-w-[70ch] w-full p-10">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
* {
  transition: 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
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
pre {
  @apply bg-zinc-200 rounded-lg p-4;
}
.dark pre {
  @apply bg-zinc-800;
}
table {
  @apply min-w-full rounded-lg overflow-hidden my-5 mb-10;
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
  @apply text-4xl font-bold mb-4 mt-8;
}

h2 {
  @apply text-3xl font-bold mb-3 mt-6;
}

h3 {
  @apply text-2xl font-bold mb-2 mt-4;
}

h4 {
  @apply text-xl font-bold mb-2 mt-2;
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
