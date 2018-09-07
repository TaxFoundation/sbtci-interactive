import React from 'react';
import { FooterLogo } from './Images';

const Footer = (props) => {
  return (
    <footer className="sbtci-footer">
      <div className="sbtci-footer-info container">
        <div className="sbtci-footer-contact">
          <a style={{display: 'inline-block'}} href="https://taxfoundation.org">
            <a
              style={{ display: 'inline-block' }}
              href="https://taxfoundation.org"
            >
              <FooterLogo />
          </a>
          <p style={{margin: '0.2rem 0 0 2.4rem'}}>
            1325 G St NW
            <br/>
            Suite 950
            <br/>
            Washington, DC 20005
          </p>
        </div>
        <div className="sbtci-footer-about">
          <p style={{margin: '0'}}>
            The <a href="https://taxfoundation.org">Tax Foundation</a> is the nation’s leading independent tax policy research organization. Since 1937, our principled research, insightful analysis, and engaged experts have informed smarter tax policy at the federal, state, and local levels. We improve lives through tax policy research and education that leads to greater economic growth and opportunity.
          </p>
        </div>
      </div>
      <div className="sbtci-footer-links hide-print">
        <ul className="container">
          <li>Copyright 2017 Tax Foundation</li>
          <li><a href="https://www.facebook.com/taxfoundation">Facebook</a></li>
          <li><a href="https://twitter.com/taxfoundation">Twitter</a></li>
          <li><a href="https://taxfoundation.org/privacy-policy/">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
