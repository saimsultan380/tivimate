import type { ReactNode } from "react";

type WhatsAppCtaProps = {
  href: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/** External WhatsApp CTA (opens in a new tab). */
export function WhatsAppCta({
  href,
  className,
  children,
  "aria-label": ariaLabel,
}: WhatsAppCtaProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
