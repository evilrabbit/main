import Link from "next/link"

export default function AbcBlogPost() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="relative mx-auto" style={{ maxWidth: "640px" }}>
        {/* Fixed sidebar with back button and table of contents - hidden on mobile, hover-reveal on tablet/small desktop, always visible on 1440px+ */}
        <aside 
          className="hidden md:block fixed top-0 left-0 h-full z-50 min-[1440px]:top-16 min-[1440px]:h-auto min-[1440px]:z-auto group"
          style={{ width: "200px", left: "24px" }}
        >
          {/* Hover trigger area for smaller screens */}
          <div className="absolute inset-y-0 left-0 w-8 min-[1440px]:hidden" />
          
          {/* Sidebar content */}
          <div 
            className="absolute top-16 left-0 opacity-0 -translate-x-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 min-[1440px]:opacity-100 min-[1440px]:translate-x-0 min-[1440px]:static"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8"
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

            <nav className="flex flex-col gap-2">
              <a href="#url-design" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">URL Design</a>
              <a href="#favicon" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Favicon</a>
              <a href="#opengraph-image" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Opengraph Image</a>
              <a href="#body-background-color" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Body Background color</a>
              <a href="#product-showcase" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Product Showcase</a>
              <a href="#agent-era" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Agent Era</a>
            </nav>
          </div>
        </aside>

        <article>
          <header className="mb-12">
            <time className="font-mono text-sm text-neutral-500 block mb-4">
              Apr 20, 2026
            </time>
            <h1 
              className="font-bold leading-tight text-[40px] min-[640px]:text-[56px]"
            >
              abc to land a page
            </h1>

            <div className="flex items-center gap-3 mt-6">
              <div 
                className="flex items-center justify-center rounded-full"
                style={{ width: "28px", height: "28px", border: "1px solid #333" }}
              >
                <svg
                  viewBox="0 0 308 320"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439 65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807 172.871 127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z" />
                </svg>
              </div>
              <span className="text-sm text-neutral-300">Evil Rabbit</span>
            </div>
          </header>

          {/* URL Design Section */}
          <section id="url-design" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">URL Design</h2>
            <p className="leading-relaxed text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          {/* Favicon Section */}
          <section id="favicon" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-bold mb-4">Favicon</h2>
            <p className="leading-relaxed text-neutral-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>

          {/* Image placeholder - full width on mobile, exceeds container to 800px on desktop */}
          <figure className="my-12 -mx-6 md:-mx-[80px] md:max-w-[800px]">
            <div className="w-full aspect-video bg-neutral-800 rounded-none md:rounded-lg flex items-center justify-center">
              <span className="text-neutral-500 font-mono text-sm">Image placeholder (800px)</span>
            </div>
          </figure>

          {/* Opengraph Image Section */}
          <section id="opengraph-image" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">Opengraph Image</h2>
            <p className="leading-relaxed text-neutral-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>

          {/* Body Background color Section */}
          <section id="body-background-color" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-bold mb-4">Body Background color</h2>
            <p className="leading-relaxed text-neutral-300">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>

          {/* Second image placeholder */}
          <figure className="my-12 -mx-6 md:-mx-[80px] md:max-w-[800px]">
            <div className="w-full aspect-video bg-neutral-800 rounded-none md:rounded-lg flex items-center justify-center">
              <span className="text-neutral-500 font-mono text-sm">Image placeholder (800px)</span>
            </div>
          </figure>

          {/* Product Showcase Section */}
          <section id="product-showcase" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">Product Showcase</h2>
            <p className="leading-relaxed text-neutral-300">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>

          {/* Agent Era Section */}
          <section id="agent-era" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-bold mb-4">Agent Era</h2>
            <p className="leading-relaxed text-neutral-300">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
