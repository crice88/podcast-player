import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-full">
      <div className="min-h-full">
        <nav className="bg-gray-500">
          <div className="max-w-full px-4">
            <div className="flex items-center justify-between h-16">
              <p className="text-white">Podcast Player</p>
            </div>
          </div>
        </nav>
        <main>
          <div className="max-w-full py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
