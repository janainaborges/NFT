import * as S from "./style";
import nameIcon from "../../assets/svg/logo.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
import githubIcon from "../../assets/svg/github.svg";
import instagramIcon from "../../assets/svg/instagram.svg";
import linkedinIcon from "../../assets/svg/linkedin.svg";
import twitterIcon from "../../assets/svg/twitter.svg";
import { Button } from "primereact/button";

const subtitleData = ["Support", "Term of service", "License"];

const imagesData = [
  <img src={facebookIcon} alt="facebook" />,
  <img src={githubIcon} alt="github" />,
  <img src={instagramIcon} alt="instagram" />,
  <img src={linkedinIcon} alt="linkedin" />,
  <img src={twitterIcon} alt="twitter" />,
];
const socialData = ["Auctions", "Roadmap", "Discover", "Community"];

export function BoxFooter() {
  return (
    <S.Container>
      
      <S.Box1>
        <S.ContentTitle>
          <div>
            <img src={nameIcon} alt="" style={{ width: "10vh" }} />
          </div>
          <div>NFT Market</div>
        </S.ContentTitle>
        <S.ContentSubtitle>
          {subtitleData.map((e: any, index: any) => (
            <ul>
              <li>{e}</li>
            </ul>
          ))}
        </S.ContentSubtitle>
      </S.Box1>
      <S.Box2>
        <S.ContentSocial>
          {socialData.map((e: any) => (
            <ul>
              <li>{e}</li>
            </ul>
          ))}
        </S.ContentSocial>
          <Button label="My account" />
        <S.ContentImageSocial>
          {imagesData.map((e: any) => (
            <ul>
              <li>{e}</li>
            </ul>
          ))}
        </S.ContentImageSocial>
      </S.Box2>
      <S.Box3>
        <span>
        Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
        </span>
        <input type="text" />

      </S.Box3>
    </S.Container>
  );
}
