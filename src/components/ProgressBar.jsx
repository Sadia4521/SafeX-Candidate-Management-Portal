export default function ProgressBar({ progress }) {
  return (
    <div className="mt-4">

      <div className="flex justify-between mb-2">

        <span className="font-medium">

          Progress

        </span>

        <span>

          {progress}%

        </span>

      </div>

      <div className="bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
}