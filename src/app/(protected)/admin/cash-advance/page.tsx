"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminCashAdvance() {
    const user = useUser();
    
    return(
    <ContentLayout title="Cash Advance Management">
        <div>
        </div>
    </ContentLayout>
    );
}