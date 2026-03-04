import { redirect } from "next/navigation";
import { requireAuth } from "../server/auth";

export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE"
}

export type AuthUser = {
  id: string;
  role: UserRole;
  employeeId: string;
  firstname: string;
  lastname: string;
  email: string;
};

export async function requireRole(role: UserRole) {
    const user = await requireAuth();

    if (user.role !== role) {
        redirect ("/unauthorized")
    }
    return user;
}