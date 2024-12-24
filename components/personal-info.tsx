import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormStore } from '@/lib/store'

export default function PersonalInfo() {
  const { personalInfo, setPersonalInfo } = useFormStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={personalInfo.name}
          onChange={(e) => setPersonalInfo({ name: e.target.value })}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={personalInfo.email}
          onChange={(e) => setPersonalInfo({ email: e.target.value })}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={personalInfo.phone}
          onChange={(e) => setPersonalInfo({ phone: e.target.value })}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  )
}

