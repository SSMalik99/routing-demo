"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = [
  {name: "Register", href :"/register"},
  {name: "Login", href :"/login"},
  {name: "Forgot Password", href :"/forgot-password"}
]

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [input, setInput] = useState("")

    const pathName = usePathname();

    return (
      
      <div>

        <div className="p-1">
          <input type="text" className="border border-orange-400" value={input} onChange={e => setInput(e.target.value)} />
        </div>
        {NavLinks.map(link => {
          const isActive = pathName.startsWith(link.href);
          return(
            <Link href={link.href} className={isActive? "font-bold mr-4" : 'text-blue-500 mr-4'}  key={link.name}>{link.name}</Link>
          );
        })}
          
          {children}
      </div>
    )
  }
  