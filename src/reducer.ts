import { tDesignState, tTimerState} from "./types/Types";

export const designInitialState = {
    color: "orange",
    mode: "pomodoro",
    font: 1
}

export const timerInitialState = {
    startTime: 0,
    pause: true,
    shortStartTime: 0,
    shortPause: true,
    longStartTime: 0,
    longPause: true,
}

export function designReducer(designState: tDesignState, action: { type: string; payload?: number }): tDesignState {
    switch (action.type) {
        case "toOrange":
            return {...designState, color: "orange"}
        case "toBlue":
            return {...designState, color: "blue"}
        case "toPurple":
            return {...designState, color: "purple"}
        case "setPomodoro":
            return {...designState, mode: "pomodoro"}
        case "setShort":
            return {...designState, mode: "short"}
        case "setLong":
            return {...designState, mode: "long"}
        case "setKumbhSans":
            return {...designState, font: 1}
        case "setRobotoSlab":
            return {...designState, font: 2}
        case "setSpaceMono":
            return {...designState, font: 3}
        default:
            return designState;
    }
}

export function timerReducer(timerState: tTimerState, action: { type: string; payload?: number }): tTimerState {
    switch (action.type) {
    case "setTime":
        return { ...timerState, startTime: action.payload ?? 1 };
    case "togglePause":
        return {...timerState, pause: !timerState.pause}
    case "changeOffset":
        return {...timerState, startTime: action.payload ?? 1}
    default:
        return timerState;
    }
}
