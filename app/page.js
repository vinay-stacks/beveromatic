'use client'
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ThumbsUp, Quote, Coffee, Timer, Award, Sparkles, MessageCircle, ArrowRight, Clock, Tag, Volume2, VolumeX, Play, Send, MessageSquare, Mail, User, MapPin, Phone } from 'lucide-react'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const [muted, setMuted] = useState(true)
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    arrows: true, // This will remove the next and previous buttons
    autoplay: true, // Enables autoplay
    autoplaySpeed: 6000
  };

  var settingsIcon = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      name: "Beveromatic 3 Lane Vending Machine",
      image: "1.jpg",
      description: "Compact, efficient, three-lane beverage dispenser.",
      link: 'beveromatic-3-lane-vending-machine'
    },
    {
      id: 2,
      name: "Beveromatic 4 Lane Vending Machine",
      image: "2.jpg",
      description: "High-capacity, four-lane vending solution.",
      link: 'beveromatic-4-lane-vending-machine'
    },
    {
      id: 3,
      name: "Beveromatic 3DX 3 Lane Vending Machine",
      image: "3.jpg",
      description: "beveromatic-3dx-3-lane-vending-machine",
      link: ''
    },
    {
      id: 4,
      name: "Beveromatic 2 Lane Vending Machine",
      image: "4.jpg",
      description: "Space-saving, quick two-lane dispenser.",
      link: 'beveromatic-2-lane-vending-machine'
    }
  ];

  const handleWhatsAppInquiry = (productName) => {
    const message = `Hi, I'm interested in the ${productName}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/+919873903766?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const videos = [
    {
      url: "/video/v1.mp4",
      title: "City Traffic"
    },
    {
      url: "/video/v2.mp4",
      title: "Ocean Waves"
    },
    {
      url: "/video/v3.mp4",
      title: "Forest Stream"
    },
    {
      url: "/video/v4.mp4",
      title: "Space Stars"
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
        <link rel="icon" href="https://beveromatic.com/wp-content/uploads/2025/01/cropped-favicon-1-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://beveromatic.com/wp-content/uploads/2025/01/cropped-favicon-1-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://beveromatic.com/wp-content/uploads/2025/01/cropped-favicon-1-180x180.png" />
      </Head>
      <main className="mt-22 sm:mt-26 md:mt-28 lg:mt-36 xl:mt-40">
        <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Slider {...settings}>
              <div className="w-full h-[170px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] mb-[-8px] rounded-2xl overflow-hidden">
                <Image className="w-full h-full" width={2100} height={700} src={'/sliderImage/b1.png'} alt="Slide 1" />
              </div>
              <div className="w-full h-[170px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] mb-[-8px] rounded-2xl overflow-hidden">
                <Image className="w-full h-full" width={2100} height={700} src={'/sliderImage/b2.png'} alt="Slide 2" />
              </div>
            </Slider>
          </div>
        </section>
        {/* <section className="w-full bg-[#7a4433]">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-10">
            <Slider {...settingsIcon}>
              {["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg", "10.svg", "11.svg"].map((image, index) => (
                <div key={index} className="w-full forDisplayFlex h-[130px] flex items-center justify-center">
                  <Image className="h-[130px] rounded-md object-contain w-[50%] border border-[#fff] p-[20px] " width={140} height={130} src={`/sliderLogo/${image}`} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                About <span className="text-[#AC4C2D]">Beveromatic</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="text-black flex items-center gap-2">
                  <Coffee className="text-[#AC4C2D]" size={20} />
                  Premium Vending Machines
                </span>
                <span className="text-black flex items-center gap-2">
                  <Sparkles className="text-[#AC4C2D]" size={20} />
                  High-Quality Beverages
                </span>
                <span className="text-black flex items-center gap-2">
                  <Timer className="text-[#AC4C2D]" size={20} />
                  25+ Years of Expertise
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative">
              <div className="bg-[#7A4433] backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Award className="text-[#AC4C2D] w-12 h-12" />
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
                  We at Beveromatic, specialize in providing top-of-the-line vending machines that serve
                  premium tea and coffee blends, ensuring every cup is just the way you like it. Whether
                  you&apos;re looking for an office solution, a café upgrade, or a convenient refreshment
                  option for your business, we&apos;ve got you covered.
                </p>
              </div>

              {/* Stats or Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-[#7A4433] backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
                  <Coffee className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="text-white text-lg font-semibold mb-2">Premium Quality</h3>
                  <p className="text-white">Top-tier beverages with consistent taste</p>
                </div>
                <div className="bg-[#7A4433] backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
                  <Timer className="w-8 h-8 text-[#AC4C2D] mx-auto mb-4" />
                  <h3 className="text-white text-lg font-semibold mb-2">25+ Years</h3>
                  <p className="text-white">Of industry experience and expertise</p>
                </div>
                <div className="bg-[#7A4433] backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
                  <Sparkles className="w-8 h-8 text-[#AC4C2D] mx-auto mb-4" />
                  <h3 className="text-white text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-white">Latest technology in vending solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-screen  bg-[#7A4433]">
          <section className="w-full py-24">
            <div className="max-w-7xl px-6 sm:px-6 lg:px-10 mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
                <p className="text-white max-w-2xl mx-auto">
                  Discover our carefully curated collection of premium furniture pieces
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-[#f7f0e133] backdrop-blur-sm rounded-3xl overflow-hidden hover:border-[#703728] transition-all duration-500"
                  >
                    <div className="flex flex-col lg:flex-row h-full">
                      <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={`/productImage/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          width={600} height={450}
                        />
                        <div className="absolute top-4 left-4 bg-[#170A04] text-white text-sm px-3 py-1 rounded-full">
                          Vending
                        </div>
                      </div>

                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-[white] transition-colors">
                              {product.name}
                            </h3>
                            <span className="flex items-center text-yellow-400">
                              <Star size={16} className="fill-current" />
                              <span className="ml-1 text-sm">{5}</span>
                            </span>
                          </div>

                          <p className="text-white mb-6">{product.description}</p>

                          {/* <div className="flex items-center space-x-4 mb-6">
                          <div className="flex items-center text-emerald-400">
                            <Clock size={16} />
                            <span className="ml-2 text-sm">{product.availability}</span>
                          </div>
                          <div className="flex items-center text-purple-400">
                            <Tag size={16} />
                            <span className="ml-2 text-2xl font-bold">{product.price}</span>
                          </div>
                        </div> */}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleWhatsAppInquiry(product.name)}
                            className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#170A04] to-[#251108] text-white py-3 px-2 rounded-xl hover:from-[#170A04] hover:to-[#251108] transition-all duration-300 shadow-lg shadow-[#ac4d2d41]"
                          >
                            <MessageCircle size={20} className="mr-1" />
                            <span className=" text-sm whitespace-nowrap">Inquire Now</span>
                          </button>
                          <Link href={`/${product.link}`} className="flex-1 flex items-center justify-center bg-slate-800 text-white py-3 px-6 rounded-xl hover:bg-slate-700 transition-all duration-300">
                            <span className=" text-sm whitespace-nowrap">View Details</span>
                            <ArrowRight size={18} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-5 flex flex-col items-center">
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
                    <h3 className="text-xl font-semibold text-white mb-2">Happy Customers</h3>
                    <p className="text-white mb-4 text-center">Over 5000+ happy customers across the Country</p>
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
                    <h3 className="text-xl font-semibold text-white mb-2">Delivery</h3>
                    <p className="text-white mb-4 text-center">Get your machines delivered at your doorstep</p>
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
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Solutions</h3>
                    <p className="text-white mb-4 text-center">Customize your machines with our IOT solutions</p>
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
                    <h3 className="text-xl font-semibold text-white mb-2">Beverages</h3>
                    <p className="text-white mb-4 text-center">Get your favourite and high quality beverages</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-[#7a4433]">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-[#251913] opacity-50" />
                </div>
                <p className="text-[#3D1808] mb-6">
                  &quot;Beveromatic&apos;s coffee vending machines have transformed our office culture. The quality of coffee is exceptional, and the machine&apos;s reliability is outstanding. Our employees love having premium coffee available 24/7!&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">Sarah Johnson</h4>
                    <p className="text-sm text-black">Office Manager at TechCorp</p>
                  </div>
                  <Coffee className="w-8 h-8 text-[#251913] opacity-50" />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-[#251913] opacity-50" />
                </div>
                <p className="text-[#3D1808] mb-6">
                  &quot;Installing Beveromatic machines in our hotel lobby was one of the best decisions we made. The modern design fits perfectly with our aesthetic, and guests frequently compliment the coffee quality.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">Michael Chen</h4>
                    <p className="text-sm text-black">Hotel Operations Director</p>
                  </div>
                  <ThumbsUp className="w-8 h-8 text-[#251913] opacity-50" />
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-[#251913] opacity-20" />
                </div>
                <p className="text-[#3D1808] mb-6">
                  &quot;The maintenance support from Beveromatic is exceptional. Their machines are not only stylish but also incredibly reliable. We&apos;ve seen a 40% increase in beverage sales since switching to Beveromatic.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">David Martinez</h4>
                    <p className="text-sm text-black">Retail Store Manager</p>
                  </div>
                  <Coffee className="w-8 h-8 text-[#251913] opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Featured <span className="text-[#251913]">Videos</span></h2>
              <p className="text-black">Experience our stunning collection of visual stories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                    src={video.url}
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setMuted(!muted)}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                        >
                          {muted ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#150702] mb-6">Get in Touch</h2>
                  <p className="text-[#150702] text-lg">Have a question or want to work together? Drop us a message!</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 ">
                    <div className="bg-[#150702] p-4 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Email</h3>
                      <p className="text-[#150702]">contact@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#150702] p-4 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Phone</h3>
                      <p className="text-[#150702]">+91 98996 86468</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#150702] p-4 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Location</h3>
                      <p className="text-[#150702]">123 Creative Street, Design City</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#7A4433] p-8 rounded-2xl shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-gray-500" />
                    </div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#150702] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-[#150702] hover:to-[#150702] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#150702] focus:ring-offset-2 focus:ring-offset-[#3d1a0f]"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
