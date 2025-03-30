import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HamburgerSheet } from "@/components/hamburgur";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-md">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons8-confluence-48.png"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2"
            priority
          />
        </Link>
        <div className="sm:hidden">
          <HamburgerSheet />
        </div>
        <nav className="gap-4 sm:gap-6 text-gray-700 hidden sm:flex">
          <Link
            href="/features"
            className="font-medium hover:text-black underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="/tutorial"
            className="font-medium hover:text-black underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="font-medium hover:text-black underline-offset-4"
          >
            Pricing
          </Link>
        </nav>
        <div className="hidden gap-4 sm:flex">
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
      </header>
      <main className="flex-1 bg-gray-50">
        <section className="w-full py-20 md:py-28 lg:py-36 xl:py-44 bg-gray-100">
          <div className="container px-6 md:px-12 max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight text-gray-900">
                Take the Hassle Out of Time Off Management
              </h1>
              <p className="mt-6 text-lg text-gray-600 md:text-xl max-w-3xl">
                Say goodbye to paperwork and confusion—manage time off requests,
                approvals, and tracking effortlessly with our all-in-one
                solution.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="px-8 py-3 text-lg">
                  <Link href="/sign-in">Get Started</Link>
                </Button>
                <Button variant="outline" asChild className="px-8 py-3 text-lg">
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/dashboard.jpg"
                alt="Dashboard screenshot"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container px-6 md:px-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center mb-10">
              Why Choose Us?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>✅ Simple Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  Manage requests and approvals effortlessly with our intuitive
                  interface.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>📊 Real-time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Gain insights into time-off trends and optimize scheduling
                  with ease.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🔗 Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  Connect effortlessly with the tools you already use for smooth
                  workflows.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
