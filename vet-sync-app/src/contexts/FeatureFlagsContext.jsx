import { createContext, useContext } from 'react'
import featureFlags, { isFeatureEnabled } from '../lib/featureFlags'

const FeatureFlagsContext = createContext(featureFlags)

export const FeatureFlagsProvider = ({ children }) => {
  return (
    <FeatureFlagsContext.Provider value={{ featureFlags, isFeatureEnabled }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export const useFeatureFlags = () => {
  return useContext(FeatureFlagsContext)
}
