import { DPSComponentProps } from "./apitypes";

const ShowItems = ({ owner, data }: DPSComponentProps) => {
  return (
    <ul className="h-112 overflow-auto border p-2 rounded-lg">
      {data.map((d, index) =>
        d.owner === owner ? (
          <li
            key={index}
            className="flex items-center justify-between border-b p-2"
          >
            <p>{d.data.name.trim()}</p>
            <strong className="text-gray-800">{d.data.DPS}</strong>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default ShowItems;
