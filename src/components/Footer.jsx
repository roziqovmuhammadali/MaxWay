import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <footer className="border-t border-[#eef0f2] bg-white py-8 px-[120px]">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <NavLink to="/">
            <div className="max-h-12 max-w-12 sm:max-w-[38px] md:max-h-[38px]">
              <img
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75"
                alt="site logo"
                className="w-full object-fill"
              />
            </div>
          </NavLink>
          <nav className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex ">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink to="/branches">
                  <p className="py-1 text-[18px]">Filiallar</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <p className="py-1 text-[18px]">Biz haqimizda</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">
                  <p className="py-1 text-[18px]">Bog'lanish</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="h-1 w-1"></div>
        </div>
        <div className="flex items-center justify-between border-t border-[#eef0f2] pt-5">
          <p className="text-[16px] text-[#808080]">
            © Delever 2020 - 2024 Barcha huquqlar himoyalangan
          </p>
          <div className="flex items-center justify-center gap-4">
            <TargetLink url={"https://www.instagram.com/maxwayuz/"}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="InstagramIcon"
                fill="#808080"
                width={24}
                height={24}>
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </TargetLink>
            <TargetLink url={"https://www.facebook.com/maxway.uzb/"}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FacebookOutlinedIcon"
                fill="#808080"
                width={24}
                height={24}>
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
              </svg>
            </TargetLink>
            <TargetLink url={"https://www.youtube.com/@maxway2010"}>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="YouTubeIcon"
                fill="#808080"
                width={24}
                height={24}>
                <path d="M3 4v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm14 12v-2h2v2h-2zm0-4v-2h2v2h-2zm-4 4h-2v-4h2v4zm0-6h-2V6h2v4zm-4 6H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V6h2v4z"></path>
              </svg>
            </TargetLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
