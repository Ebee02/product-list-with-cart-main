import { MdOutlineAddShoppingCart } from "react-icons/md";
const DessertItem = () => {
  return (
    <div>
      <div className="relative border-2 border-black rounded-lg h-52 w-full">
        <button className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white font-semibold rounded-full py-3 px-4 border border-custom-rose-400 shadow-sm text-lg text-custom-rose-900 cursor-pointer w-[170px]">
          <span className="text-custom-rose-500">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </span>{" "}
          <p> Add to Cart</p>
        </button>
      </div>

      <div className="mt-7">
        <p className=" text-custom-rose-500">Waffle</p>
        <p className="text-lg font-semibold text-custom-rose-900">
          Waffle with Berries
        </p>
        <p className="text-primary font-medium text-lg">$6.50</p>
      </div>
    </div>
  );
};

export default DessertItem;
