import { Link } from "react-router";

export default function Restcard({ value }) {
    return (
      <>
       <Link to={'/city/delhi/'+value.info.id}>
        <div className="hover:scale-90 transform transition duration-300">
          <img
            className="h-46 w-70 rounded-2xl flex-shrink-0"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.cloudinaryImageId}`}
            alt=""
          />
          <div className="w-70 mx-auto mt-4">
            <div className="font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis">
              {value?.info?.name}
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
              </svg>
              <span className="text-lg">{value?.info?.avgRating}</span>
              <span className="text-lg">{value?.info?.sla?.slaString}</span>
            </div>
          </div>
  
          <div className="text-gray-600 text-xl w-70 whitespace-nowrap overflow-hidden text-ellipsis">
            {value?.info?.cuisines?.join(' ,')}
          </div>
          <div className="text-gray-600 text-xl w-70 whitespace-nowrap overflow-hidden text-ellipsis">
            {value?.info?.locality}
          </div>
        </div>
        </Link>
      </>
    );
  }
  