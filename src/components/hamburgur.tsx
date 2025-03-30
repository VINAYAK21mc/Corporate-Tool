import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";

export function HamburgerSheet() {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" className="p-2 text-gray-700 hover:text-blue-600">
        <Menu size={24} />
      </Button>
    </SheetTrigger>
    <SheetContent className="bg-white shadow-lg">
      <SheetHeader>
        <SheetTitle className="text-xl font-semibold text-gray-900">Menu</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-6 mt-6 text-lg text-gray-700 px-6 h-full">
        <Link href="/features" className="font-medium hover:text-blue-600 transition">Features</Link>
        <Link href="/tutorial" className="font-medium hover:text-blue-600 transition">How it works</Link>
        <Link href="/pricing" className="font-medium hover:text-blue-600 transition">Pricing</Link>
      </nav>
      <SheetFooter className="mt-8">
        <SheetClose asChild>
        <div className="flex flex-col gap-4">
          <SignedOut>
            <Button asChild>
            <SignInButton>
              Log In
            </SignInButton>
            </Button>
            <Button variant={'secondary'} asChild>
            <SignUpButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  );
}
