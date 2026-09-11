"use client";
import { useEffect } from "react";

type Tool={name:string;title:string;description:string;inputSchema:Record<string,unknown>;execute:(input:unknown)=>unknown};
type ModelContext={registerTool:(tool:Tool,options?:{signal?:AbortSignal})=>void|Promise<void>};

export default function WebMcpTools(){useEffect(()=>{const context=(document as Document&{modelContext?:ModelContext}).modelContext;if(!context)return;const controller=new AbortController();void context.registerTool({name:"open_resource_form",title:"打开资源登记表",description:"打开设计师或供应商的资源登记表。",inputSchema:{type:"object",properties:{kind:{type:"string",enum:["designer","supplier"]}},required:["kind"]},execute:(input)=>{const kind=(input as {kind?:string}).kind;if(kind!=="designer"&&kind!=="supplier")throw new Error("无效登记类型");location.href=`/${kind}`;return {opened:kind}}},{signal:controller.signal});return()=>controller.abort()},[]);return null}
