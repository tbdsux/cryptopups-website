import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pupPerks } from './perks';

const getEtherealListColor = (index: number) => {
  if (index == 0) {
    return 'text-opaque-orange';
  }

  if (index == 1) {
    return 'text-opaque-pink';
  }

  return 'text-opaque-purple';
};

const ViewPerksContent = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center items-stretch relative">
        {pupPerks.map((p, index) => (
          <div
            key={index}
            className="w-80 m-6 rounded-[2rem] border border-gray-100 shadow-2xl px-6 py-16"
          >
            <div className="inline-flex flex-col items-center justify-center">
              <h2
                className={`font-alt font-bold text-3xl tracking-wide uppercase ${p.class.color}`}
              >
                {p.rank}
              </h2>
              <div
                className={`mt-0.5 py-0.5 rounded-full w-3/5 font-medium ${p.class.background}`}
              ></div>
            </div>

            <ul className="mt-6 mx-4">
              <ul className="">
                {p.perks.map((perk, ix) => (
                  <li
                    key={ix}
                    className="p-1 my-2 text-gray-700 font-medium flex items-start text-left"
                  >
                    {perk != '' ? (
                      <FontAwesomeIcon
                        icon={faPaw}
                        className={`text-xl mr-3 ${
                          p.rank != 'Eternity Pups' ? p.class.color : getEtherealListColor(ix)
                        }`}
                      />
                    ) : (
                      <></>
                    )}
                    {perk}
                  </li>
                ))}
              </ul>
            </ul>

            <div className={`flex flex-col items-end ${p.class.space}`}>
              <strong className={`text-5xl font-black italic ${p.class.color} px-2`}>
                {p.dps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </strong>
              <span className="text-xl italic text-gray-500 px-2">dps required</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPerksContent;
