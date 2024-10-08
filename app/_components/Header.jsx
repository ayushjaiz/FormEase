"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    !path.includes("aiform") && (
      <div className="p-3 px-5 border-b shadow-sm">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            style={{
              color: "#7557F1",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: '10px',
            }}
          >
            FormEase
          </Link>
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <Link href={"/dashboard"}>
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <SignInButton>
              <Button asChild>
                <Link href="/sign-in">Get Started</Link>
              </Button>
            </SignInButton>
          )}
        </div>
      </div>
    )
  );
}

export default Header;
