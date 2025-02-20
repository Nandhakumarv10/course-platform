import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

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
              href="/admin"
              className="hover:underline flex items-center px-2"
            >
              Admin
            </Link>
            <Link
              href="/course"
              className="hover:underline flex items-center px-2"
            >
              My Courses
            </Link>
            <Link
              href="/purchase"
              className="hover:underline flex items-center px-2"
            >
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
            <Button className="self-center" asChild>
              <SignInButton>Sign In</SignInButton>
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
}
