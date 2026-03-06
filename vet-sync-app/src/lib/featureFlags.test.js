import featureFlags, { isFeatureEnabled } from './featureFlags'

describe('Feature Flags', () => {
  test('ENABLE_AUTH debe estar activado', () => {
    expect(featureFlags.ENABLE_AUTH).toBe(true)
  })

  test('ENABLE_PETS debe estar activado', () => {
    expect(featureFlags.ENABLE_PETS).toBe(true)
  })

  test('ENABLE_APPOINTMENTS debe estar activado', () => {
    expect(featureFlags.ENABLE_APPOINTMENTS).toBe(true)
  })

  test('ENABLE_AI_DASHBOARD debe estar desactivado', () => {
    expect(featureFlags.ENABLE_AI_DASHBOARD).toBe(false)
  })

  test('ENABLE_ML_PREDICTIONS debe estar desactivado', () => {
    expect(featureFlags.ENABLE_ML_PREDICTIONS).toBe(false)
  })

  test('isFeatureEnabled retorna true para flags activos', () => {
    expect(isFeatureEnabled('ENABLE_AUTH')).toBe(true)
  })

  test('isFeatureEnabled retorna false para flags inactivos', () => {
    expect(isFeatureEnabled('ENABLE_AI_DASHBOARD')).toBe(false)
  })

  test('isFeatureEnabled retorna false para flags inexistentes', () => {
    expect(isFeatureEnabled('FLAG_INEXISTENTE')).toBe(false)
  })
})
