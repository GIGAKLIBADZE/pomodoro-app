export type tTimerState = {
    startTime: string;
    pause: boolean;
    shortStartTime: string;
    shortPause: boolean;
    longStartTime: string;
    longPause: boolean;
}

export type tDesignState = {
    color: string
    mode: string
    font: number
}

export type tDispatch = React.Dispatch<{type: string; payload?: string}>