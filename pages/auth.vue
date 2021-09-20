<template>
  <div class="w-screen">
    <div class="bg-green-300 h-20 pt-5 flex">
         <div class="inner w-1/3 space-x-6">
            <button text to="#" class="rounded-3xl bg-green-400 px-5">Vue Screens </button>
            <button text to="#" class="">ADMIN</button>
        </div>

      <div class="w-1/3" v-if="$auth.loggedIn">
         {{ $auth.user.email }}
         <v-btn text>LOGOUT</v-btn>
      </div>

      <div v-else class="space-x-3 w-1/3 ">
        <v-btn class=" " text to="/signin">LOG IN</v-btn>
        <v-btn text to="/register">REGISTER</v-btn>
      </div>
    </div>
  </div>
</template>
