import StyledSection from "../../components/StyledSection";
import StyledHeadline from "../../components/StyledHeadline";
import StyledVolumeLink from "../../components/StyledVolumeLink";
import StyledImage from "../../components/StyledImage";
import StyledUnorderedList from "../../components/StyledUnorderedList";
import StyledListElement from "../../components/StyledListElement";
import StyledArticle from "../../components/StyledArticle";
import StyledIntroduction from "../../components/StyledIntroduction";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <StyledArticle>
      <StyledSection>
        <StyledHeadline>The Lord of the Rings</StyledHeadline>
        <StyledIntroduction>{introduction}</StyledIntroduction>
      </StyledSection>
      <StyledSection>
        <StyledHeadline>All Volumes</StyledHeadline>
        <StyledUnorderedList>
          {volumes.map(({ slug, title, cover }) => {
            return (
              <StyledListElement key={title}>
                <StyledImage
                  src={cover}
                  alt={`Volume ${title}`}
                  width={140}
                  height={230}
                />
                <StyledVolumeLink href={`/volumes/${slug}`}>
                  {title}
                </StyledVolumeLink>
              </StyledListElement>
            );
          })}
        </StyledUnorderedList>
      </StyledSection>
    </StyledArticle>
  );
}
