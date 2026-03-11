"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminReimbursement() {
    const user = useUser();
    
    return(
    <ContentLayout title="Reimbursement Management">
        <div>
        </div>
    </ContentLayout>
    );
}