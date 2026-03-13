"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function EmployeeDashboard() {
    const user = useUser();
    const fullName = `${user.firstname} ${user.lastname}`

    return(
    <ContentLayout title="Dashboard">
        <div>
            HELLO, {fullName}!
        </div>
    </ContentLayout>
    );
}