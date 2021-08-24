<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
    <div class="w-full relative max-w-lg">
      <div
        class="absolute left-20 filter opacity-70  blur-xl mix-blend-multiply -bottom-12 w-72 h-72 bg-purple-300 rounded-full"
      ></div>
      <div
        class="absolute top-0 filter opacity-70 blur-xl -right-4 mix-blend-multiply w-72 h-72 bg-yellow-300 rounded-full animate-blob"
      ></div>
      <div
        class="absolute top-0 filter opacity-70 blur-xl -left-4 mix-blend-multiply w-72 h-72 bg-green-300 rounded-full"
      ></div>
      <div class="m-8 relative opacity- space-y-4">
        <div
          class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
        >
          <div class="h-4 w-48 bg-gray-300 rounded"></div>
          <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
        <div
          class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
        >
          <div class="h-4 w-48 bg-gray-300 rounded"></div>
          <div class="w-12 h-6 rounded-lg bg-red-300"></div>
        </div>
        <div
          class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
        >
          <div class="h-4 w-48 bg-gray-300 rounded"></div>
          <div class="w-28 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>