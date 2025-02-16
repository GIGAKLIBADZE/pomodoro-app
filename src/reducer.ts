export const initialState = {
    startTime: 0,
    pause: true,
    color: "orange",
    mode: "pomodoro",
    font: 1
}

export type TState = {
    startTime: number;
    pause: boolean;
    color: string
    mode: string
    font: number
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
        case "setKumbhSans":
            return {...state, font: 1}
        case "setRobotoSlab":
            return {...state, font: 2}
        case "setSpaceMono":
            return {...state, font: 3}
        default:
            return state;
    }
}
