import { ref } from 'vue'
import { loadSettings, saveSettings } from '@/services/settingsService'

const settings = ref({
  timeToStoreInSeconds: 0,
})

export default function useSettings() {
  const updateTimeToStore = (time: number) => {
    settings.value.timeToStoreInSeconds = time
    saveSettings({ ...settings.value, timeToStoreInSeconds: time })
  }

  const loadSettingsFromStorage = () => {
    const storedSettings = loadSettings()
    settings.value.timeToStoreInSeconds = storedSettings.timeToStoreInSeconds

    return settings.value
  }

  return {
    settings,
    updateTimeToStore,
    loadSettingsFromStorage,
  }
}
