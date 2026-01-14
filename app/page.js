import Image from 'next/image';
import hero from '@/public/hero.jpg'; // place downloaded hero.jpg in /public

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image src={hero} alt="RescueFi Hero" fill className="object-cover opacity-80" />
        <div className="absolute z-10 text-center px-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary drop-shadow-2xl">
            RescueFi 🪂
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-accent">
            DeFi&apos;s Parachute
          </p>
          <p className="text-xl md:text-3xl mt-4">
            Don&apos;t Get Rekt — Get Rescued
          </p>
        </div>
      </div>

      {/* Problem */}
      <section className="py-20 px-8 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">The Liquidation Crisis</h2>
        <p className="text-xl leading-relaxed">
          Billions wiped out yearly. Borrowers lose everything in cascades.<br />
          One dip = total rekt for leveraged farmers on Aave, Morpho, GMX & more.
        </p>
      </section>

      {/* Vision */}
      <section className="py-20 px-8 max-w-4xl text-center bg-black/50">
        <h2 className="text-4xl font-bold mb-8 text-accent">The Safety Net</h2>
        <p className="text-xl leading-relaxed">
          RescueFi enables pre-liquidation interventions.<br />
          Keep equity instead of zero. Fair shots for rescuers.<br />
          Making DeFi antifragile.
        </p>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Join the Waitlist</h2>
        <p className="text-xl mb-8">Fair launch incoming. Be first for alpha & retro rewards.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full px-6 py-4 mb-4 rounded-lg text-black text-lg"
          />
          <button type="submit" className="w-full bg-accent text-black font-bold py-4 rounded-lg text-xl hover:bg-green-400 transition">
            Get Rescued First 🚀
          </button>
        </form>
        <p className="mt-8 text-sm">Powered by community. No VC. rescuefi.eth treasury.</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p>
          <a href="https://twitter.com/rescuefi_io" className="text-primary hover:underline">X @rescuefi_io</a> | 
          <a href="https://rescuefi.eth" className="text-accent hover:underline ml-4">rescuefi.eth</a>
        </p>
      </footer>
    </main>
  );
}