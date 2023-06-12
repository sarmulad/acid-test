import Flex from "../UI-elements/Flex";

const borderColor = {
  border: "2px solid transparent",
};

const NewsLetter = () => {
  return (
    <div className=" justify-center hidden lg:mt-12  lg:flex mb-10">
      <div className="pt-4 w-full ">
        <div
          style={borderColor}
          className="px-4 py-6 mt-6 bg-[#17254C] rounded-2xl "
        >
          <Flex className=" text-left flex-col justify-center items-start">
            <div className="font-bold font-plus-jkt-sans text-4xl leading-tight text-capitalize bg-gradient-to-r from-[#32F7AA] via-[#1D47FF] to-[#FFFFFF] bg-clip-text text-transparent opacity-90">
              Newsletter
            </div>
          </Flex>
          <div className="grid max-w-[220px] grid-cols-1  divide-y shadow-md my-4">
            <div className="opacity-60 border-2 border-[#BCD6FF]"></div>
          </div>
          <div className="font-medium font-plus-jkt-sans text-3xl leading-tight text-white opacity-70">
            Stay up-to-date with Acidbase, Subscribe to Our Newsletter!
          </div>

          <form className="mt-4">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative focus-visible:border-0">
              <input
                type="search"
                id="search"
                className="block w-full p-7 pl-10 text-sm text-white border-none rounded-lg bg-[#2A3B6B] placeholder:text-lg border-2 focus:outline-none focus-visible:border-bcolor"
                placeholder="Email address"
                required
              />

              <button
                type="submit"
                className="text-white absolute right-2.5 top-3 p-4 rounded-lg w-[250px] font-semibold"
                style={{
                  background:
                    "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
