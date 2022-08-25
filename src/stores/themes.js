import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemesStore = defineStore('themes', () => {
	const theme = ref(1)
	function changeTheme(newTheme) {
		theme.value = newTheme
	}

	return { theme, changeTheme }
})