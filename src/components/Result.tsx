import Complete from "/images/icon-complete.svg";

export default function Result() {
  return (
    <div>
      <img
        src={Complete}
        alt="complete icon"
        className="mt-[91px] ml-[148px] md:mt-[305px] md:ml-[500px]"
      />
      <h1
        className="text-[#21092f] text-[28px] font-medium tracking-[3.42px] mt-[35px] text-center
      md:ml-[349px] md:w-[381px]"
      >
        THANK YOU!
      </h1>
      <p
        className="text-[#8f8694] text-[18px] font-medium mt-[16px] text-center
      md:ml-[408px] md:w-[263px]"
      >
        We’ve added your card details
      </p>
      <button
        className="w-[327px] h-[53px] bg-[#21092f] rounded-[8px] mt-[48px] ml-[24px] text-white text-[18px] font-medium
      md:w-[381px] md:ml-[349px]"
      >
        Continue
      </button>
    </div>
  );
}
