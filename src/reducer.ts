export const initialState = {
    startTime: 0,
    pause: true
}

export type TState = {
    startTime: number;
    pause: boolean;
}

export function reducer(state: TState, action: { type: string; payload?: number }): TState {
    switch (action.type) {
        case "setTime":
            return { ...state, startTime: action.payload ?? 1 };
        case "togglePause":
            return {...state, pause: !state.pause}
        default:
            return state;
    }
}
