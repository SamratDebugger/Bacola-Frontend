export default function Safety() {
  return (
    <div className="flex justify-between items-center relative overflow-hidden rounded-xl min-h-45 bg-[#f8eee9]">
      <div className="p-10 z-10">
        <h4 className="text-gray-500">Always Taking Care</h4>
        <h3 className="text-xl">
          In store or online your health & safety is our top priority.
        </h3>
      </div>

      <img
        className="absolute right-0 top-0 "
        src="/assets/images/safety-banner.jpg"
        alt="Safety banner"
      />
    </div>
  );
}
