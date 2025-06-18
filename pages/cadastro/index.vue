<script setup lang="ts">
interface RegisterResponse {
  success: boolean
  user: {
    id: number
    username: string
  }
}

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const loading = ref(false)

const handleRegister = async () => {
  try {
    loading.value = true
    error.value = ''
    
    if (password.value !== confirmPassword.value) {
      error.value = 'O sussuro não é o mesmo...'
      return
    }
    
    if (password.value.length < 6) {
      error.value = 'O sussuro foi curto demais...'
      return
    }
    
    const response = await $fetch<RegisterResponse>('/api/auth/create', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    if (response.success) {
      navigateTo('/')
    }
  } catch (e: any) {
    error.value = e.data?.message || 'Seu Deus o rejeitou! Tente novamente.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white p-8 rounded-lg shadow-xl w-96 border border-gray-200">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-900 font-fantasy">Cadastro do Aventureiro</h1>
        
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Nome do aventureiro</label>
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="mt-1 block w-full rounded-md bg-white border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 mt-2"
            />
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Sussurro de seu Deus</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              minlength="6"
              class="mt-1 block w-full rounded-md bg-white border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 mt-2"
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirme o sussurro</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              minlength="6"
              class="mt-1 block w-full rounded-md bg-white border-gray-300 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 mt-2"
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
            {{ loading ? 'Criando pergaminho...' : 'Cadastrar' }}
          </button>

          <div class="text-center mt-4">
            <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 text-sm">
              Já tem uma conta? Faça login
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style>
  .font-fantasy {
    font-family: 'Cinzel', serif;
  }
  </style> 