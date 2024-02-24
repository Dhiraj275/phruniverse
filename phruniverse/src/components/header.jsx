"use client"
import React from 'react'
import {toggleNav} from "@/script/main"
import Link from "next/link"
export default function Header(){
    return (
        <header>
            <div className="navbar">
                <h3 className="logo">Phruniverse</h3>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/videography">Videography</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="social-media">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div 
                onClick={toggleNav}
                 className="toggle-bar">
                    <i className="fa-solid fa-bars" />
                </div>
            </div>
        </header>
    )
}
