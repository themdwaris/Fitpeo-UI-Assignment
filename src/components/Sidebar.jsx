import { navigationLinks, setting, support } from "../data/navigation";
import { IoIosArrowBack} from "react-icons/io";
const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`md:w-60 h-screen md:sticky top-0 bg-[#E4EDFB] transition-all transform ${
        open
          ? "w-60 fixed top-0 left-0 overflow-auto z-50"
          : "w-0 overflow-hidden"
      } your-element`}
    >
      <div className="pt-6 md:pt-12 pl-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-[#44B8CB]">Health</span>
            <span className="text-[#110F67]">care.</span>
          </h1>
          <span className="block md:hidden mr-2 font-light text-gray-400 p-1 rounded-md border border-gray-300 cursor-pointer transition transform active:scale-90" onClick={()=>setOpen(false)}>
            <IoIosArrowBack size={22} />
          </span>
        </div>
        <div className="h-[calc(100vh-24px)] md:h-[calc(100vh-48px)] flex flex-col justify-between">
          <div>
            <div>
              <p className="my-5 text-sm text-gray-400">General</p>
              <div className="flex flex-col gap-3">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={link.name}
                      className={`flex items-center gap-3 py-2 rounded-lg ${
                        index === 0 ? "text-[#110F67]" : "opacity-45"
                      }`}
                    >
                      <span className="text-xl">
                        <Icon />
                      </span>
                      <span>{link.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="my-5 text-sm text-gray-400">Tools</p>
              <div className="flex flex-col gap-3">
                {support.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={link.name}
                      className={`flex items-center gap-3 py-2 rounded-lg opacity-35 `}
                    >
                      <span>
                        <Icon />
                      </span>
                      <span>{link.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pb-10 md:pb-12">
            {setting.map((link, index) => {
              const Icon = link.icon;
              return (
                <div
                  key={link.name}
                  className={`flex items-center gap-3 py-2 rounded-lg opacity-35 `}
                >
                  <span>
                    <Icon />
                  </span>
                  <span>{link.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
