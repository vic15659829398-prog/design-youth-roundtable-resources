const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export function configured(){return Boolean(url&&serviceKey&&anonKey)}
export async function db(path:string,init:RequestInit={}){if(!url||!serviceKey)throw new Error("数据库尚未配置");return fetch(`${url}/rest/v1/${path}`,{...init,headers:{apikey:serviceKey,authorization:`Bearer ${serviceKey}`,"content-type":"application/json",prefer:"return=representation",...(init.headers||{})}})}
export async function signIn(email:string,password:string){if(!url||!anonKey)throw new Error("登录服务尚未配置");return fetch(`${url}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:anonKey,"content-type":"application/json"},body:JSON.stringify({email,password})})}
export async function getUser(token:string):Promise<{email?:string}|null>{if(!url||!anonKey)return null;const r=await fetch(`${url}/auth/v1/user`,{headers:{apikey:anonKey,authorization:`Bearer ${token}`},cache:"no-store"});return r.ok?await r.json() as {email?:string}:null}

