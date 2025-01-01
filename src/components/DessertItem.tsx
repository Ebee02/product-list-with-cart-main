import { FC } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

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
  return (
    <div>
      <div className="relative border-none rounded-lg h-[220px] shadow-md w-full">
        <img
          src={props.image.mobile}
          alt="lorem"
          className="h-full w-full object-cover rounded-lg"
        />
        <button className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white font-semibold rounded-full py-3 px-4 border border-custom-rose-400 shadow-sm text-lg text-custom-rose-900 cursor-pointer w-[170px]">
          <span className="text-custom-rose-500">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </span>{" "}
          <p> Add to Cart</p>
        </button>
      </div>

      <div className="mt-7">
        <p className=" text-custom-rose-500">{props.category}</p>
        <p className="text-lg font-semibold text-custom-rose-900">
          {props.name}
        </p>
        <p className="text-primary font-medium text-lg">{props.price}</p>
      </div>
    </div>
  );
};

export default DessertItem;
