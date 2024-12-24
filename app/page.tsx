"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import PersonalInfo from '@/components/personal-info'
import AddressDetails from '@/components/address-details'
import Preferences from '@/components/preferences'
import Review from '@/components/review'
import { useFormStore } from '@/lib/store'

const steps = ['Personal Info', 'Address', 'Preferences', 'Review']

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const { personalInfo, addressDetails, preferences, setPersonalInfo, setAddressDetails, setPreferences } = useFormStore()

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/form-data')
        if (!response.ok) throw new Error('Failed to fetch data')
        const data = await response.json()
        setPersonalInfo(data.personalInfo)
        setAddressDetails(data.addressDetails)
        setPreferences(data.preferences)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 5000) // Fetch updates every 5 seconds

    return () => clearInterval(interval)
  }, [setPersonalInfo, setAddressDetails, setPreferences])

  useEffect(() => {
    const updateServer = async () => {
      try {
        const response = await fetch('/api/form-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ personalInfo, addressDetails, preferences }),
        })
        if (!response.ok) throw new Error('Failed to update server')
      } catch (error) {
        console.error('Error updating server:', error)
      }
    }

    updateServer()
  }, [personalInfo, addressDetails, preferences])

  return (
    <div className="max-w-2xl mx-auto">
      {/* Steps Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 h-2 bg-muted rounded-full">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && <PersonalInfo />}
          {currentStep === 1 && <AddressDetails />}
          {currentStep === 2 && <Preferences />}
          {currentStep === 3 && <Review />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
