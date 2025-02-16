export const initialState = {
    startTime: 0,
    pause: true,
    color: "orange",
    mode: "pomodoro"
}

export type TState = {
    startTime: number;
    pause: boolean;
    color: string
    mode: string
}

export function reducer(state: TState, action: { type: string; payload?: number }): TState {
    switch (action.type) {
        case "setTime":
            return { ...state, startTime: action.payload ?? 1 };
        case "togglePause":
            return {...state, pause: !state.pause}
        case "changeOffset":
            return {...state, startTime: action.payload ?? 1}
        case "toOrange":
            return {...state, color: "orange"}
        case "toBlue":
            return {...state, color: "blue"}
        case "toPurple":
            return {...state, color: "purple"}
        case "setPomodoro":
            return {...state, mode: "pomodoro"}
        case "setShort":
            return {...state, mode: "short"}
        case "setLong":
            return {...state, mode: "long"}
        default:
            return state;
    }
}
