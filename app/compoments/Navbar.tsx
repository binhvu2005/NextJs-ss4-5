"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const pathname = usePathname(); 

    return (
        <nav>
            <ul>
                <li className={pathname === '/' ? "active" : ''}>
                    <Link href="/">Home</Link>
                </li>
                <li className={pathname === '/contact' ? "active" : ''}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={pathname === '/about' ? "active" : ''}>
                    <Link href="/about">About</Link>
                </li>
                <li className={pathname === '/login' ? "active" : ''}>
                    <Link href="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}
