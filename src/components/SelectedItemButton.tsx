import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const SelectedItemButton = () => {
  const [count, setCount] = useState(0);

  function incrementAmount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementAmount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  return (
    <div className="border-none shadow-sm duration-300 transition-all ease-in-out absolute -bottom-[25px] left-1/2 -translate-x-1/2 text-white flex items-center justify-between gap-3 bg-primary font-semibold rounded-full py-2 px-4 border-custom-rose-400 text-sm cursor-pointer w-[140px]">
      <button onClick={decrementAmount} className="text-xl">
        <CiCircleMinus />
      </button>
      <h3 className="text-lg font-semibold">{count}</h3>
      <button onClick={incrementAmount} className="text-xl">
        <CiCirclePlus />
      </button>
    </div>
  );
};

export default SelectedItemButton;
