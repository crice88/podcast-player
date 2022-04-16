import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-full">
      <div className="min-h-full">
        <nav className="bg-gray-500">
          <div className="max-w-full px-4">
            <div className="flex items-center justify-between h-16 cursor-pointer">
              <Link href={"/player"}>
                <p className="text-white">Podcast Player</p>
              </Link>
            </div>
          </div>
        </nav>
        <main>
          <div className="max-w-full py-6 px-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
