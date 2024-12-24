import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useFormStore } from '@/lib/store'

export default function Preferences() {
  const { preferences, setPreferences } = useFormStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Preferences</h2>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="marketing"
          checked={preferences.marketing}
          onCheckedChange={(checked) => setPreferences({ marketing: checked as boolean })}
        />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={preferences.newsletter}
          onCheckedChange={(checked) => setPreferences({ newsletter: checked as boolean })}
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={preferences.terms}
          onCheckedChange={(checked) => setPreferences({ terms: checked as boolean })}
        />
        <Label htmlFor="terms">Agree to terms and conditions</Label>
      </div>
    </div>
  )
}

