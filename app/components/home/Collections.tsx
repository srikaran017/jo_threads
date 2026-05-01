"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

const collections = [
  {
    title: "Jhumka",
    desc: "Elegant handcrafted traditional earrings for every occasion.",
    image: "/collections/jhumka.jpg",
  },
  {
    title: "Bracelets",
    desc: "Luxury bracelets designed for modern elegance.",
    image: "/collections/bracelet.jpg",
  },
  {
    title: "Invisible Chain",
    desc: "Minimal invisible chains with premium finish.",
    image: "/collections/chain.jpg",
  },
  {
    title: "Korean Collection",
    desc: "Premium Korean-style trendy jewelry collections.",
    image: "/collections/korean.jpg",
  },
  {
    title: "Offers",
    desc: "Special handcrafted collections and exclusive offers.",
    image: "/collections/offers.jpg",
  },
];

export default function Collections() {
  return (
    <section className="overflow-hidden bg-[#faf7f2] py-16">

      {/* HEADING */}
      <div className="mb-14 text-center">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-700">
          Premium Jewelry
        </p>

        <h2 className="text-4xl font-semibold uppercase tracking-[0.15em] text-purple-900">
          Collections
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-4">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {collections.map((item) => (
            <SwiperSlide key={item.title}>

              <div className="group flex flex-col items-center">

                {/* IMAGE */}
                <div className="relative h-[320px] w-[220px] overflow-hidden rounded-full border-4 border-white shadow-2xl ring-2 ring-purple-200 transition duration-500 group-hover:scale-105 group-hover:ring-purple-700">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* TEXT */}
                <div className="mt-6 text-center">

                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-900">
                    {item.title}
                  </h3>

                  <p className="max-w-[220px] text-xs leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
