import React from "react";
import css from "../Footer/Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Ashu</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north east india </span>
            </span>

            <span className={css.pngLine}>
                {" "}
                <PhoneIcon className={css.icon}/>
                <a href="tel:352-306-4415">352-306-4415</a>

            </span>
            <span className={css.pngLine}>
                <InboxIcon className={css.icon}/>
                <a href="mailto:ashu@a.com">support@ashu.com</a>


            </span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
