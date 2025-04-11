"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    // console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.png"} width={200} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <Link href={"/dashboard"}>
          <li
            className={`btn
            ${path == "/dashboard" && "text-primary font-bold"}`}
          >
            Dashboard
          </li>
        </Link>

        <Link href={"/dashboard/questions"}>
          <li
            className={`btn
            ${path == "/dashboard/questions" && "text-primary font-bold"}`}
          >
            Questions
          </li>
        </Link>

        <Link href={"/dashboard/upgrade"}>
          <li
            className={`btn
            ${path == "/dashboard/upgrade" && "text-primary font-bold"}`}
          >
            Upgrade
          </li>
        </Link>

        <Link href={"/dashboard/how"}>
          <li
            className={`btn
            ${path == "/dashboard/how" && "text-primary font-bold"}`}
          >
            How it Works?
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
