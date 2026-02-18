import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6">
      <p className="font-mono text-7xl font-bold text-cyan-400/20">404</p>
      <h1 className="mt-4 text-2xl font-bold text-zinc-50">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-zinc-500">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Button asChild variant="secondary" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>
      </Button>
    </div>
  );
}
