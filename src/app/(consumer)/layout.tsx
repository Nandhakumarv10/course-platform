import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function ConsumerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function Navbar() {
  return (
    <header className="flex h-12 shadow bg-white text-black items-center z-10">
      <nav className="flex gap-4  w-full p-2 ">
        <Link className="mr-auto text-lg hover:underline px-2" href="/">
          Course application
        </Link>

        <Suspense>
          <SignedIn>
            <Link
              href="/course"
              className="hover:bg-accent/10 flex items-center px-2"
            >
              My Courses
            </Link>
            <Link href="/purchase" className="flex items-center px-2">
              Purchase History
            </Link>
            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: "100%", height: "100%" },
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <div>
              <button className="p-3 bg-black rounded-3xl text-white">
                <Link href="/sign-in">sign in</Link>
              </button>
            </div>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
}
