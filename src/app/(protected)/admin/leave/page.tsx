"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminLeave() {
    const user = useUser();
    
    return(
    <ContentLayout title="Leave Management">
        <div>
        </div>
    </ContentLayout>
    );
}