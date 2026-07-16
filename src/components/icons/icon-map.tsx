import {
  Bone,
  Stethoscope,
  Brain,
  Dumbbell,
  Baby,
  Wind,
  Droplets,
  Ribbon,
  HandHeart,
  Zap,
  BadgeCheck,
  Home,
  Sparkles,
  HeartHandshake,
  MessageCircle,
  ClipboardCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Bone,
  Stethoscope,
  Brain,
  Dumbbell,
  Baby,
  Wind,
  Droplets,
  Ribbon,
  HandHeart,
  Zap,
  BadgeCheck,
  Home,
  Sparkles,
  HeartHandshake,
  MessageCircle,
  ClipboardCheck,
  TrendingUp,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? Sparkles;
  return <Icon className={className} />;
}
