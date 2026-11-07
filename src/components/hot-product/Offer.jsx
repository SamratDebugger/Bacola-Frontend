import CountDown from "./CountDown";

export default function Offer() {
  return (
    <div className="border border-error flex max-lg:flex-col  justify-center lg:justify-start  items-center my-10 rounded-xl">
      <div>
        <img
          className="w-full lg:max-w-60 p-5"
          src="/assets/images/chobani.jpg"
          alt="chobani img"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h4 className="text-error">$5.49</h4>
        <h3>Chobani complete vanila greek yogurt</h3>
        <p>
          1kg <span className="text-success">IN STOCK</span>
        </p>
        <progress
          className="progress progress-error w-full"
          value="70"
          max="100"
        ></progress>

        <CountDown />
      </div>
    </div>
  );
}
