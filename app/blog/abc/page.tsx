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
            Apr 20, 2026
          </time>
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <p className="leading-relaxed text-neutral-300 mt-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        {/* Second image placeholder */}
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
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </article>
    </div>
  )
}
