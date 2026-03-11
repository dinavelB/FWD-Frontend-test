"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminAttendance() {
    const user = useUser();
    
    return(
    <ContentLayout title="Attendance Management">
        <div>
        </div>
    </ContentLayout>
    );
}