<script setup lang="ts">

interface apiClassResponse {
  count: number
  results: {
    index: string
    name: string
    url: string
  }[]
}

interface Reference {
  index: string
  name: string
  url: string
}

interface ProficiencyChoice {
  desc: string
  choose: number
  type: string
  from: {
    option_set_type: string
    options: Array<{
      option_type: string
      item?: Reference
      count?: number
      of?: Reference
      choice?: {
        desc: string
        choose: number
        type: string
        from: {
          option_set_type: string
          equipment_category?: Reference
        }
      }
    }>
  }
}

interface StartingEquipment {
  equipment: Reference
  quantity: number
}

interface MultiClassing {
  prerequisites: Array<{
    ability_score: Reference
    minimum_score: number
  }>
  proficiencies: Reference[]
}

interface ClassDetail {
  index: string
  name: string
  hit_die: number
  proficiency_choices: ProficiencyChoice[]
  proficiencies: Reference[]
  saving_throws: Reference[]
  starting_equipment: StartingEquipment[]
  starting_equipment_options: ProficiencyChoice[]
  class_levels: string
  multi_classing: MultiClassing
  subclasses: Reference[]
  url: string
  updated_at: string
}

const { data } = await useFetch<apiClassResponse>('https://www.dnd5eapi.co/api/2014/classes')

const classes = computed(() => data.value?.results)

const selectedClass = ref<ClassDetail | null>(null)

const handleClassClick = async (classIndex: string) => {
  const classData = await $fetch<ClassDetail>(`https://www.dnd5eapi.co/api/2014/classes/${classIndex}`)
  selectedClass.value = classData
}

const handleSaveCharacter = async (characterData: any) => {
  try {
    const result = await $fetch('/api/characters', {
      method: 'POST',
      body: characterData
    })

    alert('Personagem salvo com sucesso!')
    selectedClass.value = null
  } catch (error) {
    console.error('Error saving character:', error)
    alert('Falha ao salvar personagem. Por favor, tente novamente.')
  }
}

const viewCharacterSheets = () => {
  navigateTo('/fichas')
}

const getClassColor = (className: string) => {
  const colorMap: Record<string, string> = {
    barbarian: '#8B0000', // Dark red
    bard: '#9370DB', // Medium purple
    cleric: '#FFD700', // Gold
    druid: '#228B22', // Forest green
    fighter: '#A52A2A', // Brown
    monk: '#FFA500', // Orange
    paladin: '#4169E1', // Royal blue
    ranger: '#006400', // Dark green
    rogue: '#4B0082', // Indigo
    sorcerer: '#FF1493', // Deep pink
    warlock: '#800080', // Purple
    wizard: '#1E90FF', // Dodger blue
  }
  return colorMap[className.toLowerCase()] || '#808080'
}
</script>

<template>
    <div class="min-h-screen">
        <h1 class="text-3xl font-bold mb-6 text-center text-red-500 font-fantasy">Escolha sua classe</h1>
        <div class="classes-grid">
            <div 
            v-for="item in classes" 
            :key="item.index"
            class="class-card"
            :style="{ backgroundColor: getClassColor(item.name) }"
            @click="handleClassClick(item.index)"
            >
            <h1>{{ item.name }}</h1>
            </div>
        </div>
        <CharacterSheet v-if="selectedClass" :selected-class="selectedClass" @save="handleSaveCharacter" />

        <div class="mt-6 text-center space-x-4">
          <button @click="viewCharacterSheets" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Ver fichas de personagens
          </button>
        </div>
    </div>
</template>

<style scoped>
.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.class-card {
  border-radius: 8px;
  padding: 1.5rem;
  color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.class-card:hover {
  transform: translateY(-5px);
}

.class-card h1 {
  margin: 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.class-details {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-section {
  background-color: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
