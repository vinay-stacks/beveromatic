import React from 'react'
import { Home, Info, Box, HeartHandshake, Phone, FileText, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    const services = [
        'CAD Designing',
        'RPT',
        'Fabrication',
        'Feasibility study',
        'Electronics',
        'Molding'
    ]

    const products = [
        { name: 'Beveromatic 3 Lane Vending Machine', linkURL:'beveromatic-3-lane-vending-machine' },
        { name: 'Beveromatic 4 Lane Vending Machine', linkURL:'beveromatic-4-lane-vending-machine' },
        { name: 'Beveromatic 3DX 3 Lane Vending Machine', linkURL:'beveromatic-3dx-3-lane-vending-machine' },
        { name: 'Beveromatic 2 Lane Vending Machine', linkURL:'beveromatic-2-lane-vending-machine' },
    ];

    return (
        <footer className="bg-[url('/bg/footer-bg.webp')] bg-cover bg-right text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-[#f26522] text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-white text-sm leading-relaxed">
                            Beveromatic is a leading manufacturer of tea and coffee vending machines, 
                            offering cutting-edge technology, superior quality, and cost-effective 
                            solutions for offices, retail spaces, hotels, and institutions. With over 
                            25 years of experience.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a target='_blank' href="https://www.facebook.com/beveromatic" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a target='_blank' href="https://x.com/beveromatic" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a target='_blank' href="https://www.instagram.com/beveromatic/" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#f26522] text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white hover:text-[#f26522] transition-colors flex items-center gap-2">
                                    <Home size={16} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white hover:text-[#f26522] transition-colors flex items-center gap-2">
                                    <Info size={16} />
                                    About Us
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/products" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <Box size={16} />
                                    Products
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/services" className="text-white hover:text-[#f26522] transition-colors flex items-center gap-2">
                                    <HeartHandshake size={16} />
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-[#f26522] transition-colors flex items-center gap-2">
                                    <Phone size={16} />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[#f26522] text-2xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a className="text-white hover:text-[#f26522] transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-[#f26522] text-2xl font-bold mb-4">Products</h3>
                        <ul className="space-y-2">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <Link href={`/product/${product.linkURL}`} className="text-white hover:text-[#f26522] transition-colors">
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-[#f26522]/30">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-gray-100 text-sm text-center md:text-left">
                            Copyright © 2025 Beveromatic. All Rights Reserved.
                        </p>
                        {/* <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Terms of Service
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer