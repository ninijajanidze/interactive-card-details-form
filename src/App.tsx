import {
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

import Cover from "/images/bg-main-mobile.png";
import CoverDesktop from "/images/bg-main-desktop.png";
import Form from "./components/Form";
import Result from "./components/Result";

interface FormData {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

function App() {
  const [formData, setFormData] =
    useState<FormData>({
      cardHolderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvc: "",
    });

  const [errors, setErrors] = useState({
    cardHolderName: false,
    cardNumber: false,
    expiryMonth: false,
    expiryYear: false,
    cvc: false,
  });

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const newErrors = {
      cardHolderName: !formData.cardHolderName,
      cardNumber: !formData.cardNumber,
      expiryMonth: !formData.expiryMonth,
      expiryYear: !formData.expiryYear,
      cvc: !formData.cvc.match(/^\d{3}$/),
    };
    setErrors(newErrors);
    if (
      Object.values(newErrors).every(
        (item) => !item
      )
    ) {
      setIsSubmitted(true);
    }
    {
      setFormData({
        cardHolderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvc: "",
      });
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === "cvc" && value.length > 3) {
      return;
    }
    if (
      name === "expiryMonth" &&
      value.length > 2
    ) {
      return;
    }
    if (
      name === "expiryYear" &&
      value.length > 2
    ) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  return (
    <div className="w-[375px] md:w-[1440px] md:flex">
      <div>
        <img
          src={Cover}
          alt="cover image"
          className="relative w-[375px] h-[240px] block md:hidden"
        />
        <img
          src={CoverDesktop}
          alt="cover image"
          className="hidden md:block w-[483px] h-[900px]"
        />

        <div
          className="absolute w-[286px] h-[157px] mt-[-208px] ml-[73px] bg-[url(/images/bg-card-back.png)] bg-cover 
        md:w-[447px] md:h-[245px] md:mt-[-440px] md:ml-[250px]"
        >
          <p
            className="mt-[70px] ml-[235px] text-[9px] font-medium tracking-[1.29px] text-white
          md:text-[14px] md:tracking-[2px] md:mt-[110px] md:ml-[360px]"
          >
            {formData.cvc}
          </p>
        </div>
        <div
          className="absolute w-[285px] h-[156px] mt-[-120px] ml-[15px] bg-[url(/images/bg-card-front.png)] bg-cover 
         md:w-[447px] md:h-[245px] md:mt-[-730px] md:ml-[160px]"
        >
          <p
            className="text-white text-[18px] font-medium tracking-[2.2px] mt-[84.5px] ml-[19px]
          md:text-[28px] md:tracking-[3.42px] md:mt-[139px] md:ml-[32px]"
          >
            {formData.cardNumber}
          </p>
          <div className="flex ml-[19px] justify-between md:mt-[20px] md:ml-[32px]">
            <p
              className="text-white text-[9px] font-medium tracking-[1.29px] w-[200px]
            md:text-[14px] md:tracking-[2px]"
            >
              {formData.cardHolderName.toUpperCase()}
            </p>
            <p
              className="text-white text-[9px] font-medium tracking-[1.29px] mr-[20px]
            md:text-[14px] md:tracking-[2px] md:mr-[32px]"
            >
              {formData.expiryMonth && (
                <>{formData.expiryMonth}/</>
              )}
              {formData.expiryYear}
            </p>
          </div>
        </div>
        <div
          className="absolute w-[30px] h-[30px] bg-white z-10 rounded-[50%] mt-[-100px] ml-[34px]
         md:w-[47px] md:h-[47px] md:mt-[-700px] md:ml-[186px]"
        ></div>
        <div
          className="absolute w-[13.6px] h-[13.5px] rounded-[50%] z-10 mt-[-92px] ml-[75px] border-[solid] border-[1px] border-[#fff]
         md:w-[21px] md:h-[21px] md:mt-[-687px] md:ml-[250px]"
        ></div>
      </div>
      {isSubmitted ? (
        <Result />
      ) : (
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
}

export default App;
