"use client"

interface LinkPreviewProps {
  title: string
  description: string
  image?: string
  url: string
}

// X.com link preview WITH OG image - large card with image, title overlay at bottom
export function XLinkPreviewWithImage({ title, image, url }: { title: string; image: string; url: string }) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="flex flex-col">
      <div className="rounded-2xl overflow-hidden border border-[#2f3336] bg-black">
        <div className="aspect-[1.91/1] bg-white relative overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" />
          {/* Title overlay at bottom left */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/70 text-white text-sm px-2 py-1 rounded">{title}</span>
          </div>
        </div>
      </div>
      <div className="text-[#71767b] text-[13px] mt-1.5">From {domain}</div>
    </div>
  )
}

// X.com link preview WITHOUT OG image - horizontal card with placeholder icon
export function XLinkPreviewNoImage({ title, url }: { title: string; description?: string; url: string }) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="rounded-2xl overflow-hidden border border-[#2f3336] bg-[#16181c] flex">
      {/* Placeholder icon area */}
      <div className="w-[88px] flex-shrink-0 flex items-center justify-center border-r border-[#2f3336]">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#71767b]" aria-hidden="true">
          <path d="M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" />
        </svg>
      </div>
      {/* Content area */}
      <div className="px-3 py-2.5 flex flex-col justify-center min-w-0">
        <div className="text-[#71767b] text-[13px] leading-4">{domain}</div>
        <div className="text-[#e7e9ea] text-[15px] leading-5 mt-0.5">{title}</div>
      </div>
    </div>
  )
}

// Container component showing both X.com previews side by side
export function LinkPreviewShowcase({ 
  withImage,
  withoutImage
}: { 
  withImage: { title: string; image: string; url: string }
  withoutImage: { title: string; description: string; url: string }
}) {
  return (
    <div className="flex gap-8 items-start">
      {/* With OG Image */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[#666] text-sm">With OG Image</span>
        </div>
        <XLinkPreviewWithImage 
          title={withImage.title} 
          image={withImage.image} 
          url={withImage.url} 
        />
      </div>

      {/* Without OG Image */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[#666] text-sm">Without OG Image</span>
        </div>
        <XLinkPreviewNoImage 
          title={withoutImage.title} 
          description={withoutImage.description} 
          url={withoutImage.url} 
        />
      </div>
    </div>
  )
}
