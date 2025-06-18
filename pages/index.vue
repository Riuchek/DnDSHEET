<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="bg-gray-800 p-8 rounded-lg shadow-xl w-96 border-2 border-red-600">
        <h1 class="text-3xl font-bold mb-6 text-center text-red-500 font-fantasy">Login do aventureiro</h1>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-red-400">Nome do personagem</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-red-600 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-red-400">Runa secreta</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full rounded-md bg-gray-700 border-red-600 text-white shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
  
          <div v-if="error" class="text-red-400 text-sm">
            {{ error }}
          </div>
  
          <button
            type="submit"
            class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-bold transition-colors duration-200"
            :disabled="loading"
          >
            {{ loading ? 'Castando a magia...' : 'Entrar no Reino' }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
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
      error.value = e.data?.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style>
  .font-fantasy {
    font-family: 'Cinzel', serif;
  }
  </style> 