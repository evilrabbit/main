import Link from "next/link"
import { Browser } from "@/components/browser"
import { LinkPreviewShowcase } from "@/components/link-preview"
import { ViewCounter } from "@/components/view-counter"
import { FontWeightDemo } from "@/components/font-weight-demo"
import { HeadingShowcase } from "@/components/heading-showcase"

export default function AbcBlogPost() {
  return (
    <div id="top" className="min-h-screen bg-black text-white py-16 px-6 overflow-x-hidden">
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
              className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-white transition-colors mb-8"
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
              <a href="#top" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">URL Design</a>
              <a href="#favicon" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Favicon</a>
              <a href="#opengraph-image" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Opengraph Image</a>
              <a href="#body-styles" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Body Styles</a>
              <a href="#font-choice" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Font Choice</a>
              <a href="#product-showcase" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Product Showcase</a>
              <a href="#checklist" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">The 2026 Checklist</a>
              <a href="#agent-era" className="font-sans text-sm text-neutral-500 hover:text-white transition-colors">Agent Era</a>
            </nav>
          </div>
        </aside>

        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 font-mono text-sm mb-2">
              <time className="text-neutral-500">Apr 20, 2026</time>
              <span className="text-neutral-700">·</span>
              <ViewCounter slug="abc" />
            </div>
            <h1 
              className="font-normal leading-tight text-[40px] min-[640px]:text-[56px]"
            >
              A landing page story
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div 
                className="flex items-center justify-center rounded-full"
                style={{ width: "28px", height: "28px", border: "1px solid #333" }}
              >
                <svg
                  viewBox="0 0 308 320"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px]"
                  aria-hidden="true"
                >
                  <path d="M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439 65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807 172.871 127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z" />
                </svg>
              </div>
              <span className="text-sm text-[#666]">Evil Rabbit</span>
            </div>
          </header>

          {/* URL Design Section */}
          <section id="url-design" className="scroll-mt-16">
            <p className="leading-relaxed text-[#666] selection-muted">
              A URL is the first impression of your product. Before anyone sees your design or reads your copy, they see your URL in a message, a tweet, or hovering over a link. It deserves the same attention you give to your logo.
            </p>

            <div className="my-16">
              <Browser url="acme.com" />
            </div>

            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Keep URLs simple. Clean. Consistent. Every character should earn its place. Avoid long, deeply nested paths that try to explain everything at once.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              <span className="text-white">acme.com/product/enterprise/advanced-analytics-overview</span> is not helping anyone. Collapse the intent instead: <span className="text-white">acme.com/analytics</span> or <span className="text-white">acme.com/enterprise</span>. If a URL needs that much structure, the structure itself is the problem.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Consistency builds memory. If users learn one pattern, they should be able to predict the rest. <span className="text-white">acme.com/pricing</span>, <span className="text-white">acme.com/docs</span>, <span className="text-white">acme.com/blog</span>. No surprises, no guesswork.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Subdomains create clear, memorable spaces. <span className="text-white">docs.acme.com</span> feels like a destination. <span className="text-white">api.acme.com</span> tells developers exactly where to go. <span className="text-white">status.acme.com</span> becomes instinct during an outage. These aren&apos;t just technical decisions. They&apos;re brand surfaces.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Think about how URLs sound out loud. "Go to acme dot com slash start" works. If it turns into a sentence, it&apos;s already too long.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The best URLs disappear. They&apos;re so obvious that users guess them before clicking.
            </p>
          </section>

          {/* Favicon Section */}
          <section id="favicon" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Favicon</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              The favicon is the smallest piece of real estate your brand will ever occupy. 16 by 16 pixels in most contexts. And yet, it&apos;s everywhere: browser tabs, bookmarks, history, mobile home screens, and search results.
            </p>

            <div className="my-16">
              <Browser 
                url="evilrabb.it" 
                tabs={[
                  { 
                    favicon: (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <svg viewBox="0 0 308 320" fill="white" className="w-2.5 h-2.5">
                          <path d="M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439 65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807 172.871 127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z" />
                        </svg>
                      </div>
                    ), 
                    title: "Evil Rabbit",
                    url: "evilrabb.it",
                    active: true 
                  },
                  { 
                    favicon: (
                      <svg viewBox="0 0 76 65" fill="black" className="w-2.5 h-2.5">
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                      </svg>
                    ), 
                    title: "Vercel",
                    url: "vercel.com"
                  },
                  { 
                    favicon: <div className="w-full h-full bg-[#3B82F6]" />,
                    title: "v0",
                    url: "v0.app"
                  },
                  { 
                    favicon: <div className="w-full h-full bg-[#10B981]" />,
                    title: "Next.js",
                    url: "nextjs.org"
                  },
                  { 
                    favicon: <div className="w-full h-full bg-[#F59E0B]" />,
                    title: "Grok",
                    url: "grok.com"
                  },
                  { 
                    favicon: <div className="w-full h-full bg-[#EF4444]" />,
                    title: "xAI",
                    url: "x.ai"
                  },
                ]}
              />
            </div>

            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              When someone has forty tabs open, your favicon is how they find you. It needs to work at a glance. No text. No fine details. Just a shape and a color that&apos;s unmistakably yours.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The best favicons are reductive. They take the essence of a logo and strip away everything that doesn&apos;t survive at small sizes. A wordmark becomes an initial. A detailed illustration becomes a silhouette. Complexity is the enemy.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Test it in context. Put it next to Gmail, Slack, Notion, and GitHub in a tab bar. Does it hold its own? Does it disappear? Does it clash? Your favicon lives in a crowd. Design it that way.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              And please, don&apos;t forget dark mode. A black favicon on a dark browser theme is invisible. Provide variants, or choose a color that works on both.
            </p>
          </section>

          {/* Opengraph Image Section */}
          <section id="opengraph-image" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Opengraph Image</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              The Open Graph image is often the first visual impression of your content. When someone shares your link on X, LinkedIn, or Messages, this image determines whether people click or scroll past.
            </p>

            <div className="my-16 -mx-6 min-[860px]:-mx-[80px] min-[860px]:max-w-[800px]">
              <LinkPreviewShowcase 
                withImage={{
                  title: "Evil Rabbit",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PO5wsgCAzlaOtKcmlZRMiyScEDDXY2.png",
                  url: "https://evilrabbit.com"
                }}
                withoutImage={{
                  title: "Evil Rabbit",
                  description: "Founding Designer at Vercel.",
                  url: "https://evilrabbit.com"
                }}
              />
            </div>

            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Each platform renders previews differently. X shows a large image with title and description below. LinkedIn emphasizes the headline. Messages keeps it compact. Your OG image needs to work across all of them.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Keep text minimal on the image itself. The title and description are already shown by the platform. Use the image for visual impact, not redundant information.
            </p>
          </section>

          {/* Body Styles Section */}
          <section id="body-styles" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Body Styles</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              On iOS and macOS, when users scroll past the edge of a page, the browser reveals whatever is behind your content. This is the rubber band effect. If you set a black background on your main container but leave the html or body element unstyled, that overscroll area will flash white. It looks broken.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The fix is simple: set your background color on the html element, not just a wrapper div. In CSS, that means <code className="text-white font-mono text-sm bg-[#1a1a1a] px-1.5 py-0.5 rounded border border-[#333]">html {"{"} background-color: black; {"}"}</code>. In Tailwind, add the class directly to your html tag in the root layout.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              This matters more than you might think. The overscroll area is visible every time someone pulls down to refresh on mobile, or scrolls aggressively on a trackpad. A mismatched color breaks the illusion that your page is a complete, intentional surface.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              While you&apos;re at it, consider the meta theme-color tag. This controls the color of the browser chrome on mobile Safari and Android. Match it to your header or your background. The browser itself becomes part of your design.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              These details are invisible when done right. But when they&apos;re wrong, they&apos;re the first thing people notice.
            </p>
          </section>

          {/* Font Choice Section */}
          <section id="font-choice" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Font Choice</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              Typography is the voice of your brand before anyone reads a word. The font you choose tells visitors whether you&apos;re serious or playful, technical or approachable, established or experimental. Get it wrong, and everything else fights uphill.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Start with legibility. A landing page has seconds to communicate. If your headline font is hard to parse, you&apos;ve already lost. Save the decorative typefaces for accent text, if at all. Your primary font should disappear into the reading experience.
            </p>

            <div className="my-12">
              <FontWeightDemo />
            </div>

            <p className="leading-relaxed text-[#666] selection-muted">
              Consider your audience. A developer tools company using Comic Sans would be a joke. A children&apos;s brand using monospaced system fonts would feel cold. The font has to match the people you&apos;re trying to reach.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Variable fonts give you the entire weight spectrum in a single file. Instead of loading separate files for regular, medium, semibold, and bold, you get smooth interpolation between any weight from 100 to 900.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              This matters for animation, for fine-tuning hierarchy, and for performance. One font file instead of four or five. Smaller payload, fewer requests.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              But the real power is precision. You&apos;re no longer locked into the weights the foundry decided to ship. Need something between regular and medium? Set it to 450. Want a subtle hover state? Bump the weight by 50 instead of jumping a full step.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Limit yourself to two typefaces maximum. One for headings, one for body. Maybe a monospace for code. More than that creates visual noise. The constraint forces clarity.
            </p>

            <div className="my-12">
              <HeadingShowcase />
            </div>

            <p className="leading-relaxed text-[#666] selection-muted">
              Establish a clear hierarchy. Each heading level should feel distinct from the others. Size, weight, and color all contribute. When someone scans your page, the structure should be obvious before they read a single word.
            </p>
          </section>

          {/* Product Showcase Section */}
          <section id="product-showcase" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Product Showcase</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              If you&apos;re recording a video of your product, the browser is part of the shot. Bookmarks bar full of embarrassing links. Twelve extensions cluttering the toolbar. A chaotic tab situation. All of it communicates something, and none of it is your product.
            </p>

            <div className="my-16 -mx-6 min-[860px]:-mx-[80px] min-[860px]:max-w-[800px]">
              <Browser url="vercel.com/home" showContent>
                <iframe 
                  src="https://vercel.com/home" 
                  className="w-full h-full border-0"
                  title="Vercel Home"
                />
              </Browser>
            </div>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Clean it up. Use a dedicated browser profile for recordings. No bookmarks. No extensions. No distractions. Some teams use tools like Screen Studio or Cleanshot that automatically hide desktop clutter and standardize the recording environment.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Your desktop wallpaper matters too. A busy photo or a personal image pulls attention away from the product. Pick one clean wallpaper. Solid color, subtle gradient, or something intentionally on-brand. Use it for every recording.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              Show one feature at a time. Or one coherent set of features. The temptation is to cram everything into a single video, but that creates noise. A focused thirty-second clip beats a scattered two-minute tour. Let each video have a single job.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The goal is to make the product the only thing people see. Everything else in the frame should be invisible.
            </p>
          </section>

          {/* Checklist Section */}
          <section id="checklist" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">The 2026 Checklist</h2>
            <p className="leading-relaxed text-[#666] selection-muted mb-6">
              Everything above, distilled. Run through this before you ship.
            </p>
            <ul className="space-y-3">
              {[
                "URLs are short, readable, and describe the page",
                "Background color is set on <html>, not a wrapper",
                "OG images are set and tested on X, LinkedIn, Slack",
                "Font choice matches your brand voice",
                "Maximum two typefaces, with clear hierarchy",
                "Heading scale is distinct and scannable",
                "Product videos use a clean browser profile",
                "Desktop wallpaper is intentional, not personal",
                "Each video shows one feature, not everything",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded border border-[#333] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Agent Era Section */}
          <section id="agent-era" className="scroll-mt-16 mt-12">
            <h2 className="text-2xl font-normal mb-4">Agent Era</h2>
            <p className="leading-relaxed text-[#666] selection-muted">
              If an AI agent is browsing for your user, does your landing page still matter?
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The answer is yes, but differently. Agents will read your structured data, your meta tags, your API documentation. They&apos;ll parse your pricing page in milliseconds and compare you against twelve competitors before a human even sees your hero section.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              This means clarity becomes even more important. The landing page of tomorrow serves two audiences: humans who need to feel something, and agents who need to understand something. A beautiful animation won&apos;t persuade an agent. But a well-structured page with clear value propositions, semantic HTML, and machine-readable pricing will.
            </p>
            <p className="leading-relaxed text-[#666] selection-muted mt-4">
              The brands that win will be the ones legible to both. Human enough to inspire trust. Structured enough to be understood by the software making decisions on our behalf.
            </p>

            <h3 className="text-lg font-normal mt-8 mb-4 text-white">For the agents</h3>
            <ul className="space-y-3">
              {[
                "Structured data is present and accurate",
                "Pricing is machine-readable",
                "Semantic HTML throughout",
                "Meta tags describe the page, not just keywords",
                "API documentation is discoverable",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded border border-[#333] flex-shrink-0 mt-0.5" />
                  <span className="text-[#666] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Signature */}
          <div className="mt-16 pt-8 border-t border-[#333]">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 308 320"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                aria-hidden="true"
              >
                <path d="M294.319 4.31153L248.987 43.3362C239.752 51.1954 227.439 65.8303 221.282 76.6706L202.813 108.107C196.657 118.406 183.225 126.807 172.871 127.078C162.518 127.349 144.888 127.349 134.534 127.078C124.18 126.807 110.188 118.135 104.592 108.107L86.1226 76.6706C79.9659 66.3724 67.3738 51.4668 58.419 43.3362L12.8059 4.31153C3.85172 -3.54767 -1.74495 -0.29583 0.493592 11.0866L10.8477 63.3913C13.366 75.045 21.4816 91.5763 29.5965 100.52L62.3366 136.292C70.4522 145.236 74.6496 161.767 71.5712 173.15L70.1725 179.384C67.0941 190.765 65.4144 210.006 66.5346 221.66L67.6536 237.107C68.4928 248.761 74.0901 262.582 79.1273 267.731C84.1638 272.61 91.1598 282.366 93.9585 289.412C97.0369 296.458 106.271 306.486 114.665 312.719C123.061 318.952 135.374 321.662 141.53 318.952C148.245 316.242 158.6 316.242 164.756 318.952C171.192 321.662 183.225 318.681 192.18 312.719C200.855 306.757 210.088 296.188 212.887 289.412C215.966 282.637 222.682 272.61 227.719 267.731C232.756 262.854 238.353 249.032 239.192 237.107L240.311 221.66C241.15 210.006 239.752 190.765 236.673 179.383L235.274 173.149C232.196 161.767 236.114 145.236 244.51 136.292L277.249 100.52C285.365 91.5763 293.76 75.045 295.998 63.3913L306.352 11.0866C309.43 -0.29583 303.834 -3.27631 294.319 4.31153ZM169.513 288.057C164.756 292.665 159.439 301.066 157.76 305.672C155.522 310.28 152.723 310.28 150.764 305.672C148.526 300.795 143.489 292.664 139.571 288.057C134.814 283.45 136.493 281.824 142.929 284.805C149.366 287.786 159.999 287.786 166.155 284.805C172.312 282.095 173.991 283.45 169.513 288.057Z" />
              </svg>
              <span className="text-[#666] text-sm">Evil Rabbit</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
