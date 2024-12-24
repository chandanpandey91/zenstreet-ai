import { useFormStore } from '@/lib/store'

export default function Review() {
  const { personalInfo, addressDetails, preferences } = useFormStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review</h2>
      <div>
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Address Details</h3>
        <p>Street: {addressDetails.street}</p>
        <p>City: {addressDetails.city}</p>
        <p>State: {addressDetails.state}</p>
        <p>ZIP Code: {addressDetails.zip}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Preferences</h3>
        <p>Receive marketing emails: {preferences.marketing ? 'Yes' : 'No'}</p>
        <p>Subscribe to newsletter: {preferences.newsletter ? 'Yes' : 'No'}</p>
        <p>Agree to terms and conditions: {preferences.terms ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

