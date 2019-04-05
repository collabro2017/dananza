import React from "react";

import "../../res/css/footer.css"

const Footer = props => {
  const { classes, handleToggleDrawer } = props;
  return (
      <div class="footer_section">
        <div class="footer_info">
          <div class="full_container">
            <div class="row">
              <div class="col-md-3 col-sm-3 for_business">
                <div class="footer_info_title">For Business</div>
                <ul>
                  <li>Epsum factorial</li>
                  <li>Deposit quid pro</li>
                  <li>Escorol</li>
                  <li>Tempus</li>
                  <li>Condominium</li>
                  <li>Facile et</li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="footer_info_title">For Adzas</div>
                <ul>
                  <li>Epsum factorial</li>
                  <li>Deposit quid pro</li>
                  <li>Escorol</li>
                  <li>Tempus</li>
                  <li>Condominium</li>
                  <li>Facile et</li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="footer_info_title">About</div>
                <ul>
                  <li>Company</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Help</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="footer_info_title">Search for Adzas</div>
                <div class="input-group input-group-lg">
                  <input type="text" class="form-control input-lg"/>
                  <i class="fa fa-search"></i>
                    <span class="input-group-btn">
                        <button class="btn bg-blue color-white" type="button">Search</button>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_copyright">
          <div>Copyright © 2018 Dananza - All Rights Reserved.</div>
          <div>Terms & Conditions</div>
          <div>Privacy</div>
          <div class="social_icons">
            <ul>
              <li>
                <a href="#" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
              <li>
                <a href="#" class="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Footer;
