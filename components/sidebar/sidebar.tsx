import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../../pages/_app";
import Link from "../utils/link";
import classNames from "classnames/bind";
import classes from "./sidebar.module.scss";
const cx = classNames.bind(classes);

import BitPayNav from "./navs/bitpay";
import ZeroXNav from "./navs/0x";
import Portfolio from "./navs/portfolio";

interface PagePath {
  path: string;
  label: string;
  header?: boolean;
  children?: PagePath[];
}

const isLink = (link: string): boolean => {
  return /^https?:\/\//.test(link);
};

const SideBar: React.FC = () => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const navigation = (): PagePath[] => {
    if (router.pathname.includes("bitpay")) return BitPayNav;
    if (router.pathname.includes("0x")) return ZeroXNav;
    if (router.pathname.includes("portfolio")) return Portfolio;
    return [];
  };
  const nav = (route: PagePath) => {
    const nested = (children: PagePath[]): React.ReactChild => (
      <>
        {children.map((route: PagePath, index: number) => (
          <React.Fragment key={index}>{nav(route)}</React.Fragment>
        ))}
      </>
    );
    return (
      <>
        {route.header ? (
          <div className={classes.major}>
            <Link href="/">
              <a style={{ opacity: theme.dark ? 0.4 : 0.25 }}>
                Ash &nbsp;/&nbsp;&nbsp;
              </a>
            </Link>
            <Link href={route.path}>
              <a
                target={isLink(route.path) ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                {route.label}
              </a>
            </Link>
          </div>
        ) : (
          <Link href={route.path}>
            <a
              className={cx({
                minor: true,
                active: router.pathname === route.path,
              })}
              target={isLink(route.path) ? "_blank" : ""}
              rel="noopener noreferrer"
            >
              {route.label}
            </a>
          </Link>
        )}

        {route.children && (
          <div className={classes.shift}>{nested(route.children)}</div>
        )}
      </>
    );
  };
  return (
    <nav
      className={cx({
        nav: true,
        dark: theme.dark,
      })}
    >
      {navigation().map((route: PagePath, index: number) => (
        <React.Fragment key={index}>{nav(route)}</React.Fragment>
      ))}
    </nav>
  );
};

export default SideBar;
