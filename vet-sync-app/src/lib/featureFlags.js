const featureFlags = {
  ENABLE_AUTH: true,
  ENABLE_PETS: true,
  ENABLE_VETS: true,
  ENABLE_APPOINTMENTS: true,
  ENABLE_SERVICES: true,
  ENABLE_AI_DASHBOARD: false,
  ENABLE_ML_PREDICTIONS: false,
  ENABLE_CHAT_SUPPORT: false,
  ENABLE_EMAIL_NOTIFICATIONS: false,
};

export const isFeatureEnabled = (flagName) => {
  if (!(flagName in featureFlags)) {
    console.warn(`Feature flag "${flagName}" no existe`);
    return false;
  }
  return featureFlags[flagName];
};

export default featureFlags;