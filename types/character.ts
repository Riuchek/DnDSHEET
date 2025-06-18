export interface Reference {
  index: string
  name: string
  url: string
}

export interface ProficiencyChoice {
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

export interface StartingEquipment {
  equipment: Reference
  quantity: number
}

export interface MultiClassing {
  prerequisites: Array<{
    ability_score: Reference
    minimum_score: number
  }>
  proficiencies: Reference[]
}

export interface ClassDetail {
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