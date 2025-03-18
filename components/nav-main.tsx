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
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import Link from "next/link"
import React, { useState } from "react";

interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: NavItem[]
}

// Recursive component for rendering menu items
function NavMenuItems({ items }: { items: NavItem[] }) {
  return items.map((item) => {
    const [isOpen, setIsOpen] = useState(item.isActive || false); // Local state for each item

    return (
      <div key={item.title} className="w-full">
        {item.items ? (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                <ChevronRight className={`mr-2 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                {item.icon && <item.icon />}
                <span>{item.title}</span>
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
    );
  });
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
  );
}
