import Link from "next/link"

export default function AbcBlogPost() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="relative mx-auto" style={{ maxWidth: "640px" }}>
        {/* Floating sidebar with back button and table of contents */}
        <aside className="absolute right-full mr-16 top-0 hidden lg:block" style={{ width: "160px" }}>
          <div className="sticky top-16">
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
              <span className="font-mono text-xs text-neutral-600 uppercase tracking-wide mb-1">Contents</span>
              <a href="#url-design" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">URL Design</a>
              <a href="#favicon" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">Favicon</a>
              <a href="#opengraph-image" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">Opengraph Image</a>
              <a href="#body-background-color" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">Body Background color</a>
              <a href="#product-showcase" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">Product Showcase</a>
              <a href="#agent-era" className="font-mono text-sm text-neutral-500 hover:text-white transition-colors">Agent Era</a>
            </nav>
          </div>
        </aside>

        {/* Mobile back button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 lg:hidden"
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

        <article>
          <header className="mb-12">
            <time className="font-mono text-sm text-neutral-500 block mb-4">
              Apr 20, 2026
            </time>
            <h1 
              className="font-bold leading-tight"
              style={{ fontSize: "56px" }}
            >
              abc
            </h1>
          </header>

          <div 
            className="prose prose-invert max-w-none"
            style={{ fontSize: "16px" }}
          >
            <p className="leading-relaxed text-neutral-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="leading-relaxed text-neutral-300 mt-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Image placeholder - exceeds container to 800px */}
          <figure className="my-12 -mx-[80px]" style={{ maxWidth: "800px" }}>
            <div className="w-full aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500 font-mono text-sm">Image placeholder (800px)</span>
            </div>
          </figure>

          <div 
            className="prose prose-invert max-w-none"
            style={{ fontSize: "16px" }}
          >
            <p className="leading-relaxed text-neutral-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <p className="leading-relaxed text-neutral-300 mt-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* Second image placeholder */}
          <figure className="my-12 -mx-[80px]" style={{ maxWidth: "800px" }}>
            <div className="w-full aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
              <span className="text-neutral-500 font-mono text-sm">Image placeholder (800px)</span>
            </div>
          </figure>

          <div 
            className="prose prose-invert max-w-none"
            style={{ fontSize: "16px" }}
          >
            <p className="leading-relaxed text-neutral-300">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
