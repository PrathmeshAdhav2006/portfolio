// Global type declarations to fix TS7016 errors during build

declare module 'gsap-trial/SplitText' {
    export class SplitText {
        constructor(target: any, vars?: any);
        chars: any[];
        lines: any[];
        words: any[];
        revert(): void;
    }
}

declare module 'gsap-trial/ScrollSmoother' {
    export class ScrollSmoother {
        static create(vars: any): ScrollSmoother;
        static refresh(force?: boolean): void;
        scrollTop(value?: number): number | void;
        paused(value?: boolean): boolean | void;
        scrollTo(target: any, smooth?: boolean, position?: string): void;
    }
}
