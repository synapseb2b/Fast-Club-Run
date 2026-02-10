declare module "framer-motion" {
    import * as React from "react";

    export interface MotionProps {
        initial?: any;
        animate?: any;
        exit?: any;
        variants?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
        whileInView?: any;
        viewport?: any;
        className?: string;
        children?: React.ReactNode;
    }

    type MotionComponent = React.ForwardRefExoticComponent<
        MotionProps & React.HTMLAttributes<HTMLElement> & { [key: string]: any }
    >;

    export const motion: {
        [key: string]: MotionComponent;
        div: MotionComponent;
        span: MotionComponent;
        a: MotionComponent;
        button: MotionComponent;
        p: MotionComponent;
        h1: MotionComponent;
        h2: MotionComponent;
        h3: MotionComponent;
        h4: MotionComponent;
        h5: MotionComponent;
        h6: MotionComponent;
        ul: MotionComponent;
        li: MotionComponent;
        section: MotionComponent;
        article: MotionComponent;
        header: MotionComponent;
        footer: MotionComponent;
        nav: MotionComponent;
        aside: MotionComponent;
        main: MotionComponent;
        img: MotionComponent;
        input: MotionComponent;
        form: MotionComponent;
    };

    export interface Variants {
        [key: string]: any;
    }

    export const AnimatePresence: React.FC<{
        children?: React.ReactNode;
        mode?: "wait" | "sync" | "popLayout";
        initial?: boolean;
        onExitComplete?: () => void;
    }>;

    export function useAnimation(): any;
    export function useMotionValue(initial: number): any;
    export function useTransform(...args: any[]): any;
    export function useSpring(value: any, config?: any): any;
    export function useScroll(options?: any): any;
    export function useInView(ref: React.RefObject<Element>, options?: any): boolean;
}
