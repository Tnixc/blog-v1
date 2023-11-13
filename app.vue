<template>
  <Nav />
  <div class="flex justify-center pt-10">
    <div class="w-full max-w-[46rem] p-10">
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
  @apply text-blue-900 underline opacity-100;
}
.dark a {
  @apply text-blue-300 underline;
}
code,
code * {
  font-family: "Fira Code", monospace;
}
pre {
  @apply mb-8 rounded-lg bg-zinc-200 p-4;
  overflow: auto;
  font-size: 14px;
}
.dark pre {
  @apply bg-zinc-800;
}
table {
  @apply min-w-full overflow-hidden rounded-lg py-5 pb-10;
}
table th,
table td {
  @apply border border-gray-200 p-2;
}

.dark table th,
.dark table td {
  @apply border-gray-700;
}

h1 {
  @apply pb-2 pt-8 text-4xl font-bold;
}
h1 > a,
.dark h1 > a {
  @apply no-underline;
}

h2 {
  @apply pb-2 pt-6 text-3xl font-bold opacity-80;
}

h3 {
  @apply pb-2 pt-5 text-2xl font-bold opacity-80;
}

h4 {
  @apply pb-2 pt-3 text-xl font-bold opacity-80;
}

h5 {
  @apply pb-2 pt-3 text-lg font-bold opacity-80;
}

h6 {
  @apply pb-2 pt-3 text-base font-bold opacity-80;
}

p,
ul,
ol {
  @apply pb-4 leading-8 text-zinc-600;
}
.dark p,
.dark ul,
.dark ol {
  @apply pb-4 leading-8 text-zinc-400;
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
  @apply rounded-lg bg-zinc-200 p-0.5 px-2;
  font-size: 16px;
}
.dark p code,
.dark ul code,
.dark ol code {
  @apply bg-zinc-700;
}

ul {
  @apply ml-6 list-disc pb-4;
}

ol {
  @apply ml-6 list-decimal pb-4;
}

blockquote {
  @apply mb-4 mt-4 rounded-r-lg border-l-4 bg-slate-500/10 pl-4 pt-4 italic;
}
img {
  @apply rounded-lg shadow-md;
}
em {
  @apply italic;
}

strong {
  @apply font-bold;
}
</style>
