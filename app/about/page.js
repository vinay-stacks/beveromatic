'use client';

import { Users, Truck, Cpu, Coffee, Heart, Star } from 'lucide-react';
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
    <main className="min-h-screen text-white bg-[#fff2eb] bg-[url('/bg/breadcrumb-bg.webp')] bg-blend-multiply bg-center mt-15 md:mt-26">
      {/* Hero Section */}
      <section className="relative py-36 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[#3d180870]">
          <Image
            src="/bg/breadcrumb-bg.webp"
            alt="Background Image"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            width={2400}
            height={430}
          />
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-4">
            <nav aria-label="Breadcrumb" className="text-black">
              <ol className="flex space-x-2">
                <li>
                  <Link href="/" className="hover:text-[#f26522]">Home</Link>
                </li>
                <li>
                  <span className="text-gray-500">/</span>
                </li>
                <li>
                  <Link href="/about" className="text-[#f26522]">About</Link>
                </li>
              </ol>
            </nav>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-6xl font-extrabold mb-6 text-[#3D1808]">
              About Beveromatic
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


      {/* Mission Section */}
      {/* <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-600 rounded-3xl -rotate-6 blur-xl opacity-20" />
              <Image
                src="/productImage/3.jpg"
                alt="Coffee machine craftsmanship"
                className="relative rounded-3xl shadow-2xl"
                width={300} height={190}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#3D1808]">
                Our Mission
              </h2>
              <p className="text-black text-lg leading-relaxed mb-6">
                At Beveromatic, we specialize in providing top-of-the-line vending machines that serve premium tea and coffee blends, ensuring every cup is just the way you like it.
              </p>
              <p className="text-black text-lg leading-relaxed">
                Our mission right from inception has been to introduce our customers to some of the finest quality products at the best possible prices. We follow certain principles that allow us to push ourselves forward and excel in the field of manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className='py-16 md:py-14 bg-white relative overflow-hidden'>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <div className='flex flex-col gap-6 text-black'>
            <h2 className='text-[#000] text-center font-bold text-6xl'>About <span className="text-[#AC4C2D]">Us</span></h2>
            <p className='text-[17px] text-center mb-1.5'>We at Beveromatic, specialize in providing top-of-the-line vending machines that serve premium tea and coffee blends, ensuring every cup is just the way you like it. Whether you’re looking for an office solution, a café upgrade, or a convenient refreshment option for your business, we’ve got you covered.</p>
            <p className='text-[17px] text-center mb-1.5'>Our mission right from inception has been to introduce our customers to some of the finest quality products at the best possible prices. At Beveromatic, we follow certain principles that allow us to push ourselves forward and excel in the field of manufacturing.</p>
            <p className='text-[17px] text-center mb-1.5'>With over 25 Years of experience in the Tea and Coffee Vending industry, we ensure that all our products are made using the best components that are sourced using environment friendly measures. Our Goals have been clear where we intend to focus on improving our existing line of products along with innovation in new product development.</p>
            <p className='text-[17px] text-center mb-1.5'>Our team brings a rich and extensive experience in delivering large and complex projects in manufacturing. We offer next generation technology and services with high quality standards to optimize investments and resources.</p>
            <p className='text-[17px] text-center mb-1.5'>At Beveromatic, we have the right people, collaborations with right partners and the flexibility to expand quickly based on consumer demand to serve our business partners effectively. In addition, our customer support team is always ready to assist with installation, maintenance, and any other needs you may have, ensuring that your vending experience is smooth and hassle-free.</p>
            <p className='text-[17px] text-center mb-1.5'>Join us in making your tea and coffee breaks better, more efficient, and more enjoyable—one cup at a time.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[#7A4433]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              25+ Years of Excellence
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              With over 25 Years of experience in the Tea and Coffee Vending industry, we ensure that all our products are made using the best components that are sourced using environment friendly measures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Happy Customers', desc: 'Over 5000 Happy Customers across the Country' },
              { icon: Truck, title: 'Delivery', desc: 'Get your machines delivered at your doorstep' },
              { icon: Cpu, title: 'Tech Solutions', desc: 'Customize your machines with our IOT solutions' },
              { icon: Coffee, title: 'Beverages', desc: 'Get your favourite and high quality beverages' },
            ].map((stat, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 transition-all duration-300 text-center">
                <div className="bg-[#3D1808] p-4 rounded-xl inline-block mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D1808] mb-2">{stat.title}</h3>
                <p className="text-black">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className=" py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#3D1808]">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#7A4433] rounded-2xl p-8">
              <p className="text-white leading-relaxed mb-6">
                Our team brings a rich and extensive experience in delivering large and complex projects in manufacturing. We offer next generation technology and services with high quality standards to optimize investments and resources.
              </p>
              <p className="text-white leading-relaxed">
                At Beveromatic, we have the right people, collaborations with right partners and the flexibility to expand quickly based on consumer demand to serve our business partners effectively.
              </p>
            </div>
            <div className="bg-[#7A4433] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Customer Support</h3>
              <p className="text-white leading-relaxed">
                Our customer support team is always ready to assist with installation, maintenance, and any other needs you may have, ensuring that your vending experience is smooth and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 md:py-24 bg-[#7A4433]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#3D1808]">
            Join Our Journey
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Join us in making your tea and coffee breaks better, more efficient, and more enjoyable—one cup at a time.
          </p>
          <Link href={'/contact'} className="group relative inline-flex items-center gap-2 bg-[#3D1808] px-8 py-4 rounded-full font-semibold text-white hover:opacity-90 transition-opacity">
            Get Started
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </section> */}
    </main>
  );
}