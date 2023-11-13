<template>
  <Nav />
  <div class="flex justify-center pt-10">
    <div class="max-w-[46rem] w-full p-10">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup></script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
  transition: 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
body {
  font-size: 18px;
}
hr {
  @apply border-zinc-300;
}
.dark hr {
  @apply border-zinc-600;
}
.dark body {
  @apply bg-neutral-900 text-white;
}
a {
  @apply underline text-blue-900 opacity-100;
}
.dark a {
  @apply underline text-blue-300;
}
code,
code * {
  font-family: "Fira Code", monospace;
}
pre {
  @apply bg-zinc-200 rounded-lg p-4 mb-8;
  overflow: auto;
  font-size: 14px;
}
.dark pre {
  @apply bg-zinc-800;
}
table {
  @apply min-w-full rounded-lg overflow-hidden py-5 pb-10;
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
  @apply text-4xl font-bold pb-2 pt-8;
}
h1 > a,
.dark h1 > a {
  @apply no-underline;
}

h2 {
  @apply text-3xl font-bold pb-2 pt-6 opacity-80;
}

h3 {
  @apply text-2xl font-bold pb-2 pt-5 opacity-80;
}

h4 {
  @apply text-xl font-bold pb-2 pt-3 opacity-80;
}

h5 {
  @apply text-lg font-bold pb-2 pt-3 opacity-80;
}

h6 {
  @apply text-base font-bold pb-2 pt-3 opacity-80;
}

p,
ul,
ol {
  @apply pb-4 leading-8 text-zinc-600;
}
.dark p,
.dark ul,
.dark ol {
  @apply py-4 leading-8 text-zinc-400;
}
ul,
ol {
  @apply m-0;
}
div > ul > li,
div > ol > li {
  @apply pb-2;
}
p code,
ul code,
ol code {
  @apply bg-zinc-200 rounded-lg p-0.5 px-2;
  font-size: 16px;
}
.dark p code,
.dark ul code,
.dark ol code {
  @apply bg-zinc-700;
}

ul {
  @apply list-disc ml-6 pb-4;
}

ol {
  @apply list-decimal ml-6 pb-4;
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
