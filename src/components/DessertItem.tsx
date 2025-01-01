import { MdOutlineAddShoppingCart } from "react-icons/md";
const DessertItem = () => {
  return (
    <div>
      <div className="border-2 border-black rounded-lg h-52 w-full">
        <button className="bg-white font-medium rounded-full py-2 px-6 border border-custom-rose-400 text-custom-rose-900 text-lg">
          <span>
            <MdOutlineAddShoppingCart />
          </span>{" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DessertItem;
