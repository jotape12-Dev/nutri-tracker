import { Meal, DailyStats } from '../types';

export const meals: Meal[] = [
  {
    id: '1',
    items: ['Oatmeal with berries', '2% Milk', 'Almonds'],
    calories: 380,
  },
  {
    id: '2',
    items: ['Grilled Chicken Salad', 'Whole Wheat Bread', 'Olive Oil Dressing'],
    calories: 450,
  },
];

export const dailyStats: DailyStats = {
  caloriesLeft: 1500,
  caloriesGoal: 2000,
  nutrients: [
    { label: 'Protein', current: 80, goal: 120, unit: 'g' },
    { label: 'Carbs',   current: 200, goal: 250, unit: 'g' },
    { label: 'Fat',     current: 50,  goal: 70,  unit: 'g' },
  ],
};

export const historyData = [
  { id: '1', date: 'Sat, Jan 31', consumed: 1850, goal: 2000, percentage: 92 },
  { id: '2', date: 'Fri, Jan 30', consumed: 2100, goal: 2000, percentage: 105 },
  { id: '3', date: 'Thu, Jan 29', consumed: 1950, goal: 2000, percentage: 97 },
  { id: '4', date: 'Wed, Jan 28', consumed: 1700, goal: 2000, percentage: 85 },
];

export const foodsData = [
  { id: '1', name: 'Greek Yogurt', calories: 150, protein: 15, carbs: 6, fat: 4 },
  { id: '2', name: 'Avocado Toast', calories: 320, protein: 8, carbs: 32, fat: 18 },
  { id: '3', name: 'Chicken Breast (100g)', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: '4', name: 'Brown Rice (1 cup)', calories: 216, protein: 5, carbs: 45, fat: 1.8 },
  { id: '5', name: 'Peanut Butter (1 tbsp)', calories: 95, protein: 4, carbs: 3, fat: 8 },
  { id: '6', name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0.3 },
];