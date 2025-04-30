import { settings } from '@/constants/settings'

const initSettings = () => {
  const { settingsKey, timeToStoreInSeconds } = settings

  window.localStorage.setItem(settingsKey, JSON.stringify({ timeToStoreInSeconds }))
}

export const loadSettings = () => {
  const { settingsKey } = settings
  const settingsString = window.localStorage.getItem(settingsKey)


  if (!settingsString) {
    initSettings()
    return settings
  }

  return JSON.parse(settingsString)
}

export const saveSettings = (newSettings: Record<string, unknown>) => {
  const { settingsKey } = settings
  window.localStorage.setItem(settingsKey, JSON.stringify(newSettings))
}
