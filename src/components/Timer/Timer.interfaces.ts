export interface TimerProps {
    color: string;
    duration: number;
    isPause?: boolean;
    isStart?: boolean;
    isCompletedTimer(): void;
}

export interface TimerLineAngBlockProps {
    duration: number;
    isPause?: boolean;
}
