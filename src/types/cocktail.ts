import type { Cocktail, Ingredient } from '../types'
import cocktailsJson from './cocktails.json'

// ȷ����������ݷ������Ͷ���
const cocktailsData = (cocktailsJson as unknown) as Cocktail[]

// ���������䷽
export const loadCocktails = (): Cocktail[] => {
    return cocktailsData
}

// ����ID��ȡ�䷽
export const getCocktail = (id: number): Cocktail | undefined => {
    return cocktailsData.find((c: Cocktail) => c.id === id)
}

// ����ԭ��ɸѡ�䷽
export const getCocktailsByIngredient = (ingredient: string): Cocktail[] => {
    return cocktailsData.filter((cocktail: Cocktail) =>
        cocktail.ingredients.some((i: Ingredient) => i.name === ingredient)
    )
}

// �����Ѷ�ɸѡ�䷽
export const getCocktailsByDifficulty = (difficulty: "Easy" | "Medium" | "Hard"): Cocktail[] => {
    return cocktailsData.filter((cocktail: Cocktail) => cocktail.difficulty === difficulty)
}

// ���ݷ���ɸѡ�䷽
export const getCocktailsByCategory = (category: string): Cocktail[] => {
    return cocktailsData.filter((cocktail: Cocktail) => cocktail.category === category)
}

// �����䷽
export const searchCocktails = (query: string): Cocktail[] => {
    const lowerQuery = query.toLowerCase()
    return cocktailsData.filter((cocktail: Cocktail) =>
        cocktail.name.toLowerCase().includes(lowerQuery) ||
        cocktail.ingredients.some((i: Ingredient) =>
            i.name.toLowerCase().includes(lowerQuery)
        )
    )
}