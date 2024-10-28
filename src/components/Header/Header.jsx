"use client";
import styles from "./Header.module.css";
import { useRouter, usePathname } from "next/navigation";
import CartIcon from "../../../public/CartIcon";
import FavoritesIcon from "../../../public/FavoritesIcon";
import SearchIcon from "../../../public/SearchIcon";
import UserIcon from "../../../public/UserIcon";
import Burger from "../../../public/Burger";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const handleSearch = () => {
    router.push(`/products/?query=${search}`);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navleft}>
          <div className={styles.logo}>
            <Link href="/">
              <img src="/Logo.png" alt="Logo" />
            </Link>
          </div>
          <div className={styles.search}>
            <SearchIcon />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
            </form>
          </div>
        </div>
        <div className={styles.navright}>
          <div className={styles.links}>
            <Link href="/" className={pathname === "/" ? styles.selectedlink : ""}>
              Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? styles.selectedlink : ""}>
              About
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? styles.selectedlink : ""}>
              Contact Us
            </Link>
            <Link href="/blog" className={pathname === "/blog" ? styles.selectedlink : ""}>
              Blog
            </Link>
          </div>
          <div className={styles.icons}>
            <FavoritesIcon />
            <CartIcon />
            <UserIcon />
          </div>
          <div
            onClick={() => setShowNav(!showNav)}
            className={styles.burger}
          >
            <Burger />
          </div>
        </div>
      </nav>
      <nav style={showNav ? {} : { top: "-102%" }} className={styles.phonenav}>
        <div className={styles.phonelinks}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowNav(false);
              handleSearch();
            }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className={styles.phonesearchinput}
            />
          </form>
          <Link href="/" onClick={() => setShowNav(false)} className={pathname === "/" ? styles.selectedphonenavlink : ""}>
            Home
          </Link>
          <Link href="/about" onClick={() => setShowNav(false)} className={pathname === "/about" ? styles.selectedphonenavlink : ""}>
            About
          </Link>
          <Link href="/contact" onClick={() => setShowNav(false)} className={pathname === "/contact" ? styles.selectedphonenavlink : ""}>
            Contact Us
          </Link>
          <Link href="/blog" onClick={() => setShowNav(false)} className={pathname === "/blog" ? styles.selectedphonenavlink : ""}>
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
