import React from 'react';

const Footer = (props) => {
  return (
    <footer className="sbtci-footer">
      <div className="sbtci-footer-info container">
        <div className="sbtci-footer-contact">
          <a style={{display: 'inline-block'}} href="https://taxfoundation.org">
            <svg x="0px" y="0px" width="228px" height="35px" viewBox="0 0 228 35" style={{display: 'block'}}>
              <polygon fill="#235485" points="42.5,26 45.5,26 45.5,12 50.5,12 50.5,9 37.5,9 37.5,12 42.5,12 	"/>
              <path fill="#235485" d="M56.736,9H53.5l-6.422,17H50l1.5-4h7l1.5,4h3.5l-0.336-0.28L56.736,9z M52.5,19l2.598-7.053h0.047h0.024L57.709,19H52.5z"/>
              <polygon fill="#235485" points="78,9 74.782,9 63.5,26 63.5,26 66.738,26 	"/>
              <polygon fill="#235485" points="67,9 63.5,9 75,26 78.5,26 	"/>
              <polygon fill="#235485" points="88.5,26 91.5,26 91.5,19.001 98.5,19.001 98.5,16 91.5,16 91.5,12 100.5,12 100.5,9 88.5,9 	"/>
              <path fill="#235485" d="M108.5,8.5c-5,0-8,4.5-8,9s3,9,8,9s8-4.5,8-9S113.5,8.5,108.5,8.5z M108.5,24c-4,0-5-4-5-6.5s1-6.5,5-6.5s5,4,5,6.5S112.5,24,108.5,24z"/>
              <path fill="#235485" d="M128.5,18.898c0,2.102,0,5.102-4,5.102s-4-3-4-5.102V9h-3v10.872c0,4.128,3,6.628,7,6.628s7-2.5,7-6.628V9h-3V18.898z"/>
              <polygon fill="#235485" points="144.5,21.512 136.5,9 133.5,9 133.5,26 136.5,26 136.5,13.509 144.5,26 147.5,26 147.5,9 144.5,9 	"/>
              <path fill="#235485" d="M156.5,9h-7v17h7c5,0,7-4,7-8.503C163.5,13,161.5,9,156.5,9z M155,23.549h-2.5v-12.1h2.5c4.641,0,5.5,2.551,5.5,6.049C160.5,21,159.641,23.549,155,23.549z"/>
              <rect x="191.5" y="9" fill="#235485" width="3" height="17"/>
              <path fill="#235485" d="M17.5,1C8.388,1,1,8.387,1,17.5c0,3.438,1.052,6.63,2.852,9.271L4.5,25c0,0,4-2,6-2c1,0,2,0,4,1c-1-2-3-2-4-2c-3,0-6,2-6,2l-1-1c0-0.5,0.5-0.875,1-1c0,0,3-2,5-2c1,0,3,0,4,1c-1-2-3-2-4-2c-2,0-5,2-5,2c0-1,1-2,1-2c0-2,4-5,4-5v-2l1-3l1,3v2c0,0,4,3,4,5c0,0,1,1,1,2c0,0,0,1-1,1c0,0,2,0,2,1l-1,1v1l13.158,3.65C32.355,25.714,34,21.8,34,17.5C34,8.387,26.613,1,17.5,1z"/>
              <polygon fill="#235485" points="12.5,26 10.5,27 8.5,26 5.5,28 4.5,28 5.5,29 8.5,27 8.5,31 9.5,32 9.5,27.5 10.5,28 11.5,27.5 11.5,32 12.5,33 12.5,27 14.5,27.5 14.5,33 15.5,33 15.5,27.75 17.5,28.25 17.5,33 18.5,33 18.5,28.5 20.5,29 20.5,33 21.5,33 21.5,29.25 23.5,29.75 23.5,33 24.5,32 24.5,30 28.5,31 28.5,30 	"/>
              <path fill="#235485" d="M172.5,9h-3L163,26h3l1.5-4h7l1.5,4h3L172.5,9z M168.5,19l2.5-7l2.5,7H168.5z"/>
              <polygon fill="#235485" points="181.5,26 184.5,26 184.5,12 189.5,12 189.5,9 176.5,9 176.5,12 181.5,12 	"/>
              <polygon fill="#235485" points="223.5,21.512 215.5,9 212.5,9 212.5,26 215.5,26 215.5,13.509 223.5,26 226.5,26 226.5,9 223.5,9 	"/>
              <path fill="#235485" d="M203.5,8.5c-5,0-8,4.5-8,9s3,9,8,9s8-4.5,8-9S208.5,8.5,203.5,8.5z M203.5,24c-4,0-5-4-5-6.5s1-6.5,5-6.5s5,4,5,6.5S207.5,24,203.5,24z"/>
            </svg>
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
