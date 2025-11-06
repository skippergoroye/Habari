"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketingTabs() {
  return (
    <main className="flex items-center shadow-custom justify-center  bg-[#f5f5f5]">
      <Tabs defaultValue="7days" className="w-full ">
        <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent  p-0">
          <TabsTrigger
            value="7days"
            className="px-4 py-2 rounded-none border-2 border-black data-[state=active]:border-foreground data-[state=active]:bg-[#f5f5f5] data-[state=active]:text-[#4dd222] hover:border-foreground/60 transition-colors"
          >
            7 Days
          </TabsTrigger>
          <TabsTrigger
            value="14days"
            className="px-4 py-2 rounded-none  border-2 border-black data-[state=active]:border-foreground data-[state=active]:bg-[#f5f5f5] data-[state=active]:text-[#4dd222] hover:border-foreground/60 transition-colors"
          >
            14 Days
          </TabsTrigger>
          <TabsTrigger
            value="1month"
            className="px-4 py-2 rounded-none  border-2 border-black data-[state=active]:border-foreground data-[state=active]:bg-[#f5f5f5] data-[state=active]:text-[#4dd222] hover:border-foreground/60 transition-colors"
          >
            1 Month
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  )
}
