'use client'
import { Box, Building2, Coffee, Container, Droplet, Gauge, Monitor, Power, Scale, Settings, Star, Thermometer, Timer, Zap } from 'lucide-react';
import React from 'react'

const Beveromatic4LaneVending = () => {
    const TableRow = ({ icon: Icon, label, value, highlight = false }) => (
        <tr className={`border-b border-gray-100 ${highlight ? 'bg-[#3D1808]/5' : ''}`}>
            <td className="py-4 pl-6 pr-4 flex items-center gap-3">
                <Icon size={20} className="text-[#3D1808]" />
                <span className="font-medium text-gray-700">{label}</span>
            </td>
            <td className="py-4 px-4 text-gray-600">{value}</td>
        </tr>
    );
    const handleWhatsAppInquiry = (productName) => {
        const message = `Hi, I'm interested in the Beveromatic 4 Lane Vending Machine. Can you provide more information?`;
        const whatsappUrl = `https://wa.me/+919873903766?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#3D1808] to-[#2a1106] text-white py-28">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Vending Machines</span>
                                    <span className="text-white/60">•</span>
                                    <span className="text-white/60">BV04P</span>
                                </div>
                                <h1 className="text-4xl font-bold">Beveromatic 4 Lane Vending Machine</h1>
                                <p className="text-white/80 text-lg leading-relaxed">Beveromatic 4 is a multi-beverage vending machine that delivers a smooth and consistent taste experience. Designed for high footfall areas, it serves four different hot beverage options at the touch of a button.</p>
                                <button
                                    onClick={() => handleWhatsAppInquiry()}
                                    className="mt-6 bg-white text-[#3D1808] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                                >
                                    Get Quote
                                    <Star size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 p-8">
                                <img
                                    src={`/productImage/2.jpg`}
                                    alt='Beveromatic 3 Lane Vending Machine'
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Perfect For Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Perfect For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center">
                            <Building2 className="text-[#3D1808] mx-auto mb-3" size={24} />
                            <span className="text-gray-700 font-medium">Corporates</span>
                        </div>
                        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center">
                            <Building2 className="text-[#3D1808] mx-auto mb-3" size={24} />
                            <span className="text-gray-700 font-medium">Retail Stores</span>
                        </div>
                        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 rounded-xl text-center">
                            <Building2 className="text-[#3D1808] mx-auto mb-3" size={24} />
                            <span className="text-gray-700 font-medium">Co-Working Spaces</span>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                                    <Star className="text-[#3D1808]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">four_beverage_selections</h3>
                                    <p className="text-gray-600">Four Beverage Selections – Perfect for diverse preferences",</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                                    <Star className="text-[#3D1808]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">efficient_heating_system</h3>
                                    <p className="text-gray-600">Efficient Heating System – Maintains optimal temperature</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                                    <Star className="text-[#3D1808]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">stylish_sturdy_build</h3>
                                    <p className="text-gray-600">Stylish & Sturdy Build – Enhances workplace aesthetics</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#3D1808]/5 rounded-lg">
                                    <Star className="text-[#3D1808]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">fast_dispensing_technology</h3>
                                    <p className="text-gray-600">Fast Dispensing Technology – Reduces waiting time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Specifications */}
                <div className="bg-white mb-10 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <Settings className="text-[#3D1808]" />
                            Technical Specifications
                        </h2>
                    </div>
                    <table className="w-full">
                        <tbody>
                            <TableRow icon={Coffee} label="Drink Options" value='4 Options' highlight />
                            <TableRow icon={Droplet} label="Hot Water" value={'Available'} />
                            <TableRow icon={Container} label="Boiler Capacity" value={'3.5 Liter'} highlight />
                            <TableRow icon={Power} label="Boiler Heater" value={'1750 W'} />
                            <TableRow icon={Timer} label="Start Up Time" value={'Up to 10 Minutes'} highlight />
                            <TableRow icon={Droplet} label="Water Input" value={'With Pump'} />
                            <TableRow
                                icon={Container}
                                label="Powder Canisters"
                                value={`4 canisters, 1 Kg each`}
                                highlight
                            />
                            <TableRow
                                icon={Settings}
                                label="Gear Motor"
                                value={`4 motors, 100 RPM ± 5%`}
                            />
                            <TableRow
                                icon={Gauge}
                                label="Mixing Motor"
                                value={`4 motors, 15000 RPM ± 10%`}
                                highlight
                            />
                            <TableRow icon={Scale} label="Dispensing Height" value={'110 mm'} />
                            <TableRow icon={Coffee} label="Dispensing Rate" value={'5 Cups/min'} highlight />
                            <TableRow icon={Monitor} label="Display" value={'LCD display module with yellow backlight (2 x 16 line Display)'} />
                            <TableRow icon={Settings} label="Interface" value={'Keypad or button panel'} highlight />
                            <TableRow icon={Coffee} label="Cup Count" value={'Available'} />
                            <TableRow icon={Thermometer} label="Temperature Setting" value={'Available'} highlight />
                            <TableRow icon={Droplet} label="Rinse" value={'Hourly Rinse Available'} />
                        </tbody>
                    </table>
                </div>

                {/* Electrical Specifications */}
                <div className="bg-white mb-10 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <Zap className="text-[#3D1808]" />
                            Electrical Specifications
                        </h2>
                    </div>
                    <table className="w-full">
                        <tbody>
                            <TableRow icon={Power} label="Power Supply" value={'230V AC / 50 Hz / 1750 W'} />
                        </tbody>
                    </table>
                </div>

                {/* Unit Specifications */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <Box className="text-[#3D1808]" />
                            Unit Specifications
                        </h2>
                    </div>
                    <table className="w-full">
                        <tbody>
                            <TableRow
                                icon={Box}
                                label="Unpacked Dimensions"
                                value={`330 mm × 510 mm × 630 mm`}
                                highlight
                            />
                            <TableRow
                                icon={Box}
                                label="Packed Dimensions"
                                value={`440 mm × 610 mm × 740 mm`}
                            />
                            <TableRow icon={Scale} label="Net Weight" value={'24.5 Kg'} highlight />
                            <TableRow icon={Scale} label="Gross Weight" value={'26.5 Kg'} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Beveromatic4LaneVending
