import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2]">

      {/* BACKGROUND BLURS */}
      <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-200/20 blur-3xl" />

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center">

        {/* SUBTITLE */}
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
          Handmade Luxury
        </p>

        {/* TITLE */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-7xl">
          Elegant handcrafted accessories for every occasion
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          Discover timeless bangles, earrings, and handcrafted collections designed with elegance and love.
        </p>

        {/* BUTTON */}
        <button className="mt-8 rounded-full bg-black px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90">
          Explore Collection
        </button>

        {/* MAIN IMAGE */}
        <div className="relative mt-16 h-[350px] w-[260px] overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-[120px] rounded-bl-[120px] border border-black/10 bg-white shadow-2xl sm:h-[500px] sm:w-[380px]">

          <Image
            src="/hero.jpg"
            alt="Jewelry Model"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
