export type TState = {
    startTime: number;
    pause: boolean;
    color: string
    mode: string
    font: number
}

export type TDispatch = React.Dispatch<{type: string; payload?: number}>