import { useState } from "react";

const AgeCalulation = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const ageCalculator = () => {
    const currentDate = new Date();
    const dob = new Date(dateOfBirth);
    const yearDiff = currentDate.getFullYear() - dob.getFullYear();
    let calculatedAge = yearDiff;
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    const dayDiff = currentDate.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }

    document.getElementById("age").innerHTML = !dateOfBirth
      ? ""
      : `Your Age ${calculatedAge} year ${monthDiff} month ${dayDiff} day `;
  };

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 py-40 font-Pacifico">
      
        <div className="flex flex-col justify-center items-center gap-5  bg-[#FA8072] w-auto h-auto  p-24 md:p-20  rounded-lg">
           <h1 className="text-3xl">Calculate Your Age</h1>
          <label className="text-xl ">Your Date of BirthDay</label>
          <input
            type="date"
            className="font-Pacifico w-52 h-12 text-center rounded-lg"
            value={dateOfBirth}
            onChange={handleDateChange}
          />
          <button
            className="bg-white  p-2 text-xs text-black font-bold rounded-lg w-32"
            onClick={ageCalculator}
          >
            Click ME!
          </button>
        </div>
        <div>
          <h1>
            <span id="age" className="font-Pacifico text-2xl"></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default AgeCalulation;
