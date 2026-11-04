import { useEffect, useState } from "react";

export default function Progress() {
  const duration = 60;

  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isRunning]);

  // Calculate progress percentage
  const progress = ((duration - timeLeft) / duration) * 100;

  // Format timer
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const handleRestart = () => {
    setTimeLeft(duration);
    setIsRunning(true);
  };

  return (
    <div className="w-full max-w-md p-5">
      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Timer */}
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-xl font-semibold text-gray-700">
          {formattedTime}
        </h3>

        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

  )
}
