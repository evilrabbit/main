import type { ReactNode } from "react"

export interface TimelineItemData {
  id: string
  title: string
  description?: string
  meta?: string
  active?: boolean
  href?: string
}

export interface TimelineProps {
  items: TimelineItemData[]
  className?: string
  animateOnScroll?: boolean
  renderMeta?: (item: TimelineItemData) => ReactNode
  renderIndicator?: (item: TimelineItemData) => ReactNode
}

export interface TimelineItemProps {
  item: TimelineItemData
  index: number
  isFirst: boolean
  isLast: boolean
  isActive: boolean
  isVisible: boolean
  animateOnScroll: boolean
  renderMeta?: (item: TimelineItemData) => ReactNode
  renderIndicator?: (item: TimelineItemData) => ReactNode
  onVisibilityChange?: (id: string, visible: boolean) => void
  itemRef?: (node: HTMLLIElement | null) => void
}