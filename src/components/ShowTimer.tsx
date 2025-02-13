const ShowTimer: React.FC = () => {
  return (
    <div className="w-[30rem] h-[30rem] rounded-[50%] bg-[#161932] m-auto mt-[4.8rem]">
      <div className="circle" style={{ color: "white" }}>
        <svg width="100%" height="100%" viewBox="0 0 269 269">
          <defs>
            <filter id="shadow">
              {/* <feDropShadow
              // dx="10"
              // dy="10"
              // stdDeviation="15"
              // floodColor="#272c5a"
              /> */}
            </filter>
          </defs>
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
    </div>
  );
};

export default ShowTimer;
