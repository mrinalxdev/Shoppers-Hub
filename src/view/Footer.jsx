import React from "react";
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="max-w-[1490px] mx-auto py-[120px]">
        <div className="flex flex-col items-center xs:items-start xl:flex-row xl:justify-between gap-12">
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
            <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
              {newsletter}
            </h2>
            <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11">
              <input
                type="text"
                placeholder="Email"
                className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white"
              />
              <div className="absolute top-2/4 -translate-y-2/4 right-3 navlink px-6 py-2.5 rounded-full cursor-pointer text-white">
                Subscribe
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div className="w-full flex mx-auto justify-center xl:justify-start">
                        <li
                          key={`list-item-${i}`}
                          className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit"
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div className="w-full flex mx-auto justify-center xl:justify-start">
                        <li
                          key={`list-item-${i}`}
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
