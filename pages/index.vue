<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white p-8 rounded-lg shadow-xl w-96 border border-gray-200">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-900 font-fantasy">Login do Aventureiro</h1>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Nome do personagem</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="mt-1 block w-full rounded-md bg-white border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Runa secreta</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full rounded-md bg-white border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
  
          <div v-if="error" class="text-red-600 text-sm">
            {{ error }}
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-bold transition-colors duration-200"
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