import type React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetItem {
  id: string;
  platform: string;
  icon: React.ReactNode;
  remaining: number;
  percentage: number;
  trackColor: string;
  color: string;
}

const platformData: BudgetItem[] = [
  {
    id: "facebook",
    platform: "Facebook",
    icon: <FacebookIcon />,
    remaining: 12345,
    percentage: 60,
    trackColor:"bg-[#e4f8e0]",
    color: "bg-[#4dd222]",
  },
  {
    id: "twitter",
    platform: "X",
    icon: <TwitterIcon />,
    remaining: 1543,
    percentage: 86,
     trackColor:"bg-[#e4f8e0]",
    color: "bg-[#4dd222]",
  },
  {
    id: "google",
    platform: "Google",
    icon: <GoogleIcon />,
    remaining: 5678,
    percentage: 67,
     trackColor:"bg-[#e4f8e0]",
    color: "bg-[#4dd222]",
  },
  {
    id: "tiktok",
    platform: "TikTok",
    icon: <TikTokIcon />,
    remaining: 3456,
    percentage: 21,
     trackColor:"bg-[#ffd9d8]",
    color: "bg-red-400",
  },
  {
    id: "bluesky",
    platform: "Bluesky",
    icon: <BlueSkyIcon />,
    remaining: 2098,
    percentage: 35,
     trackColor:"bg-[#fcf2d8]",
    color: "bg-amber-400",
  },
];

export function BudgetByPlatform() {
  return (
    <Card className="border-2 w-full border-black p-6 rounded-[6px]">
      <h2 className="text-xl font-bold mb-6">Budget by Platform</h2>
      <div className="space-y-5">
        {platformData.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            {/* Platform Icon */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">{item.icon}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <p className="text-sm text-foreground/70 font-medium">Remaining: ${item.remaining.toLocaleString()}</p>
              </div>
              <div className="w-full">
                <Progress value={item.percentage} trackColor={item.trackColor} indicatorColor={item.color} />
              </div>
            </div>

            {/* Percentage */}
            <div className="flex-shrink-0 text-sm font-medium text-foreground/70 min-w-fit">{item.percentage}%</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Social Media Icons
function FacebookIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.934 6.694H2.423l7.691-8.793-8.155-10.707h6.57l4.619 6.107 5.541-6.107zM16.369 20.033h1.83L5.337 3.696h-1.96l12.992 16.337z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.498 3.71c1.97 1.29 3.29 3.41 3.29 5.86 0 3.85-3.13 6.98-6.98 6.98-.23 0-.46-.01-.68-.04v4.12c0 1.37-1.11 2.48-2.48 2.48-1.37 0-2.48-1.11-2.48-2.48V7.05c0-1.41-1.15-2.56-2.56-2.56s-2.56 1.15-2.56 2.56v4.01C2.15 10.06 1 11.21 1 12.62s1.15 2.56 2.56 2.56c1.41 0 2.56-1.15 2.56-2.56V8.61c.21.03.42.04.63.04 1.24 0 2.43-.42 3.37-1.13v7.28c0 3.85-3.13 6.98-6.98 6.98s-6.98-3.13-6.98-6.98 3.13-6.98 6.98-6.98c.97 0 1.9.2 2.73.54V1.67c3.85 0 6.98 3.13 6.98 6.98" />
    </svg>
  );
}

function BlueSkyIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5C6.27 1.5 1.5 6.27 1.5 12s4.77 10.5 10.5 10.5S22.5 17.73 22.5 12 17.73 1.5 12 1.5zm0 19.5c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9z" />
      <path d="M12 6c-1.38 0-2.5 1.12-2.5 2.5S10.62 11 12 11s2.5-1.12 2.5-2.5S13.38 6 12 6zm-4 7h8v3h-8z" />
    </svg>
  );
}
