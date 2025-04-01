'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Info, Box, HeartHandshake, Phone, FileText, Search, Facebook, Twitter, Instagram, MailSearch, Clock5} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const products = [
    { name: '3 Lane Vending Machine', linkURL:'beveromatic-3-lane-vending-machine' },
    { name: '4 Lane Vending Machine', linkURL:'beveromatic-4-lane-vending-machine' },
    { name: '3DX 3 Lane Vending Machine', linkURL:'beveromatic-3dx-3-lane-vending-machine' },
    { name: '2 Lane Vending Machine', linkURL:'beveromatic-2-lane-vending-machine' },
];

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[white] backdrop-blur-md' : 'bg-[white]'
            }`}>
            {/* Top Bar */}
            <div className="hidden lg:block bg-gradient-to-r from-[#3a1b0e] to-[#4b2514] text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-2 flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <Phone size={16} className="mr-2 text-[#f26522]" />
                            +91 98996 86468
                        </span>
                        <span>|</span>
                        <span className="flex items-center">
                         <MailSearch size={16} className="mr-2 text-[#f26522]" /> 
                            contact@example.com
                        </span>
                        <span>|</span>
                        <span className='flex items-center'>
                        <Clock5 size={16} className="mr-2 text-[#f26522]" /> Mon - Sat: 9:00 AM - 6:00 PM
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link target='_blank' href="https://www.facebook.com/beveromatic" className="text-[#f26522] hover:text-white transition-colors">
                        <Facebook size={18} />
                        </Link>
                        <span>|</span>
                        <Link target='_blank' href="https://x.com/beveromatic" className="text-[#f26522] hover:text-white transition-colors">
                            <Twitter size={18} />
                        </Link>
                        <span>|</span>
                        <Link target='_blank' href="https://www.instagram.com/beveromatic/" className="text-[#f26522] hover:text-white transition-colors">
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`shadow-lg transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={'/'} className="flex-shrink-0">
                            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BEVEROMATIC
              </h1> */}
                            <Image src="/logo.webp" alt="Beveromatic Logo" width={140} height={130} />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Home
                            </Link>
                            <Link href="/about" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                About Us
                            </Link>

                            {/* Products Dropdown */}
                            <div className="relative group">
                                <button className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity flex items-center">
                                    Products
                                    <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                                </button>

                                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full -left-4 pt-4 transition-all duration-300">
                                    <div className="bg-[white] border-[black] rounded-xl shadow-xl overflow-hidden w-72">
                                        <div className="p-2">
                                            {products.map((product, index) => (
                                                <Link
                                                    key={index}
                                                    href={`/${product.linkURL}`}
                                                    className="block px-4 py-3 rounded-lg text-black font-semibold hover:text-white opacity-80 hover:opacity-100 hover:bg-[#190E0A] transition-all duration-200"
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/services" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Services
                            </Link>
                            <Link href="/contact" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Contact
                            </Link>
                        </nav>

                        {/* Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* <button className="p-2 text-white opacity-80 hover:opacity-100 transition-opacity">
                <Search size={20} />
              </button> */}
                            <Link
                                href="/pdf/broucher.pdf"
                                target="_blank"
                                className="bg-[#f26522] hover:bg-[#3D1808] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Download Brochure
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#3D1808] hover:text-purple-400 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed h-[90vh] inset-0 bg-black backdrop-blur-md transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="h-full flex flex-col">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-white hover:text-[#190F0B] transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-4">
                        <Link href="/" className="block text-2xl font-medium text-white opacity-80 hover:opacity-100 transition-opacity">
                            Home
                        </Link>
                        <Link href="/about" className="block text-2xl font-medium text-white opacity-80 hover:opacity-100 transition-opacity">
                            About Us
                        </Link>

                        {/* Mobile Products Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                className="flex items-center justify-between w-full text-2xl font-medium text-white opacity-80 hover:opacity-100 transition-opacity"
                            >
                                Products
                                <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`mt-2 space-y-2 transition-all duration-300 ${isMobileProductsOpen ? 'block' : 'hidden'}`}>
                                {products.map((product, index) => (
                                    <Link
                                        key={index}
                                        href={`/product/${product.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-")}`}
                                        className="block pl-4 py-2 text-lg text-white opacity-60 hover:opacity-100 transition-opacity"
                                    >
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/services" className="block text-2xl font-medium text-white opacity-80 hover:opacity-100 transition-opacity">
                            Services
                        </Link>
                        <Link href="/contact" className="block text-2xl font-medium text-white opacity-80 hover:opacity-100 transition-opacity">
                            Contact
                        </Link>
                    </nav>

                    <div className="p-4">
                        <Link
                            href="/pdf/broucher.pdf"
                            target="_blank"
                            className="block w-full bg-[#3D1808] hover:bg-[#3D1808] text-white text-center px-6 py-3 rounded-sm font-medium transition-all duration-300"
                        >
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default App;