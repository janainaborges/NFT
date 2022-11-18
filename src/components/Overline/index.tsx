import * as S from './style'
import overlineIcon from "../../assets/svg/overline.svg";

export function Overline() {
  return (
    <S.Container>
      <S.Content>
      <S.ContentInfo>
        <span>Overline</span>
        <h2>
        Sapien ipsum 
        scelerisque 
        convallis fusce
        </h2>
        <span>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</span>
      </S.ContentInfo>
      <div>
        <img src={overlineIcon} alt="" style={{ height: "400px" }} />
      </div>
      </S.Content>
    </S.Container>
  );
}
