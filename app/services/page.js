'use client';

import { Coffee, Settings, PenTool as Tool, Shield, Cloud, Clock, Cpu, Leaf, Building2, UtensilsCrossed, Hotel, Factory, Coffee as CoffeeShop, Users, ChefHat, Wrench, CheckCircle2, Zap, HeartHandshake, Cog, Hammer, ShieldCheck, CircuitBoard, TestTube, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <main className="min-h-screen mt-15 md:mt-26 bg-gray-500 text-white">
      {/* Hero Section */}
      <section className="relative py-22  overflow-hidden">
        <div className="absolute inset-0 bg-[#3d180870]">
          <Image
            src="/bgImage/b2.avif"
            alt="Background Image"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            width={2400}
            height={430}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-4">
            <nav aria-label="Breadcrumb" className="text-white">
              <ol className="flex space-x-2">
                <li>
                  <Link href="/" className="hover:text-amber-400">Home</Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <Link href="/about" className="text-amber-400">Services</Link>
                </li>
              </ol>
            </nav>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-6xl font-extrabold mb-6 text-white">
              Services
            </h1>
            {/* <div className="flex gap-4 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-4">
                    Offering premium vending machines and high-quality beverages with over 25 years of expertise in the industry.
                  </p> */}
          </div>
        </div>
      </section>

      <section className="md:py-10! py-14! pb-0! bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <h2 className='text-[20px] text-center text-[#3D1808]'>At Beveromatic, we provide high-quality, hassle-free tea and coffee vending machine solutions designed to keep your office, workplace, or commercial space fueled throughout the day. Whether you need a single machine or a comprehensive vending service for your entire organization, we’ve got you covered with reliable, easy-to-use, and customizable vending options.</h2>
        </div>
      </section>

      {/* Comprehensive Approach Section */}
      <section className="py-16 md:py-24 pt-0! bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#3D1808]">
            From Concept to Completion
          </h2>
          <ul className='grid grid-cols-1 gap-2 pl-6'>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Product Design Blueprint:</span> A detailed blueprint outlining the vending machine’s specifications and features.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Rapid Prototyping (RPT):</span> Development</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Mock-Up rendering:</span> A realistic rendering of the final product for visualization and client approval.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Quality Control:</span> Conducting thorough failure mode and effects analysis to identify and mitigate potential risks.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Sheet Metal Fabrication:</span> Precision engineering for efficient sheet metal fabrication.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Mold Design and Development:</span> Molding Expertise and creating custom molds for producing high-quality vending machine components.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Product Electrical Safety:</span> Ensuring the vending machine meets all safety and food-grade standards.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Electronics and Hardware Development:</span> Integrating advanced electronics and hardware for optimal performance.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Software and IoT Solutions:</span> Connecting the vending machine to a cloud-based system for remote monitoring and management.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Lifecycle Tests Durability and Reliability:</span> Rigorous testing to ensure the vending machine’s longevity and performance.</li>
            <li className='text-black list-disc'><span className='font-bold text-[18px]'>Reliability Tests:</span> Conducting stability and performance tests to guarantee optimal functionality.</li>
          </ul>
        </div>
      </section>

      {/* Vending Solutions Section */}
      <section className="py-16 md:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#7A4433]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">Vending Solutions for our Clients</h2>
          <div className='w-full grid grid-cols-1 gap-4'>
            <div className='grid grid-cols-1 gap-2'>
              <h2 className="text-xl font-bold mb-2 text-white">Tea & Coffee Vending Machine Solution</h2>
              <p className='mb-8'>We offer a variety of vending machines that serve premium coffee and tea options, ensuring your employees, clients, and guests enjoy the perfect cup every time. Choose from a range of models that fit your space and needs.</p>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="space-y-6">
                    {[
                      { icon: Coffee, text: 'Perfect cup every time' },
                      { icon: Users, text: 'User-friendly interface' },
                      { icon: CheckCircle2, text: 'Customizable options' },
                      { icon: Leaf, text: 'Energy-efficient' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl">
                        <div className="bg-[#3D1808] p-3 rounded-lg">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-black">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-600 rounded-3xl -rotate-6 blur-xl opacity-20" />
                  <Image
                    src="/productImage/1.jpg"
                    alt="Modern coffee machine"
                    className="relative rounded-3xl shadow-2xl"
                    width={400} height={100}
                  />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-2 mt-8'>
              <h2 className="text-xl font-bold mb-2 text-white">Installation & Setup</h2>
              <p className='mb-8'>Our team ensures that your vending machine is installed and ready to use with minimal disruption to your workspace. We’ll handle all aspects of the setup, from machine placement to testing, ensuring it’s fully functional from day one.</p>
            </div>

            <div className='grid grid-cols-1 gap-2'>
              <h2 className="text-xl font-bold mb-2 text-white">What we offer</h2>
              <ul className='pl-8'>
                <li className='mb-1 list-disc'>Expert installation by trained professionals</li>
                <li className='mb-1 list-disc'>Custom placement recommendations based on your space</li>
                <li className='mb-1 list-disc'>On-site support and consultation</li>
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-2'>
              <h2 className="text-xl font-bold mb-1 text-white">Maintenance & Support</h2>
              <p className='mb-2'>We provide ongoing maintenance services to ensure your vending machines are always running smoothly. Our team is available for regular check-ups and troubleshooting.</p>
              <ul className='pl-8'>
                <li className='mb-1 list-disc'>Rapid response for any technical issues</li>
                <li className='mb-1 list-disc'>Spare parts and replacement services</li>
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-2 mt-8'>
              <h2 className="text-xl font-bold mb-2 text-white">Customizable Vending Options</h2>
              <p className='mb-8'>Our machines can be customized to serve a range of beverages, including hot coffee, cappuccinos, lattes, espresso, chai, green tea, and more. You can even add flavors, such as vanilla, caramel, or chocolate, for a personalized touch.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Available Beverages */}
      <section className="py-16 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#3D1808]">
            Available Beverages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Adrak Elaichi Chai',
              'Honey Lemon Tea',
              'Kadha',
              'Masala Chai',
              'Adrak Chai',
              'Green Tea',
            ].map((beverage, index) => (
              <div key={index} className="group bg-[#3D1808] rounded-xl p-6 transition-all duration-300 cursor-pointer">
                <p className="text-center text-white transition-colors">{beverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 md:py-24 bg-[#7A4433]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 sm:px-4 lg:px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-white">
                Installation & Support
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: 'Expert Installation', desc: 'Professional setup with minimal disruption' },
                  { icon: Wrench, title: 'Regular Maintenance', desc: 'Scheduled check-ups and preventive care' },
                  { icon: Zap, title: 'Rapid Response', desc: '24/7 technical support and quick fixes' },
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 bg-white rounded-xl transition-all duration-300">
                    <div className="bg-[#3D1808] p-4 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#3D1808]">{item.title}</h3>
                      <p className="text-black">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#3D1808] rounded-3xl rotate-6 blur-xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-[#3D1808]">Business Solutions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, title: 'Office' },
                    { icon: CoffeeShop, title: 'Café' },
                    { icon: Hotel, title: 'Hotels' },
                    { icon: Factory, title: 'Industry' },
                    { icon: CoffeeShop, title: 'Coffee & Bakery' },
                    { icon: Hotel, title: 'Restaurant' },
                  ].map((item, index) => (
                    <div key={index} className="group p-4 bg-[#7A4433] rounded-xl transition-all duration-300 cursor-pointer">
                      <item.icon className="w-8 h-8 text-white mb-3 transition-colors" />
                      <p className="text-white">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 pb-0! bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 flex flex-col items-center">
          <h2 className=" text-center text-4xl font-bold text-black mb-4">Why Choose <span>Beveromatic</span></h2>
          <div className="flex flex-wrap justify-center w-full">

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#7A4433] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/advantageIcon/happy.svg"
                  alt="happyCustomers"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Quality & Taste</h3>
                  <p className="text-white mb-4 text-center">Use the best coffee beans and premixes and our machine will deliver an exceptional beverage every time.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#7A4433] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/advantageIcon/delivery.svg"
                  alt="happyCustomers"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
                  <p className="text-white mb-4 text-center">Our vending machines are built for long-lasting performance and minimal downtime.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#7A4433] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/advantageIcon/tech.svg"
                  alt="happyCustomers"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Convenience</h3>
                  <p className="text-white mb-4 text-center">24/7 access to hot and cold beverages ensures that your team stays energized throughout the day.</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-[#7A4433] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/advantageIcon/beverage.svg"
                  alt="happyCustomers"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
                  <p className="text-white mb-4 text-center">We offer energy-efficient machines to reduce power consumption and support sustainability.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#3D1808]">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
            Elevate your workplace beverage experience with our premium vending solutions.
          </p>
          <Link href={'/contact'} className="group relative inline-flex items-center gap-2 bg-[#3D1808] px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}