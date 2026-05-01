"use client";

import React from "react";
import { IconType } from "react-icons/lib";

export default function LinkSocial({ href, icon }: LinkSocialProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon({ size: 24 })}
    </a>
  );
}

export interface LinkSocialProps {
  name: string;
  href: string;
  icon: IconType;
}
