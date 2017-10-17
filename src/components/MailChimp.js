// import React from 'react';

// const MailChimp = () => {
//   return (
//     <div className="sbtci-mailchimp" id="mc_embed_signup">
//       <h3 style={{textAlign: 'center'}}>Subscribe to Email Updates About Your State</h3>
//       <form action="https://TaxFoundation.us1.list-manage.com/subscribe/post?u=fefb55dc846b4d629857464f8&amp;id=4b9873a934" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
//         <div className="sbtci-mailchimp-form" id="mc_embed_signup_scroll">
//           <input type="email" name="EMAIL" placeholder="Email" className="sbtci-mailchimp-email required email" id="mce-EMAIL" />
//           <input type="text" name="FNAME" className="sbtci-mailchimp-name required" placeholder="First Name" id="mce-FNAME" />
//           <select name="SBTCISTATE" className="sbtci-mailchimp-state" id="mce-SBTCISTATE">
//             <option value="" defaultValue disabled>Select Your State</option>
//             <option value="Alabama">Alabama</option>
//             <option value="Alaska">Alaska</option>
//             <option value="Arizona">Arizona</option>
//             <option value="Arkansas">Arkansas</option>
//             <option value="California">California</option>
//             <option value="Colorado">Colorado</option>
//             <option value="Connecticut">Connecticut</option>
//             <option value="Delaware">Delaware</option>
//             <option value="District of Columbia">District of Columbia</option>
//             <option value="Florida">Florida</option>
//             <option value="Georgia">Georgia</option>
//             <option value="Hawaii">Hawaii</option>
//             <option value="Idaho">Idaho</option>
//             <option value="Illinois">Illinois</option>
//             <option value="Indiana">Indiana</option>
//             <option value="Iowa">Iowa</option>
//             <option value="Kansas">Kansas</option>
//             <option value="Kentucky">Kentucky</option>
//             <option value="Louisiana">Louisiana</option>
//             <option value="Maine">Maine</option>
//             <option value="Maryland">Maryland</option>
//             <option value="Massachusetts">Massachusetts</option>
//             <option value="Michigan">Michigan</option>
//             <option value="Minnesota">Minnesota</option>
//             <option value="Mississippi">Mississippi</option>
//             <option value="Missouri">Missouri</option>
//             <option value="Montana">Montana</option>
//             <option value="Nebraska">Nebraska</option>
//             <option value="Nevada">Nevada</option>
//             <option value="New Hampshire">New Hampshire</option>
//             <option value="New Jersey">New Jersey</option>
//             <option value="New Mexico">New Mexico</option>
//             <option value="New York">New York</option>
//             <option value="North Carolina">North Carolina</option>
//             <option value="North Dakota">North Dakota</option>
//             <option value="Ohio">Ohio</option>
//             <option value="Oklahoma">Oklahoma</option>
//             <option value="Oregon">Oregon</option>
//             <option value="Pennsylvania">Pennsylvania</option>
//             <option value="Rhode Island">Rhode Island</option>
//             <option value="South Carolina">South Carolina</option>
//             <option value="South Dakota">South Dakota</option>
//             <option value="Tennessee">Tennessee</option>
//             <option value="Texas">Texas</option>
//             <option value="Utah">Utah</option>
//             <option value="Vermont">Vermont</option>
//             <option value="Virginia">Virginia</option>
//             <option value="Washington">Washington</option>
//             <option value="Washington D.C.">Washington D.C.</option>
//             <option value="West Virginia">West Virginia</option>
//             <option value="Wisconsin">Wisconsin</option>
//             <option value="Wyoming">Wyoming</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div id="mce-responses" className="clear">
//           <div className="response" id="mce-error-response" style={{display:'none'}}></div>
//           <div className="response" id="mce-success-response" style={{display:'none'}}></div>
//         </div>
//         <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
//           <input type="text" name="b_fefb55dc846b4d629857464f8_4b9873a934" tabIndex="-1" value="" />
//         </div>
//         <input
//           type="submit"
//           value="Subscribe"
//           name="subscribe"
//           id="mc-embedded-subscribe"
//           className="sbtci-button sbtci-button--centered sbtci-mailchimp-submit"
//         />
//       </form>
//     </div>
//   );
// };

// export default MailChimp;

import React from 'react';
import PropTypes from 'prop-types';
import jsonp from 'jsonp';
import validate from 'validate.js';

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class MailChimp extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      status: null,
      msg: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (validate({address: this.email.value}, {address: {email: true}})) {
      this.setState({
        status: 'error'
      });
      return;
    }

    const url = getAjaxUrl(this.props.action)
      + `&EMAIL=${encodeURIComponent(this.email.value)}`
      + `&FNAME=${encodeURIComponent(this.fname.value)}`
      + `&SBTCISTATE=${encodeURIComponent(this.stateSelect.value)}`;

    this.setState(
      {
        status: 'sending',
        msg: null
      }, () => jsonp(url, {
        param: 'c'
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          });
          console.error(data.msg);
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          });
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          });
          setTimeout(() => this.props.onSuccess(), 3000);
        }
      })
    );
  }

  render() {
    const { action, messages, style } = this.props;
    const { status } = this.state;
    return (
      <div className="sbtci-mailchimp" style={style}>
        <form action={action} method="post" noValidate>
          <h3 style={{textAlign: 'center'}}>Subscribe to Email Updates About Your State</h3>
          <div className="sbtci-mailchimp-form">
            <input
              ref={node => (this.email = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              className="sbtci-mailchimp-email"
              required={true}
              placeholder={messages.emailPlaceholder}
            />
            <input
              ref={node => (this.fname = node)}
              type="text"
              name="FNAME"
              className="sbtci-mailchimp-name required"
              placeholder={messages.fNamePlaceholder}
              required={true}
            />
            <select
              name="SBTCISTATE"
              className="sbtci-mailchimp-state"
              defaultValue=""
              id="mce-SBTCISTATE"
              ref={node => (this.stateSelect = node)}
            >
              <option value="" disabled>Select Your State</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="Washington D.C.">Washington D.C.</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
              <option value="Other">Other</option>
            </select>
            {status === 'success'
              ? (<p className="sbtci-mailchimp-success">Success! Check your inbox to confirm you subscription!</p>)
              : (
                <button
                  disabled={this.state.status === 'sending' || this.state.status === 'success'}
                  onClick={this.onSubmit}
                  type="submit"
                  className="sbtci-button sbtci-button--centered sbtci-mailchimp-submit"
                >
                  {status === null ? messages.btnLabel : null}
                  {status === 'sending' ? messages.sending : null}
                  {status === 'error' ? messages.error : null}
                </button>
              )
            }
          </div>
        </form>
      </div>
    );
  }
}

MailChimp.propTypes = {
  messages: PropTypes.object
};

MailChimp.defaultProps = {
  action: 'https://TaxFoundation.us1.list-manage.com/subscribe/post?u=fefb55dc846b4d629857464f8&amp;id=4b9873a934',
  messages: {
    emailPlaceholder: 'Email',
    fNamePlaceholder: 'First Name',
    btnLabel: 'Submit',
    sending: 'Submitting...',
    success: 'Success! Check inbox for confirmation!',
    error: 'There was an error.'
  }
};

export default MailChimp;