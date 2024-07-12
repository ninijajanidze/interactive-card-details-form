import React, {
  ChangeEvent,
  FormEvent,
} from "react";
import InputMask from "react-input-mask";

interface FormData {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

interface FormProps {
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>
  ) => void;
  errors: {
    cardHolderName: boolean;
    cardNumber: boolean;
    expiryMonth: boolean;
    expiryYear: boolean;
    cvc: boolean;
  };
}

const Form: React.FC<FormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[91px] mx-[24px] text-[#21092f] 
      md:mt-[260px] md:mr-[227px] md:ml-[349px] md:w-[381px]"
    >
      <div>
        <label
          htmlFor="cardHolderName"
          className="text-[12px] font-medium tracking-[2px]"
        >
          CARDHOLDER NAME
        </label>
        <input
          id="cardHolderName"
          name="cardHolderName"
          placeholder="e.g. Jane Appleseed"
          value={formData.cardHolderName}
          onChange={handleChange}
          className={`w-[327px] h-[45px] border-[solid] border-[1px] rounded-[8px] py-[11px] pl-[16px] mt-[9px] mb-[20px] text-[18px] font-medium placeholder-[#21092f] placeholder-opacity-25
          md:w-[381px] ${
            errors.cardHolderName
              ? "border-[#ff5050]"
              : "border-[#dfdee0]"
          }`}
        />
        {errors.cardHolderName && (
          <p className="text-[#ff5050] text-[11px] font-medium mt-[-14px] mb-[6px]">
            Can’t be blank
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="cardNumber"
          className="text-[12px] font-medium tracking-[2px]"
        >
          CARD NUMBER
        </label>
        <InputMask
          mask={"9999 9999 9999 9999"}
          maskChar={null}
          id="cardNumber"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formData.cardNumber}
          onChange={handleChange}
          className={`w-[327px] h-[45px] border-[solid] border-[1px] rounded-[8px] py-[11px] pl-[16px] mt-[9px] mb-[20px] text-[18px] font-medium placeholder-[#21092f] placeholder-opacity-25 
          md:w-[381px] ${
            errors.cardNumber
              ? "border-[#ff5050]"
              : "border-[#dfdee0]"
          }`}
        />
        {errors.cardNumber && (
          <p className="text-[#ff5050] text-[11px] font-medium mt-[-14px] mb-[10px]">
            Wrong format, numbers only
          </p>
        )}
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <label
            htmlFor="expiryMonth"
            className="text-[12px] font-medium tracking-[2px]"
          >
            EXP. DATE (MM/YY)
          </label>
          <div className="flex space-x-2">
            <input
              id="expiryMonth"
              name="expiryMonth"
              placeholder="MM"
              value={formData.expiryMonth}
              onChange={handleChange}
              className={`w-[72px] h-[45px] border-[solid] border-[1px] rounded-[8px] mt-[9px] py-[11px] pl-[16px] text-[18px] font-medium placeholder-[#21092f] placeholder-opacity-25
              md:w-[83px] ${
                errors.expiryMonth
                  ? "border-[#ff5050]"
                  : "border-[#dfdee0]"
              }`}
            />
            <input
              id="expiryYear"
              name="expiryYear"
              placeholder="YY"
              value={formData.expiryYear}
              onChange={handleChange}
              className={`w-[72px] h-[45px] border-[solid] border-[1px] rounded-[8px] mt-[9px] py-[11px] pl-[16px] text-[18px] font-medium placeholder-[#21092f] placeholder-opacity-25 
              md:w-[83px] ${
                errors.expiryYear
                  ? "border-[#ff5050]"
                  : "border-[#dfdee0]"
              }`}
            />
          </div>
          {(errors.expiryMonth ||
            errors.expiryYear) && (
            <p className="text-[#ff5050] text-[11px] font-medium mt-[6px]">
              Can’t be blank
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="cvc"
            className="text-[12px] font-medium tracking-[2px]"
          >
            CVC
          </label>
          <input
            id="cvc"
            name="cvc"
            placeholder="e.g. 123"
            value={formData.cvc}
            onChange={handleChange}
            className={`w-[164px] h-[45px] border-[solid] border-[1px] rounded-[8px] mt-[9px] py-[11px] pl-[16px] text-[18px] font-medium placeholder-[#21092f] placeholder-opacity-25 
            md:w-[191px] ${
              errors.cvc
                ? "border-[#ff5050]"
                : "border-[#dfdee0]"
            }`}
          />
          {errors.cvc && (
            <p className="text-[#ff5050] text-[11px] font-medium mt-[6px]">
              Can’t be blank
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-[327px] h-[53px] bg-[#21092f] text-[18px] font-medium text-white rounded-[8px] mt-[28px]
        md:mt-[40px] md:w-[381px]"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
