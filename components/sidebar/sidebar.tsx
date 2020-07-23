import React from "react";
import { useRouter } from "next/router";
import Link from "../utils/link";
import classNames from "classnames/bind";
import classes from "./sidebar.module.scss";

const cx = classNames.bind(classes);

interface PagePath {
  path: string;
  label: string;
  children?: PagePath[];
}

import BitPayNav from "./navs/bitpay";

const SideBar: React.FC = () => {
  const router = useRouter();
  const navigation = (): PagePath[] => {
    if (router.pathname.includes("bitpay")) return BitPayNav;
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
        {navigation().some((r) => r.path === route.path) ? (
          <div className={classes.major}>
            <Link href="/">
              <a style={{ opacity: 0.25 }}>Ash &nbsp;/&nbsp;&nbsp;</a>
            </Link>
            <Link href={route.path}>
              <a>{route.label}</a>
            </Link>
          </div>
        ) : (
          <Link href={route.path}>
            <a
              className={cx({
                minor: true,
                active: router.pathname === route.path,
              })}
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
    <nav className={classes.nav}>
      {navigation().map((route: PagePath, index: number) => (
        <React.Fragment key={index}>{nav(route)}</React.Fragment>
      ))}
    </nav>
  );
};

export default SideBar;
