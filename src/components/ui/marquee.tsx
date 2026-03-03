import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

export function Marquee({ children, direction = 'left', speed = 40, className }: MarqueeProps) {
    return (
        <div className={cn("overflow-hidden flex whitespace-nowrap", className)}>
            <motion.div
                className="flex shrink-0 min-w-full items-center justify-around"
                animate={{
                    x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%']
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}
