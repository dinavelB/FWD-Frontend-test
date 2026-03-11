"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminEmployees() {
    const user = useUser();
    
    return(
    <ContentLayout title="Employee Management">
        <div>
        </div>
    </ContentLayout>
    );
}