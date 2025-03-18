"use client"

import * as React from "react"
import styles from "./app-sidebar.module.css"
import {
  House, PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Import sidebar data from JSON file
import sidebarData from './sidebarData.json';

// Map icon identifiers to actual components
const iconMap = {
  House: House,
  PieChart: PieChart,
};

// Define a type for the keys of iconMap
type IconKey = keyof typeof iconMap;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Map sidebar data to include actual icon components
  const navItems = sidebarData.navMain.map(item => ({
    ...item,
    icon: iconMap[item.icon as IconKey], // Use type assertion here
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent className={styles.customScrollbar}>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

