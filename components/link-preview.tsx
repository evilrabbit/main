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
export function XLinkPreviewNoImage({ title, description, url }: { title: string; description: string; url: string }) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="rounded-2xl overflow-hidden border border-[#2f3336] bg-black flex">
      {/* Placeholder icon area */}
      <div className="w-[130px] flex-shrink-0 bg-[#16181c] flex items-center justify-center border-r border-[#2f3336]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#71767b]">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
          <line x1="9" y1="9" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      {/* Content area */}
      <div className="p-3 flex flex-col justify-center min-w-0">
        <div className="text-[#71767b] text-[13px]">{domain}</div>
        <div className="text-[#e7e9ea] text-[15px] leading-5 mt-0.5 line-clamp-1 font-normal">{title}</div>
        <div className="text-[#71767b] text-[15px] leading-5 mt-0.5 line-clamp-2">{description}</div>
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
