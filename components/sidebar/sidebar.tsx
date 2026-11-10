import classNames from "classnames/bind";
import { useRouter } from "next/router";
import React from "react";
import Link from "../utils/link";
import classes from "./sidebar.module.scss";
const cx = classNames.bind(classes);

import ZeroXNav from "./navs/0x";
import BitPayNav from "./navs/bitpay";
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
  const router = useRouter();
  const navigation = (): PagePath[] => {
    if (router.pathname.includes("bitpay")) return BitPayNav;
    if (router.pathname.includes("0x")) return ZeroXNav;
    if (router.pathname.includes("portfolio")) return Portfolio;
    return [];
  };
  const routes = navigation();
  if (routes.length === 0) return null;

  const nav = (route: PagePath) => {
    const nested = (children: PagePath[]): React.ReactNode => (
      <>
        {children.map((child: PagePath) => (
          <React.Fragment key={child.path}>{nav(child)}</React.Fragment>
        ))}
      </>
    );
    const external = isLink(route.path);
    const current = router.pathname === route.path;
    return (
      <>
        {route.header ? (
          <div className={classes.major}>
            <Link href="/">Ash</Link>
            <span aria-hidden="true"> / </span>
            <Link
              href={route.path}
              aria-current={current ? "page" : undefined}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {route.label}
            </Link>
          </div>
        ) : (
          <Link
            href={route.path}
            aria-current={current ? "page" : undefined}
            className={cx({
              minor: true,
              active: current,
            })}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {route.label}
          </Link>
        )}

        {route.children && (
          <div className={classes.shift}>{nested(route.children)}</div>
        )}
      </>
    );
  };
  return (
    <nav className={classes.nav} aria-label="Section">
      {routes.map((route: PagePath) => (
        <React.Fragment key={route.path}>{nav(route)}</React.Fragment>
      ))}
    </nav>
  );
};

export default SideBar;
