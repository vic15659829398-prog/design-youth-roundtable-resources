import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, PenTool } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6 sm:px-10 sm:py-10">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <Image src="/roundtable-logo.png" alt="设计青年圆桌派" width={1750} height={512} unoptimized priority className="h-auto w-[220px] object-contain" />
          <Link href="/admin" className="text-sm text-black/45 transition hover:text-black">内部管理</Link>
        </header>
        <section className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1fr_1.05fr] lg:py-16">
          <div><p className="mb-5 text-sm font-bold text-[#9a7a00]">设计青年资源共建计划</p><h1 className="max-w-xl text-[clamp(2.5rem,7vw,5.6rem)] font-black leading-[0.98]">让值得发生的<br />合作被看见</h1><p className="mt-7 max-w-lg text-lg leading-8 text-black/60">汇集真实的设计需求与供应资源，先认识彼此，再让合适的合作发生。</p><p className="mt-5 max-w-lg border-l-4 border-[#ffd400] pl-4 text-sm leading-6 text-black/45">本次填写用于建立圆桌派内部资源档案，不代表入驻、认证或合作承诺。</p></div>
          <div className="grid gap-4">
            <Link href="/designer" className="group flex min-h-40 items-center justify-between border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,.04)] transition hover:-translate-y-1 hover:border-black/30 sm:p-8"><div className="flex items-center gap-5"><span className="grid h-14 w-14 place-items-center bg-black text-white"><PenTool size={24} /></span><div><p className="text-xs font-bold text-black/40">DESIGN SIDE</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">我是设计师或设计机构</h2></div></div><ArrowRight className="transition group-hover:translate-x-1" /></Link>
            <Link href="/supplier" className="group flex min-h-40 items-center justify-between bg-[#ffd400] p-6 transition hover:-translate-y-1 hover:bg-[#f3ca00] sm:p-8"><div className="flex items-center gap-5"><span className="grid h-14 w-14 place-items-center bg-white text-black"><Building2 size={25} /></span><div><p className="text-xs font-bold text-black/45">SUPPLY SIDE</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">我是品牌或供应商</h2></div></div><ArrowRight className="transition group-hover:translate-x-1" /></Link>
          </div>
        </section>
        <footer className="flex items-end justify-between border-t border-black/10 pt-5 text-sm text-black/40"><span>一桌吃饭 · 一起挣钱</span><Link href="/privacy" className="underline underline-offset-4">信息收集与使用说明</Link></footer>
      </div>
    </main>
  );
}



