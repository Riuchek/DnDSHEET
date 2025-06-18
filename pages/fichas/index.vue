<script setup lang="ts">
interface Character {
  id: number
  name: string
  level: number
  race: string
  background: string
  alignment: string
  experience: number
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  hitPoints: number
  armorClass: number
  initiative: number
  speed: number
  class_name: string
  class_hit_die: number
  proficiencies: string[]
  saving_throws: string[]
  created_at: string
  updated_at: string
}

const { data } = await useFetch<{ success: boolean; characters: Character[] }>('/api/characters')
const characters = computed(() => data.value?.characters || [])

const getClassColor = (className: string) => {
  const colorMap: Record<string, string> = {
    barbarian: '#8B0000',
    bard: '#9370DB',
    cleric: '#FFD700',
    druid: '#228B22',
    fighter: '#A52A2A',
    monk: '#FFA500',
    paladin: '#4169E1',
    ranger: '#006400',
    rogue: '#4B0082',
    sorcerer: '#FF1493',
    warlock: '#800080',
    wizard: '#1E90FF',
  }
  return colorMap[className.toLowerCase()] || '#808080'
}

const getModifier = (score: number) => {
  return Math.floor((score - 10) / 2)
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR')
}

const deleteCharacter = async (characterId: number) => {
  if (confirm('Tem certeza que deseja excluir este personagem?')) {
    try {
      const response = await $fetch(`/api/characters/${characterId}`, {
        method: 'DELETE'
      })
      
      if (response?.success) {
        await $fetch('/api/characters')
        window.location.reload()
      }
    } catch (error) {
      console.error('Error deleting character:', error)
      alert('Erro ao excluir personagem')
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Personagens</h1>
        <NuxtLink 
          to="/ficha" 
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Criar Novo Personagem
        </NuxtLink>
      </div>

      <div v-if="characters.length === 0" class="text-center py-12">
        <div class="text-gray-500 text-lg mb-4">
          Nenhum personagem encontrado
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="character in characters" 
          :key="character.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
        >
          <div class="absolute top-2 right-2 z-10 flex space-x-2">
            <NuxtLink
              :to="`/ficha/${character.id}`"
              class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
              title="Editar personagem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </NuxtLink>
            <button
              @click="deleteCharacter(character.id)"
              class="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg"
              title="Excluir personagem"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          <div 
            class="h-3"
            :style="{ backgroundColor: getClassColor(character.class_name) }"
          ></div>
          
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-xl font-bold text-gray-900 mb-1">{{ character.name }}</h2>
                <p class="text-sm text-gray-600">{{ character.race }} • {{ character.class_name }}</p>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold text-gray-900">Nv.{{ character.level }}</div>
                <div class="text-xs text-gray-500">{{ character.experience }} XP</div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3 mb-4">
              <div class="text-center">
                <div class="text-xs text-gray-500">FOR</div>
                <div class="text-lg font-bold text-gray-900">{{ character.strength }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.strength) >= 0 ? '+' : '' }}{{ getModifier(character.strength) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">DES</div>
                <div class="text-lg font-bold text-gray-900">{{ character.dexterity }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.dexterity) >= 0 ? '+' : '' }}{{ getModifier(character.dexterity) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">CON</div>
                <div class="text-lg font-bold text-gray-900">{{ character.constitution }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.constitution) >= 0 ? '+' : '' }}{{ getModifier(character.constitution) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">INT</div>
                <div class="text-lg font-bold text-gray-900">{{ character.intelligence }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.intelligence) >= 0 ? '+' : '' }}{{ getModifier(character.intelligence) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">SAB</div>
                <div class="text-lg font-bold text-gray-900">{{ character.wisdom }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.wisdom) >= 0 ? '+' : '' }}{{ getModifier(character.wisdom) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">CAR</div>
                <div class="text-lg font-bold text-gray-900">{{ character.charisma }}</div>
                <div class="text-xs text-gray-600">{{ getModifier(character.charisma) >= 0 ? '+' : '' }}{{ getModifier(character.charisma) }}</div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-3 mb-4">
              <div class="text-center">
                <div class="text-xs text-gray-500">PV</div>
                <div class="text-lg font-bold text-red-600">{{ character.hitPoints }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">CA</div>
                <div class="text-lg font-bold text-blue-600">{{ character.armorClass }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500">Inic.</div>
                <div class="text-lg font-bold text-green-600">{{ character.initiative }}</div>
              </div>
            </div>

            <div class="border-t pt-4">
              <div class="flex justify-between text-sm text-gray-600 mb-2">
                <span>Velocidade: {{ character.speed }}m</span>
                <span>Dado: d{{ character.class_hit_die }}</span>
              </div>
              <div class="text-xs text-gray-500">
                Criado em {{ formatDate(character.created_at) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
}
</style> 