import { cookies } from "next/headers";
import { getUser } from "./supabase-rest";
export async function requireAdmin(){const jar=await cookies();const token=jar.get("rt_admin")?.value;if(!token)return null;const user=await getUser(token);const allowed=(process.env.ADMIN_EMAILS||"").split(",").map(x=>x.trim().toLowerCase()).filter(Boolean);return user?.email&&allowed.includes(String(user.email).toLowerCase())?user:null}
