import { redirect } from "next/navigation"
import { verifyToken } from "./auth-server"

export async function requireAuth() {
  if (process.env.NODE_ENV === "development") {
    return {
      id: "1",
      role: "SUPER_ADMIN",
      employeeId: "FWD123",
      firstname: "Dinavel",
      lastname: "Binongo",
      email: "dinavelbinongo@gmail.com"
    };
  }

  try {
    const user = await verifyToken()
    return user
  } catch (error) {
    console.error(error)
    redirect("/unauthorized")
  }
}