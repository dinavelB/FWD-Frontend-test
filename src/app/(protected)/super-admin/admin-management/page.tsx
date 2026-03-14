"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import { Button } from "@/components/shared/ui/button";
import { useState } from "react";
import { AddAdminDialog } from "@/components/super-admin/AddAdminDialog";
import AccountsTable from "@/components/shared/features/account-management/AccountsTable";
import { UserRole } from "@/lib/types/roles";
import { useAccounts } from "@/lib/hooks/useAccount";

export default function AdminManagement() {
    const [ open, setOpen ] = useState(false);
    const { data: accounts = [], isLoading, error } = useAccounts(UserRole.ADMIN);

    return(
        <ContentLayout title="Admin Management">
            <div className="flex flex-col gap-8">
                <div className="flex justify-end">
                    <Button onClick= {() => setOpen(true)}>
                        Add Admin
                    </Button>
                </div>

                <AccountsTable 
                    accounts={accounts}
                    loading= {isLoading}
                    error= {!!error}
                />
                
                <AddAdminDialog open= {open} setOpen= {setOpen}/>
            </div>
            
        </ContentLayout>
    );
}