import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

import { Button } from "@/components/ui/button"

export default function Logout() {
  return (
    <div className="my-32 flex flex-col items-center justify-center gap-8">
      Are you Sure?
      <LogoutLink>
        <Button>Log out</Button>
      </LogoutLink>
    </div>
  )
}
