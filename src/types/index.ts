export interface Meal {
  id: string;
  items: string[];
  calories: number;
}

export interface NutrientInfo {
  label: string;
  current: number;
  goal: number;
  unit: string;
}

export interface DailyStats {
  caloriesLeft: number;
  caloriesGoal: number;
  nutrients: NutrientInfo[];
}

export type TabName = 'TODAY' | 'HISTORY' | 'FOODS' | 'SETTINGS';