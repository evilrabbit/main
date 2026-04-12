import Link from "next/link"

export default function AbcBlogPost() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <article className="mx-auto" style={{ maxWidth: "700px" }}>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M10 12L6 8L10 4" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>

        <header className="mb-12">
          <h1 
            className="font-bold leading-tight mb-4"
            style={{ fontSize: "56px" }}
          >
            abc
          </h1>
          <time className="font-mono text-sm text-neutral-500">
            April 20, 2026
          </time>
        </header>

        <div 
          className="prose prose-invert max-w-none"
          style={{ fontSize: "16px" }}
        >
          <p className="leading-relaxed text-neutral-300">
            We spent years perfecting the perfect landing page.
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6 font-mono text-sm">
            acme.co/<br />
            acme.co/dashboard<br />
            acme.co/evilrabbit
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            Favicon + Title + Description<br />
            Open Graph Image<br />
            Body Background Color
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            Product Showcase:
          </p>
          <ul className="leading-relaxed text-neutral-300 mt-2 list-disc list-inside">
            <li>Browser setup</li>
            <li>Clean wallpaper / on brand</li>
            <li>Focus on your product</li>
            <li>1 feature at a time</li>
          </ul>

          <p className="leading-relaxed text-neutral-300 mt-6">
            Every pixel was optimized for humans.<br />
            Every detail so the first 3 seconds would convert.
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            That was the game.
          </p>
        </div>

        {/* Image placeholder - exceeds container to 800px */}
        <figure className="my-12 -mx-[50px]" style={{ maxWidth: "800px" }}>
          <div className="w-full aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
            <span className="text-neutral-500 font-mono text-sm">Image placeholder (800px)</span>
          </div>
        </figure>

        <div 
          className="prose prose-invert max-w-none"
          style={{ fontSize: "16px" }}
        >
          <p className="leading-relaxed text-neutral-300">
            {"But now… AI agents are the first ones consuming our websites."}
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            {"They don't see favicons."}<br />
            {"They don't care about beautiful URLs."}<br />
            {"They don't need wallpapers or browser mockups."}
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            They just scrape, parse and decide.
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            So the question is:
          </p>

          <p className="leading-relaxed text-white mt-6 text-lg">
            What does a landing page even look like when no human ever sees the homepage?
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            The era we knew is over.
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            What comes next?
          </p>
        </div>
      </article>
    </div>
  )
}
