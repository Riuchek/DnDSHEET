<script setup lang="ts">
import type { ClassDetail } from '~/types/character'

const props = defineProps<{
  selectedClass: ClassDetail | null
}>()

const character = ref({
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
  proficiencies: [] as string[],
  savingThrows: [] as string[],
})
</script>

<template>
  <div v-if="selectedClass" class="character-sheet">
    <div class="sheet-header">
      <h2 class="text-2xl font-bold mb-4">Character Sheet</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label>Character Name</label>
          <input v-model="character.name" type="text" class="form-input" />
        </div>
        <div class="form-group">
          <label>Class</label>
          <input :value="selectedClass.name" type="text" class="form-input" disabled />
        </div>
        <div class="form-group">
          <label>Level</label>
          <input v-model="character.level" type="number" min="1" max="20" class="form-input" />
        </div>
        <div class="form-group">
          <label>Race</label>
          <input v-model="character.race" type="text" class="form-input" />
        </div>
      </div>
    </div>

    <div class="sheet-body mt-6">
      <div class="grid grid-cols-3 gap-6">
        <!-- Ability Scores -->
        <div class="ability-scores">
          <h3 class="text-xl font-semibold mb-4">Ability Scores</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="ability-score">
              <label>Strength</label>
              <input v-model="character.strength" type="number" class="form-input" />
            </div>
            <div class="ability-score">
              <label>Dexterity</label>
              <input v-model="character.dexterity" type="number" class="form-input" />
            </div>
            <div class="ability-score">
              <label>Constitution</label>
              <input v-model="character.constitution" type="number" class="form-input" />
            </div>
            <div class="ability-score">
              <label>Intelligence</label>
              <input v-model="character.intelligence" type="number" class="form-input" />
            </div>
            <div class="ability-score">
              <label>Wisdom</label>
              <input v-model="character.wisdom" type="number" class="form-input" />
            </div>
            <div class="ability-score">
              <label>Charisma</label>
              <input v-model="character.charisma" type="number" class="form-input" />
            </div>
          </div>
        </div>

        <!-- Combat Stats -->
        <div class="combat-stats">
          <h3 class="text-xl font-semibold mb-4">Combat Stats</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="stat">
              <label>Hit Points</label>
              <input v-model="character.hitPoints" type="number" class="form-input" />
            </div>
            <div class="stat">
              <label>Armor Class</label>
              <input v-model="character.armorClass" type="number" class="form-input" />
            </div>
            <div class="stat">
              <label>Initiative</label>
              <input v-model="character.initiative" type="number" class="form-input" />
            </div>
            <div class="stat">
              <label>Speed</label>
              <input v-model="character.speed" type="number" class="form-input" />
            </div>
          </div>
        </div>

        <!-- Class Features -->
        <div class="class-features">
          <h3 class="text-xl font-semibold mb-4">Class Features</h3>
          <div class="feature">
            <h4 class="font-semibold">Hit Die</h4>
            <p>d{{ selectedClass.hit_die }}</p>
          </div>
          <div class="feature">
            <h4 class="font-semibold">Saving Throws</h4>
            <ul class="list-disc pl-5">
              <li v-for="save in selectedClass.saving_throws" :key="save.index">
                {{ save.name }}
              </li>
            </ul>
          </div>
          <div class="feature">
            <h4 class="font-semibold">Proficiencies</h4>
            <ul class="list-disc pl-5">
              <li v-for="prof in selectedClass.proficiencies" :key="prof.index">
                {{ prof.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-sheet {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.form-input:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

.ability-score, .stat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature {
  margin-bottom: 1rem;
}
</style> 