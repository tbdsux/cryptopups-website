const ListBlogs = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <li className="flex flex-col border rounded-xl">
        <div className="w-full rounded-t-xl h-48 bg-neutral-200"></div>

        <h4 className="leading-loose text-2xl trackig-wide text-neutral-100 bg-neutral-800 p-3">
          <strong>Adventure Pups Launch!</strong>
        </h4>

        <div className="flex text-sm items-center border-t border-b py-2 px-2 text-neutral-600">
          <p className="font-bold tracking-wide text-neutral-600">@Aleckkks</p>
          <span className="mx-2">|</span>
          <p>{new Date().toLocaleString()}</p>
        </div>

        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae ipsam laudantium
            repellat officiis laborum quo voluptas dicta natus temporibus.
          </p>
          <button className="py-1 px-4 rounded-md text-sm mt-2 border border-warmGray-500 hover:bg-warmGray-700 hover:border-warmGray-700 hover:text-neutral-100 duration-300 tracking-wide font-normal">
            Read More
          </button>
        </div>
      </li>

      <li className="flex flex-col border rounded-xl">
        <div className="w-full rounded-t-xl h-48 bg-neutral-200"></div>

        <h4 className="leading-loose text-2xl trackig-wide text-neutral-100 bg-neutral-800 p-3">
          <strong>Adventure Pups Launch!</strong>
        </h4>

        <div className="flex text-sm items-center border-t border-b py-2 px-2 text-neutral-600">
          <p className="font-bold tracking-wide text-neutral-600">@Aleckkks</p>
          <span className="mx-2">|</span>
          <p>{new Date().toLocaleString()}</p>
        </div>

        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae ipsam laudantium
            repellat officiis laborum quo voluptas dicta natus temporibus.
          </p>
          <button className="py-1 px-4 rounded-md text-sm mt-2 border border-warmGray-500 hover:bg-warmGray-700 hover:border-warmGray-700 hover:text-neutral-100 duration-300 tracking-wide font-normal">
            Read More
          </button>
        </div>
      </li>

      <li className="flex flex-col border rounded-xl">
        <div className="w-full rounded-t-xl h-48 bg-neutral-200"></div>

        <h4 className="leading-loose text-2xl trackig-wide text-neutral-100 bg-neutral-800 p-3">
          <strong>Adventure Pups Launch!</strong>
        </h4>

        <div className="flex text-sm items-center border-t border-b py-2 px-2 text-neutral-600">
          <p className="font-bold tracking-wide text-neutral-600">@Aleckkks</p>
          <span className="mx-2">|</span>
          <p>{new Date().toLocaleString()}</p>
        </div>

        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae ipsam laudantium
            repellat officiis laborum quo voluptas dicta natus temporibus.
          </p>
          <button className="py-1 px-4 rounded-md text-sm mt-2 border border-warmGray-500 hover:bg-warmGray-700 hover:border-warmGray-700 hover:text-neutral-100 duration-300 tracking-wide font-normal">
            Read More
          </button>
        </div>
      </li>
    </ul>
  );
};

export default ListBlogs;
