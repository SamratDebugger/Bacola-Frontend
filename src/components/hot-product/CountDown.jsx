export default function CountDown() {
  const counter = "count Down";
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2  rounded-box ">
        <span className="countdown font-mono text-xl ">
          <span
            style={{ "--value": 15 } /* as React.CSSProperties */}
            aria-live="polite"
            aria-label={counter}
          >
            15
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 rounded-box ">
        <span className="countdown font-mono text-xl">
          <span
            style={{ "--value": 10 } /* as React.CSSProperties */}
            aria-live="polite"
            aria-label={counter}
          >
            10
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2  rounded-box ">
        <span className="countdown font-mono text-xl">
          <span
            style={{ "--value": 24 } /* as React.CSSProperties */}
            aria-live="polite"
            aria-label={counter}
          >
            24
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2  rounded-box ">
        <span className="countdown font-mono text-xl">
          <span
            style={{ "--value": 59 } /* as React.CSSProperties */}
            aria-live="polite"
            aria-label={counter}
          >
            59
          </span>
        </span>
        sec
      </div>
    </div>
  );
}
