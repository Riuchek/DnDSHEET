<script setup lang="ts">
  interface LoginResponse {
    success: boolean
    user: {
      id: number
      username: string
    }
  }
  
  const username = ref('')
  const password = ref('')
  const error = ref('')
  const loading = ref(false)
  
  const handleLogin = async () => {
    try {
      loading.value = true
      error.value = ''
      
      const response = await $fetch<LoginResponse>('/api/auth/login', {
        method: 'POST',
        body: {
          username: username.value,
          password: password.value
        }
      })
  
      if (response.success) {
        navigateTo('/ficha')
      }
    } catch (e: any) {
      error.value = e.data?.message || 'Ocorreu um erro'
    } finally {
      loading.value = false
    }
  }
  </script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div class="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl w-96 border border-purple-500/30 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
        
        <div class="relative z-10">
          <h1 class="text-3xl font-bold mb-2 text-center text-purple-300 font-fantasy tracking-wider">Login do Aventureiro</h1>
          <div class="text-center mb-6">
            <span class="text-gray-400 text-sm">Novo andarilho? </span>
            <NuxtLink to="/cadastro" class="text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-all duration-300">Por aqui...</NuxtLink>
          </div>
          
          <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-300 mb-2">Nome do personagem</label>
              <input
                id="username"
                v-model="username"
                type="text"
                required
                class="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="Diga-me seu nome"
              />
            </div>
    
            <div>
              <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Runa secreta</label>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                class="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="Sussurre-me seu segredo"
              />
            </div>
    
            <div v-if="error" class="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-md p-3">
              {{ error }}
            </div>
    
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              :disabled="loading"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Castando a magia...
              </span>
              <span v-else>Entrar no Reino</span>
            </button>
          </form>
        </div>
        
        <div class="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div class="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </template>
  
  <style>
  .font-fantasy {
    font-family: 'Cinzel', serif;
  }
  </style> 