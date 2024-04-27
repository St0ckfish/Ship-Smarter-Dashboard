import HamburgerMenuIconSvg from "@/components/SvgIcons/HamburgerMenuSvgIcon";
import "../SidebarFlyoutGlobalStyles.css";

export default function HamburgerMenu() {
  return (
    <>
      <input className="toggle__checkbox" id="mobile__menu" type="checkbox" />

      <label className="hamburger__button" htmlFor="mobile__menu">
        <div className="mobile__menu__inner__wrapper">
          <HamburgerMenuIconSvg
            fill="#fff"
            className="icon"
            width={32}
            height={32}
          />
        </div>
      </label>
    </>
  );
}
