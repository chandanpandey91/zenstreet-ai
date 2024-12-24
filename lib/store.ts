import { create } from 'zustand'

interface FormState {
  personalInfo: {
    name: string
    email: string
    phone: string
  }
  addressDetails: {
    street: string
    city: string
    state: string
    zip: string
  }
  preferences: {
    marketing: boolean
    newsletter: boolean
    terms: boolean
  }
  setPersonalInfo: (info: Partial<FormState['personalInfo']>) => void
  setAddressDetails: (details: Partial<FormState['addressDetails']>) => void
  setPreferences: (prefs: Partial<FormState['preferences']>) => void
}

export const useFormStore = create<FormState>((set) => ({
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  addressDetails: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  preferences: {
    marketing: false,
    newsletter: false,
    terms: false,
  },
  setPersonalInfo: (info) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, ...info },
    })),
  setAddressDetails: (details) =>
    set((state) => ({
      addressDetails: { ...state.addressDetails, ...details },
    })),
  setPreferences: (prefs) =>
    set((state) => ({
      preferences: { ...state.preferences, ...prefs },
    })),
}))

