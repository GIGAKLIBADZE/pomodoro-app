import { tDesignState, tTimerState} from "./types/Types";

export const designInitialState = {
    color: "orange",
    mode: "pomodoro",
    font: 1
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

export const timerInitialState = {
    startTime: "0",
    pause: true,
    shortStartTime: "0",
    shortPause: true,
    longStartTime: "0",
    longPause: true,
}

export function timerReducer(timerState: tTimerState, action: { type: string; payload?: string }): tTimerState {
    switch (action.type) {
    case "setTime":
        return {...timerState, startTime: action.payload ?? "1" };
    case "setShortTime":
        return {...timerState, shortStartTime: action.payload ?? "1"}
    case "setLongTime":
        return {...timerState, longStartTime: action.payload ?? "1"}
    case "togglePause":
        return {...timerState, pause: !timerState.pause}
    case "toggleShortPause":
        return {...timerState, shortPause: !timerState.shortPause}
    case "toggleLongPause":
        return {...timerState, longPause: !timerState.longPause}
    case "pausePomodoro":
        return {...timerState, pause: true}
    case "continuePomodoro":
        return {...timerState, pause: false}
    case "pauseShortTime":
        return {...timerState, shortPause: true}
    case "continueShortTime":
        return {...timerState, shortPause: false}
    case "pauseLongTime":
        return {...timerState, longPause: true}
    case "continueLongTime":
        return {...timerState, longPause: true}
    // case "changeOffset":
    //     return {...timerState, startTime: action.payload ?? "1"}
    default:
        return timerState;
    }
}
