import { NextRequest, NextResponse } from 'next/server'

// In-memory store for views (resets on server restart)
// For production, use a database like Upstash Redis or Vercel KV
const viewCounts = new Map<string, Set<string>>()

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const uniqueVisitors = viewCounts.get(slug)?.size || 0
  
  return NextResponse.json({ views: uniqueVisitors })
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  
  // Get visitor identifier from IP or forwarded header
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0] || 'anonymous'
  
  // Create a simple hash of IP + user agent for uniqueness
  const userAgent = request.headers.get('user-agent') || ''
  const visitorId = `${ip}-${userAgent.slice(0, 50)}`
  
  if (!viewCounts.has(slug)) {
    viewCounts.set(slug, new Set())
  }
  
  viewCounts.get(slug)!.add(visitorId)
  
  const uniqueVisitors = viewCounts.get(slug)!.size
  
  return NextResponse.json({ views: uniqueVisitors })
}
