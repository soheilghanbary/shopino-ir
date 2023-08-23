import { redirect } from "next/navigation"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

import { db } from "@/lib/db"

export async function GET() {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || user == null || !user.id)
    throw new Error("something went wrong with authentication" + user)

  const userExist = await db.user.findFirst({ where: { id: user.id } })

  if (userExist === null) {
    await db.user.create({
      data: {
        id: user.id,
        name: user.given_name!,
        email: user.email!,
        avatar: user.picture ?? "",
      },
    })
  }

  return redirect("/")
}
