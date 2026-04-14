"use client"

interface LinkPreviewProps {
  title: string
  description: string
  image: string
  url: string
}

// X.com / Twitter style link preview
export function XLinkPreview({ title, description, image, url }: LinkPreviewProps) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="rounded-2xl overflow-hidden border border-[#2f3336] bg-black">
      <div className="aspect-[1.91/1] bg-[#16181c] relative overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="text-[#71767b] text-sm">{domain}</div>
        <div className="text-[#e7e9ea] text-[15px] leading-5 mt-0.5 line-clamp-1">{title}</div>
        <div className="text-[#71767b] text-[15px] leading-5 mt-0.5 line-clamp-2">{description}</div>
      </div>
    </div>
  )
}

// LinkedIn style link preview
export function LinkedInLinkPreview({ title, description, image, url }: LinkPreviewProps) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="rounded-lg overflow-hidden border border-[#38434f] bg-[#1d2226]">
      <div className="aspect-[1.91/1] bg-[#38434f] relative overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3 bg-[#1d2226]">
        <div className="text-white text-sm font-semibold leading-5 line-clamp-2">{title}</div>
        <div className="text-[#ffffffb3] text-xs mt-1">{domain}</div>
      </div>
    </div>
  )
}

// iMessage style link preview
export function iMessageLinkPreview({ title, description, image, url }: LinkPreviewProps) {
  const domain = url.replace(/^https?:\/\//, '').split('/')[0]
  
  return (
    <div className="rounded-2xl overflow-hidden bg-[#1c1c1e]">
      <div className="aspect-[1.5/1] bg-[#2c2c2e] relative overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-3 py-2.5">
        <div className="text-white text-[15px] font-normal leading-5 line-clamp-2">{title}</div>
        <div className="text-[#8e8e93] text-[13px] mt-0.5">{domain}</div>
      </div>
    </div>
  )
}

// Container component showing all three platforms side by side
export function LinkPreviewShowcase({ title, description, image, url }: LinkPreviewProps) {
  return (
    <div className="flex gap-6 items-start">
      {/* X.com */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[#666] text-sm">X.com</span>
        </div>
        <XLinkPreview title={title} description={description} image={image} url={url} />
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0a66c2]" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="text-[#666] text-sm">LinkedIn</span>
        </div>
        <LinkedInLinkPreview title={title} description={description} image={image} url={url} />
      </div>

      {/* iMessage */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#34c759]" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
          <span className="text-[#666] text-sm">Messages</span>
        </div>
        <iMessageLinkPreview title={title} description={description} image={image} url={url} />
      </div>
    </div>
  )
}
