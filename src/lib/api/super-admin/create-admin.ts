import { AddAdminFormValues } from "@/lib/types/create-admin";
import { API_BASE_URL } from "@/lib/util/api";

export async function createAdmin(data: AddAdminFormValues) {
    const response = await fetch(`${API_BASE_URL}/users/create-admin-account`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create admin")
    }
    return response.json();
}