import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormStore } from '@/lib/store'

export default function AddressDetails() {
  const { addressDetails, setAddressDetails } = useFormStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Address Details</h2>
      <div>
        <Label htmlFor="street">Street</Label>
        <Input
          id="street"
          value={addressDetails.street}
          onChange={(e) => setAddressDetails({ street: e.target.value })}
          placeholder="Enter your street address"
        />
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          value={addressDetails.city}
          onChange={(e) => setAddressDetails({ city: e.target.value })}
          placeholder="Enter your city"
        />
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          value={addressDetails.state}
          onChange={(e) => setAddressDetails({ state: e.target.value })}
          placeholder="Enter your state"
        />
      </div>
      <div>
        <Label htmlFor="zip">ZIP Code</Label>
        <Input
          id="zip"
          value={addressDetails.zip}
          onChange={(e) => setAddressDetails({ zip: e.target.value })}
          placeholder="Enter your ZIP code"
        />
      </div>
    </div>
  )
}

