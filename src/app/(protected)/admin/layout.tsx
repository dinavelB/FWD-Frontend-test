import { ReactNode } from "react";
import { UserProvider} from "@/components/shared/providers/UserContext"
import { requireRole, UserRole } from "@/lib/util/roles";

export default async function AdminLayout({children}: {children: ReactNode}){
   const user = await requireRole(UserRole.ADMIN);

    return(
        <UserProvider user={user}>
            {children}
        </UserProvider>
    );
}