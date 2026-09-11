import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { db } from "@/lib/supabase-rest";
export async function GET(req:Request){if(!await requireAdmin())return NextResponse.json({error:"未登录"},{status:401});const u=new URL(req.url);const type=u.searchParams.get("type")==="suppliers"?"suppliers":"designers";const q=u.searchParams.get("q")?.replace(/[%(),]/g,"")||"";let path=`${type}?select=*&deleted_at=is.null&order=created_at.desc&limit=500`;if(q)path+=`&or=(company_name.ilike.*${q}*,contact_name.ilike.*${q}*,phone.ilike.*${q}*)`;const r=await db(path,{headers:{prefer:"count=exact"}});return new NextResponse(await r.text(),{status:r.status,headers:{"content-type":"application/json"}})}
