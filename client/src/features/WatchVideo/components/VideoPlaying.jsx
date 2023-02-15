import React from "react";
import PropTypes from "prop-types";
import "../assets/VideoPlaying.css";

export default function VideoPlaying({ handleSubscribeVideo }) {
  return (
    <div className="videoPlaying">
      {/* place display video */}
      <div className="videoPlaying__video">
        <video controls>
          <source src="/videos/charliePuth.webm" />
        </video>
      </div>

      {/* place display tag name*/}
      <div className="videoPlaying__tags">LCK</div>

      {/* place display video title  */}
      <div className="videoPlaying__title"> day la tieu de cua video</div>

      {/* place display taskbar contain : channel , like , dislike , share and  other more options */}
      <div className="watchVideo__interactWithVideo">
        {/* owner channel*/}
        <div className="watchVideo__interactWithVideo__channel">
          {/*  channel avatar */}
          <img
            src="/images/girl.png"
            alt=""
            className="watchVideo__interactWithVideo__channel__avtChannel"
          />
          {/* info of the channel */}
          <div className="watchVideo__interactWithVideo__channel__info">
            <div className="watchVideo__interactWithVideo__channel__info__channelName">
              conmeomaunau
            </div>
            <div className="watchVideo__interactWithVideo__channel__info__subscribers">
              30N subscribers
            </div>
          </div>
          {/*  subscription button */}
          <div
            className="watchVideo__interactWithVideo__channel__subscriptionButton"
            onClick={handleSubscribeVideo}
          >
            Subscription
          </div>
        </div>
        {/* menu */}
        <div className="watchVideo__interactWithVideo__menu">
          {/* drop feeling with video : like , dislike */}
          <div className="watchVideo__interactWithVideo__menu__feel">
            <div className="watchVideo__interactWithVideo__menu__feel__like">
              <img
                src="/images/like-icon.svg"
                alt=""
                className="interactWithVideo--iconSize"
              />
              <div className="watchVideo__interactWithVideo__menu__feel__like__subscribers">
                30 n
              </div>
            </div>
            <div className="watchVideo__interactWithVideo__menu__feel__disLike">
              <img
                src="/images/dislike-icon.svg"
                alt=""
                className="interactWithVideo--iconSize"
              />
            </div>
          </div>

          {/* share video with other options  */}
          <div className="watchVideo__interactWithVideo__menu__shareVideo">
            <img
              src="/images/share-icon.svg"
              alt="share icon"
              className="interactWithVideo--iconSize"
            />
            <div className="watchVideo__interactWithVideo__menu__shareVideo__text">
              {" "}
              share{" "}
            </div>
          </div>

          {/*  other interact options  */}
          <div className="watchVideo__interactWithVideo__menu__options">
            <img
              src="/images/more-icon.svg"
              alt="more-icon"
              className="watchVideo__interactWithVideo__menu__options__optionsIcon "
            />
          </div>
        </div>
      </div>

      {/* place display descriptor video */}
      <div className="videoPlaying__descriptor">
        <div className="videoPlaying__descriptor__top">
          <div className="videoPlaying__descriptor__top__views">
            888
            <span>n</span>
            views
          </div>
          <div className="videoPlaying__descriptor__top__time">
            1 minutes ago
          </div>
        </div>
        {/* {descriptor} */}
        <div>
          this is descriptor , one piece of the short word Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Beatae doloremque dicta odio
          eos delectus excepturi sint magnam porro labore voluptates blanditiis
          obcaecati cum, sed numquam ad aperiam minus et pariatur!
        </div>
      </div>

      {/* place display  all comment of user*/}
      <div className="videoPlaying__bottom">
        <div className="videoPlaying__bottom__analysisAndTool">
          <div>0 comments </div>
          <div> tools</div>
        </div>

        <div className="videoPlaying__bottom__comment">
          <img
            src="/images/girl.png"
            alt="girl"
            className="videoPlaying__bottom__comment__userAvt"
          />

          <form className="videoPlaying__bottom__comment__form">
            <input
              type="text"
              className="videoPlaying__bottom__comment__form__input"
              placeholder="Write your comment..."
            />
            <div className="videoPlaying__bottom__comment__form__button">
              <button className="button--custom videoPlaying__bottom__comment__form__button__cancel">
                cancel
              </button>
              <button className="button--custom videoPlaying__bottom__comment__form__button__send">
                comment
              </button>
            </div>
          </form>
        </div>

        <div className="videoPlaying__bottom__comments "></div>
      </div>
    </div>
  );
}

VideoPlaying.propTypes = {
  handleSubscribeVideo: PropTypes.func,
};

VideoPlaying.defaultProps = {
  handleSubscribeVideo: () => {},
};
