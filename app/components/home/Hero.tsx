"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2]">

      {/* BLUR BACKGROUNDS */}
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="absolute right-20 top-20 h-32 w-32 rounded-full bg-orange-100/40 blur-3xl" />

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-4 py-10">

        {/* LEFT SMALL CARD */}
        <div className="absolute left-0 top-10 z-10 hidden overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-[60px] rounded-bl-[60px] border border-black/10 bg-white p-2 shadow-2xl sm:block md:h-[300px] md:w-[220px]">

          <div className="relative h-full w-full overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-[55px] rounded-bl-[55px]">
            <Image
              src="/lefthomeneck.jpg"
              alt="Jewelry"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative z-20 flex flex-col items-center">

          <div className="relative h-[320px] w-[240px] overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-[120px] rounded-bl-[120px] border border-black/10 bg-white p-2 shadow-2xl sm:h-[500px] sm:w-[380px] md:h-[620px] md:w-[500px]">

            <div className="relative h-full w-full overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-[110px] rounded-bl-[110px]">
              <Image
                src="/hero.jpg"
                alt="Hero"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* MOBILE TEXT */}
          <div className="mt-10 text-center lg:hidden">

            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Handmade Luxury
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
              Expressions of{" "}
              <span className="italic text-purple-700">
                Elegance
              </span>
            </h1>

            <button className="mt-8 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-xl transition hover:scale-105">

              Explore Collection

              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RIGHT TOP TEXT */}
        <div className="absolute right-0 top-20 z-30 hidden max-w-sm text-right lg:block">

          <h1 className="text-5xl font-semibold italic leading-tight text-neutral-900">

            Unveil the Artistry

            <span className="mt-3 block bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
              in Our Jewelry Collection
            </span>
          </h1>
        </div>

        {/* RIGHT BOTTOM CARD */}
        <div className="absolute bottom-0 right-0 z-10 hidden overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-[60px] rounded-bl-[60px] border border-black/10 bg-white p-2 shadow-2xl sm:block md:h-[260px] md:w-[220px]">

          <div className="relative h-full w-full overflow-hidden rounded-tl-md rounded-br-md rounded-tr-[55px] rounded-bl-[55px]">
            <Image
              src="/righthomehand.jpg"
              alt="Accessories"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </div>

        {/* LEFT BOTTOM CONTENT */}
        <div className="absolute bottom-10 left-0 z-30 hidden max-w-sm lg:block">

          <h2 className="text-5xl font-semibold leading-tight text-neutral-900">

            Expressions of

            <span className="block italic text-purple-700">
              Elegance.
            </span>
          </h2>

          <button className="mt-8 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white shadow-xl transition hover:scale-105">

            Explore Collection

            <ArrowRight className="h-4 w-4" />
          </button>

          <blockquote className="mt-10 border-l-4 border-purple-700 pl-5 text-lg italic leading-8 text-neutral-700">
            Reserved for the rare. Our collections redefine elegance.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
