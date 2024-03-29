import Image from "next/image";

export default function Card(props) {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <a
        href={props.base_url + props.country.country.replace(" ", "_") + ".zip"}
      >
        <div className="flex items-center border-gray-900 border p-4 rounded-lg">
          <img
            alt={props.country}
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 border"
            crossorigin="anonymous"
            src={"https://flagcdn.com/" + props.country.code + ".svg"}
          />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium capitalize">
              {props.country.country}
            </h2>
          </div>
        </div>
      </a>
    </div>
  );
}
