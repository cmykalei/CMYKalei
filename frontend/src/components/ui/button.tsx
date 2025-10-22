/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  `
        inline-flex
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        rounded-md
        text-sm
        font-medium
        transition-all
        disabled:pointer-events-none
        disabled:opacity-50
        [&_svg]:pointer-events-none
        shrink-0
        [&_svg]:shrink-0
        outline-none
        focus-visible:border-ring
        focus-visible:ring-ring/50
        focus-visible:ring-[3px]
        aria-invalid:ring-destructive/20
        dark:aria-invalid:ring-destructive/40
        aria-invalid:border-destructive
        `,
  {
    variants: {
      variant: {
        default:
          `
            bg-primary
            text-primary-foreground
            hover:bg-primary/90
            `,
        destructive:
          `
            bg-destructive
            text-white
            hover:bg-destructive/90
            focus-visible:ring-destructive/20
            dark:focus-visible:ring-destructive/40
            dark:bg-destructive/60
            `,
        outline:
          `
            bg-transparent
            shadow-sm
            text-xs
            hover:bg-accent
            hover:text-accent-foreground
            dark:bg-input/30
            dark:border-input
            dark:hover:bg-input/50
            `,
        secondary:
          `
            bg-secondary
            text-secondary-foreground
            hover:bg-secondary/80
            `,
        ghost:
          `
            hover:bg-accent
            hover:text-accent-foreground
            dark:hover:bg-accent/50
            `,
        link:
          `
            text-primary
            underline-offset-4
            hover:underline
            `,
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

type ButtonBaseProps = ButtonVariantProps & {
    className?: string
    asChild?: boolean
}

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
}

type ButtonAsAnchor = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

function Button({
    className,
    variant,
    size,
    asChild = false,
    href,
    ...props
}: ButtonProps) {
    // If asChild is true, render a Slot
    if (asChild) {
        return (
            <Slot
                data-slot="button"
                className={cn(buttonVariants({ variant, size }), className)}
                {...(props as Record<string, unknown>)} />
        )
    }

  // If href is provided, render an anchor
  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
    const safeRel = anchorProps.target === "_blank" ? ["noopener", "noreferrer", anchorProps.rel].filter(Boolean).join(" ") : anchorProps.rel
    return (
        <a
            href={href}
            {...anchorProps}
            target={anchorProps.target}
            rel={safeRel}
            data-slot="button"
            className={cn(buttonVariants({ variant, size }), className)} />
    )
  }

  // Default: render a button element
  return (
    <button
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  )
}

export { Button }
