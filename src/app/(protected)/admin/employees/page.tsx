"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import { Button } from "@/components/shared/ui/button";
import { useState } from "react";
import { AddEmployeeDialog } from "@/components/admin/AddEmployeeDialog";

export default function AdminEmployee() {
    const [ open, setOpen ] = useState(false);
    
    return(
    <ContentLayout title="Employee Management">
        <div className="flex justify-end">
            <Button onClick= {() => setOpen(true)}>Add Employee</Button>
        </div>

        <AddEmployeeDialog open= {open} setOpen= {setOpen}/>
    </ContentLayout>
    );
}