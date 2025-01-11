import { FC, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import SelectedItemButton from "./SelectedItemButton";

type DessertItemDataType = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };

  name: string;
  category: string;
  price: number;
};

const DessertItem: FC<DessertItemDataType> = (props) => {
  const [isCartSelected, setIsCartSelected] = useState(false);

  const handleClick = () => {
    setIsCartSelected(true);
  };

  return (
    <div>
      <div
        className={`transiton-all duration-200 relative ${
          isCartSelected ? "border-2 border-primary" : "border-none"
        } rounded-lg h-[220px] w-full shadow-sm`}
      >
        <img
          src={props.image.mobile}
          alt="lorem"
          className="h-full w-full object-cover rounded-lg"
        />

        {isCartSelected ? (
          <SelectedItemButton />
        ) : (
          <button
            onClick={handleClick}
            className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white font-semibold rounded-full py-3 px-4 border border-custom-rose-400 shadow-sm text-sm text-custom-rose-900 cursor-pointer w-[140px]"
          >
            <span className="text-custom-rose-500">
              <MdOutlineAddShoppingCart className="text-lg" />
            </span>
            <p> Add to Cart</p>
          </button>
        )}
      </div>

      <div className="mt-7">
        <p className=" text-custom-rose-500">{props.category}</p>
        <p className="text-lg font-semibold text-custom-rose-900">
          {props.name}
        </p>
        <p className="text-primary font-medium text-lg">
          {props.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default DessertItem;
