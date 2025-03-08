"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: NavItem[]
}

// Recursive component for rendering menu items
function NavMenuItems({ items }: { items: NavItem[] }) {
  return items.map((item) => (
    <div key={item.title} className="w-full">
      {item.items ? (
        <Collapsible defaultOpen={item.isActive} className="group/collapsible">
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-4 flex flex-col gap-1">
              {item.items.map((subItem) => (
                <div key={subItem.title}>
                  {subItem.items ? (
                    <NavMenuItems items={[subItem]} />
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={subItem.url}>
                        <span>{subItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <SidebarMenuButton asChild>
          <a href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      )}
    </div>
  ))
}

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xl">
        <Link href="/"> Navigation </Link>
      </SidebarGroupLabel>
      <div className="flex flex-col gap-1">
        <NavMenuItems items={items} />
      </div>
    </SidebarGroup>
  )
}
