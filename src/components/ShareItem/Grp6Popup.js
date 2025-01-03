import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  XIcon,
  EmailIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import "./Grp6Popup.css";

function Grp6Popup({ shareUrl }) {
  return (
    <div className="share-popup text-center">
      <FacebookShareButton
        className="share-icon"
        url={shareUrl}
        quote="Check out this awesome website I found!"
        hashtag="#VisitMeIsAwesome"
      >
        <FacebookIcon round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        className="share-icon"
        url={shareUrl}
        title="Check out this awesome website I found!"
        hashtags={["VisitMeIsAwesome"]}
      >
        <XIcon round={true} />
      </TwitterShareButton>

      <EmailShareButton
        className="share-icon"
        url={shareUrl}
        subject="Check this out!"
        body="Check out this awesome website I found!"
      >
        <EmailIcon round={true} />
      </EmailShareButton>

      <FacebookMessengerShareButton
        className="share-icon"
        url={shareUrl}
        appId="YOUR_APP_ID"
      >
        <FacebookMessengerIcon round={true} />
      </FacebookMessengerShareButton>

      <WhatsappShareButton
        className="share-icon"
        url={shareUrl}
        title="Check out this awesome website I found!"
        separator=":: "
      >
        <WhatsappIcon round={true} />
      </WhatsappShareButton>

      <TelegramShareButton
        className="share-icon"
        url={shareUrl}
        title="Check out this awesome website I found!"
      >
        <TelegramIcon round={true} />
      </TelegramShareButton>
    </div>
  );
}

export default Grp6Popup;
