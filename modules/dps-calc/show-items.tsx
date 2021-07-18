import { DPSComponentProps } from "./apitypes";

const ShowItems = ({ owner, data }: DPSComponentProps) => {
  return (
    <ul>
      {data.map((d, index) =>
        d.owner === owner ? (
          <li
            key={index}
            className="flex items-center justify-between border-b p-2"
          >
            <p>{d.data.name}</p>
            <strong className="text-gray-800">{d.data.DPS}</strong>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default ShowItems;
