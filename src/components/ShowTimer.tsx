import { useReducer } from "react";
import { reducer, initialState } from "../reducer";

const ShowTimer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { startTime } = state;

  function inc() {
    dispatch({ type: "inc", payload: 1 });
  }

  // console.log(startTime);

  return (
    <div className="w-[30rem] h-[30rem] rounded-[50%] bg-[#161932] m-auto mt-[4.8rem]">
      <div className="circle" style={{ color: "white" }}>
        <svg width="100%" height="100%" viewBox="0 0 269 269">
          <circle
            cx="134.5"
            cy="134.5"
            r="124.5"
            strokeWidth="20"
            fill="none"
            stroke="#272c5a"
            filter="url(#shadow)"
          ></circle>
          <circle
            cx="134.5"
            cy="134.5"
            r="100"
            strokeWidth="10"
            fill="none"
            stroke="#f87070"
          ></circle>
        </svg>
      </div>
      <div>
        <h4 className="text-[3rem] text-white" onClick={inc}>
          {startTime}
        </h4>
        <p>PAUSE</p>
      </div>
    </div>
  );
};

export default ShowTimer;
