"use client"

import * as React from "react"
import styles from "./app-sidebar.module.css"
import {
  House, Folder, PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Modified sample data with more nested trees
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Getting Started",
          url: "dashboard",
          items: [  // Adding nested items
            {
              title: "Quick Start",
              url: "home/quickstart",
            },
            {
              title: "Installation",
              url: "home/installation",
            }
          ]
        },
        {
          title: "Services",
          url: "#",
          items: [
            {
              title: "Cloud Services",
              url: "#",
            },
            {
              title: "Hosting",
              url: "#",
            }
          ]
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Dashboard",
          url: "#",
          items: [
            {
              title: "Real-time",
              url: "#",
            },
            {
              title: "Historical",
              url: "#",
            }
          ]
        },
        {
          title: "Reports",
          url: "#",
          items: [
            {
              title: "Daily",
              url: "#",
              items: [
                {
                  title: "Performance",
                  url: "#",
                  items: [
                    {
                      title: "CPU Usage",
                      url: "#"
                    },
                    {
                      title: "Memory Usage",
                      url: "#"
                    }
                  ]
                },
                {
                  title: "Traffic",
                  url: "#",
                  items: [
                    {
                      title: "Visitors",
                      url: "#"
                    },
                    {
                      title: "Page Views",
                      url: "#"
                    }
                  ]
                },
                {
                  title: "Revenue",
                  url: "#",
                  items: [
                    {
                      title: "Sales",
                      url: "#"
                    },
                    {
                      title: "Conversions",
                      url: "#"
                    }
                  ]
                }
              ]
            },
            {
              title: "Monthly",
              url: "#",
              items: [
                {
                  title: "Financial",
                  url: "#",
                  items: [
                    {
                      title: "Income",
                      url: "#"
                    },
                    {
                      title: "Expenses",
                      url: "#"
                    }
                  ]
                },
                {
                  title: "Growth",
                  url: "#",
                  items: [
                    {
                      title: "User Growth",
                      url: "#"
                    },
                    {
                      title: "Market Share",
                      url: "#"
                    }
                  ]
                },
                {
                  title: "Analytics",
                  url: "#",
                  items: [
                    {
                      title: "Trends",
                      url: "#"
                    },
                    {
                      title: "Predictions",
                      url: "#"
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent className={styles.customScrollbar}>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

