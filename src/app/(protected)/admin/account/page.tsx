"use client"

import { ContentLayout } from "@/components/shared/layout/panel/content-layout";
import {useUser} from "@/components/shared/providers/UserContext"
export default function AdminAccount() {
    const user = useUser();

    return(
    <ContentLayout title="My Account">
        <div>
        </div>
    </ContentLayout>
    );
}