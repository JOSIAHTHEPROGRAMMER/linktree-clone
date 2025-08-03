"use client";

import { IconType } from "react-icons";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { TbCircleLetterT } from "react-icons/tb";

import {SiRumble } from "react-icons/si";

type SocialButtonProps = {
  title: string;
  url: string;
};

// Map of social platform names to icons
const iconMap: Record<string, IconType> = {
  X: FaXTwitter,
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  Facebook: FaFacebookF,
  TikTok: FaTiktok,
  Telegram: FaTelegramPlane,
  "Truth Social": TbCircleLetterT,
  Rumble: SiRumble,
};

export default function SocialButtons({ title, url }: SocialButtonProps) {
  const Icon = iconMap[title];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 w-full max-w-[100%] px-4 py-3 mb-4 rounded-full"
    >
      {Icon && <Icon className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-300" />}

    </a>
  );
}
