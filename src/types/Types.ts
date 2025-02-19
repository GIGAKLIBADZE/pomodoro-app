export type tTimerState = {
    startTime: number;
    pause: boolean;
    shortStartTime: number;
    shortPause: boolean;
    longStartTime: number;
    longPause: boolean;
}

export type tDesignState = {
    color: string
    mode: string
    font: number
}

export type tDispatch = React.Dispatch<{type: string; payload?: number}>