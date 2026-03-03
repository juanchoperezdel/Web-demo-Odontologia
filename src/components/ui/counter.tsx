import { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { useRef } from 'react';

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function Counter({ value, duration = 2, suffix = '', prefix = '' }: CounterProps) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "0px 0px -50px 0px" });

    useEffect(() => {
        if (inView) {
            let startTimestamp: number;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                const currentCount = Math.floor(easeOutExpo(progress) * value);
                setCount(currentCount);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    setCount(value);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [value, duration, inView]);

    return (
        <span ref={nodeRef}>
            {prefix}{count}{suffix}
        </span>
    );
}
