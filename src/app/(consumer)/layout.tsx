import { ReactNode } from "react";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  <>
    <Navbar />
    {children}
  </>;
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-amber-200 z-10">
      <nav className="flex gap-4 container"></nav>
    </header>
  );
}
