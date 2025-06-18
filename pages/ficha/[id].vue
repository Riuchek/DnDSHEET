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

const route = useRoute()
const characterId = route.params.id as string

// Fetch character data
const { data: characterData } = await useFetch<{ success: boolean; character: Character }>(`/api/characters/${characterId}`)
const character = computed(() => characterData.value?.character)

// Form data
const formData = ref({
  name: '',
  level: 1,
  race: '',
  background: '',
  alignment: '',
  experience: 0,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  hitPoints: 0,
  armorClass: 10,
  initiative: 0,
  speed: 30,
  class_name: '',
  class_hit_die: 6,
  proficiencies: [] as string[],
  saving_throws: [] as string[],
})

// Populate form when character data is loaded
watch(character, (newCharacter) => {
  if (newCharacter) {
    formData.value = {
      name: newCharacter.name,
      level: newCharacter.level,
      race: newCharacter.race,
      background: newCharacter.background,
      alignment: newCharacter.alignment,
      experience: newCharacter.experience,
      strength: newCharacter.strength,
      dexterity: newCharacter.dexterity,
      constitution: newCharacter.constitution,
      intelligence: newCharacter.intelligence,
      wisdom: newCharacter.wisdom,
      charisma: newCharacter.charisma,
      hitPoints: newCharacter.hitPoints,
      armorClass: newCharacter.armorClass,
      initiative: newCharacter.initiative,
      speed: newCharacter.speed,
      class_name: newCharacter.class_name,
      class_hit_die: newCharacter.class_hit_die,
      proficiencies: newCharacter.proficiencies,
      saving_throws: newCharacter.saving_throws,
    }
  }
}, { immediate: true })

const getModifier = (score: number) => {
  return Math.floor((score - 10) / 2)
}

const updateCharacter = async () => {
  if (!formData.value.name.trim()) {
    alert('Por favor, insira um nome para o personagem')
    return
  }

  try {
    const result = await $fetch(`/api/characters/${characterId}`, {
      method: 'PUT',
      body: formData.value
    })

    if (result?.success) {
      alert('Personagem atualizado com sucesso!')
      navigateTo('/fichas')
    }
  } catch (error) {
    console.error('Error updating character:', error)
    alert('Falha ao atualizar personagem. Por favor, tente novamente.')
  }
}

const cancelEdit = () => {
  navigateTo('/fichas')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-3xl font-bold text-gray-900">Editar Personagem</h1>
          <div class="space-x-2">
            <button 
              @click="cancelEdit"
              class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button 
              @click="updateCharacter"
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Salvar Alterações
            </button>
          </div>
        </div>

        <div v-if="character" class="space-y-6">
          <!-- Basic Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nome do Personagem</label>
              <input v-model="formData.name" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Classe</label>
              <input v-model="formData.class_name" type="text" class="form-input" disabled />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nível</label>
              <input v-model="formData.level" type="number" min="1" max="20" class="form-input" />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Raça</label>
              <input v-model="formData.race" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Antecedente</label>
              <input v-model="formData.background" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Alinhamento</label>
              <input v-model="formData.alignment" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Experiência</label>
              <input v-model="formData.experience" type="number" min="0" class="form-input" />
            </div>
          </div>

          <!-- Ability Scores -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Habilidades</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Força</label>
                <input v-model="formData.strength" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.strength) >= 0 ? '+' : '' }}{{ getModifier(formData.strength) }}
                </div>
              </div>
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Destreza</label>
                <input v-model="formData.dexterity" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.dexterity) >= 0 ? '+' : '' }}{{ getModifier(formData.dexterity) }}
                </div>
              </div>
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Constituição</label>
                <input v-model="formData.constitution" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.constitution) >= 0 ? '+' : '' }}{{ getModifier(formData.constitution) }}
                </div>
              </div>
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Inteligência</label>
                <input v-model="formData.intelligence" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.intelligence) >= 0 ? '+' : '' }}{{ getModifier(formData.intelligence) }}
                </div>
              </div>
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Sabedoria</label>
                <input v-model="formData.wisdom" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.wisdom) >= 0 ? '+' : '' }}{{ getModifier(formData.wisdom) }}
                </div>
              </div>
              <div class="ability-score">
                <label class="block text-sm font-medium text-gray-700 mb-1">Carisma</label>
                <input v-model="formData.charisma" type="number" min="1" max="20" class="form-input" />
                <div class="text-xs text-gray-600 mt-1">
                  Modificador: {{ getModifier(formData.charisma) >= 0 ? '+' : '' }}{{ getModifier(formData.charisma) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Combat Stats -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Estatísticas de Combate</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="stat">
                <label class="block text-sm font-medium text-gray-700 mb-1">Pontos de Vida</label>
                <input v-model="formData.hitPoints" type="number" min="1" class="form-input" />
              </div>
              <div class="stat">
                <label class="block text-sm font-medium text-gray-700 mb-1">Classe de Armadura</label>
                <input v-model="formData.armorClass" type="number" min="1" class="form-input" />
              </div>
              <div class="stat">
                <label class="block text-sm font-medium text-gray-700 mb-1">Iniciativa</label>
                <input v-model="formData.initiative" type="number" class="form-input" />
              </div>
              <div class="stat">
                <label class="block text-sm font-medium text-gray-700 mb-1">Velocidade</label>
                <input v-model="formData.speed" type="number" min="1" class="form-input" />
              </div>
            </div>
          </div>

          <!-- Class Features -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Características da Classe</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="feature">
                <h4 class="font-semibold mb-2">Dado de Vida</h4>
                <p class="text-gray-700">d{{ formData.class_hit_die }}</p>
              </div>
              <div class="feature">
                <h4 class="font-semibold mb-2">Testes de Resistência</h4>
                <ul class="list-disc pl-5 text-gray-700">
                  <li v-for="save in formData.saving_throws" :key="save">{{ save }}</li>
                </ul>
              </div>
              <div class="feature md:col-span-2">
                <h4 class="font-semibold mb-2">Proficiências</h4>
                <ul class="list-disc pl-5 text-gray-700">
                  <li v-for="prof in formData.proficiencies" :key="prof">{{ prof }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <div class="text-gray-500">Carregando personagem...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  transition: border-color 0.15s ease-in-out;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.ability-score, .stat {
  display: flex;
  flex-direction: column;
}

.feature {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.375rem;
}
</style> 