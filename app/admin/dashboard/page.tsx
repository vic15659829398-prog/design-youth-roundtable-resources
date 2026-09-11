import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import AdminDashboard from "@/components/admin-dashboard";
export const dynamic="force-dynamic";
export default async function Page(){if(!await requireAdmin())redirect("/admin");return <AdminDashboard/>}
