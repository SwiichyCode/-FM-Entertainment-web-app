import React from "react";
import { PlayBtnWrapper } from "./PlayBtn.style";
import IconPlay from "../../assets/icon-play.svg";

export default function PlayBtn() {
  return (
    <PlayBtnWrapper>
      <img src={IconPlay} alt="" />
      <span>Play</span>
    </PlayBtnWrapper>
  );
}
