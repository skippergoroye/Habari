"use client"

import { useState } from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  BarChart3,
  Briefcase,
  FolderOpen,
  Users,
  Smartphone,
  FileText,
  Box,
  FileJson,
  BookOpen,
  ChevronDown,
  Megaphone,
  ArrowRight,
} from "lucide-react"

const menuItems = [
  { label: "Marketing", icon: Megaphone },
  { label: "Analytics", icon: BarChart3 },
  { label: "Business", icon: Briefcase },
  { label: "Project", icon: FolderOpen },
  { label: "HRM", icon: Users },
  { label: "Mobile App", icon: Smartphone },
  { label: "Landingpage", icon: FileText },
]

const collapsibleItems = [
  { label: "Components", icon: Box },
  { label: "Pages", icon: FileJson },
  { label: "Apps", icon: Briefcase },
  { label: "Content", icon: FileText },
  { label: "Users", icon: Users },
  { label: "Documentation", icon: BookOpen },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Marketing")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <Sidebar className="w-64 border-r-4 border-black bg-[#f5f5f5]">
      <div className="border-r-2 border-black flex flex-col h-full">
        {/* Header with Logo */}
        <SidebarHeader className="p-4 mt-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-lime-400 font-bold text-black">B</div>
            <span className="text-lg font-bold text-foreground">rutalism</span>
          </div>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
          {/* Menu Items */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveItem(item.label)}
                  className="flex items-center gap-3 rounded px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Collapsible Items */}
          <nav className="flex flex-col gap-1">
            {collapsibleItems.map((item) => {
              const Icon = item.icon
              const isExpanded = expandedItems.includes(item.label)
              return (
                <Collapsible key={item.label} open={isExpanded} onOpenChange={() => toggleExpanded(item.label)}>
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 border-l border-border py-1">
                    <button className="block w-full rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                      All {item.label}
                    </button>
                  </CollapsibleContent>
                </Collapsible>
              )
            })}
          </nav>
        </SidebarContent>

        {/* Footer with Upgrade CTA */}
        <SidebarFooter className="border-t border-border p-4 flex-shrink-0">
          <div className="rounded border-2 border-border bg-card p-4">
            <h3 className="text-sm font-bold text-foreground">Upgrade to Pro</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Are you looking for more features? Check out our Pro version.
            </p>
            <Button className="mt-4 w-full gap-2 bg-lime-400 text-black hover:bg-lime-500">
              <ArrowRight className="h-4 w-4" />
              Upgrade Now
            </Button>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}