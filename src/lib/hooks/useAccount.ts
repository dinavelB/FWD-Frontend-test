import { useQuery } from "@tanstack/react-query"
import { getAccounts } from "@/lib/api/shared/users/users"
import { UserRole } from "@/lib/types/roles"

export function useAccounts(role: UserRole.ADMIN | UserRole.EMPLOYEE) {

  return useQuery({
    queryKey: ["accounts", role],
    queryFn: () => getAccounts(role),
  })

}