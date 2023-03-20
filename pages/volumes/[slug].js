import { useRouter } from "next/router";
import { Fragment } from "react";
import { volumes } from "../../lib/data";
import Image from "next/image";
import StyledContainer from "../../components/StyledContainer";
import StyledArticle from "../../components/StyledArticle";
import StyledSection from "../../components/StyledSection";
import StyledHeadline from "../../components/StyledHeadline";
import StyledIntroduction from "../../components/StyledIntroduction";
import StyledBooks from "../../components/StyledBooks";
import StyledListElement from "../../components/StyledListElement";
import StyledOrdinal from "../../components/StyledOrdinal";
import StyledTitle from "../../components/StyledTitle";
import Chevron from "../../icons/chevron-left.svg";
import Next from "../../icons/arrow-right.svg";
import Previous from "../../icons/arrow-left.svg";
import StyledAllVolumesLink from "../../components/StyledAllVolumesLink";
import StyledNavBar from "../../components/StyledNavbar";
import StyledLink from "../../components/StyledLink";
import StyledName from "../../components/StyledNextName";

export default function LotrMovies() {
  const router = useRouter();

  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];
  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <StyledArticle>
      <StyledAllVolumesLink href={"/volumes"}>
        <Chevron />
        All Volumes
      </StyledAllVolumesLink>
      <StyledSection>
        <StyledHeadline>{title}</StyledHeadline>
        <StyledIntroduction>{description}</StyledIntroduction>
      </StyledSection>
      <StyledContainer color={color}>
        <StyledBooks>
          {books.map(({ ordinal, title }) => {
            return (
              <Fragment key={title}>
                <StyledListElement>
                  <StyledOrdinal>{ordinal}</StyledOrdinal>
                </StyledListElement>
                <StyledListElement>
                  <StyledTitle>{title}</StyledTitle>
                </StyledListElement>
              </Fragment>
            );
          })}
        </StyledBooks>
        <Image src={cover} alt={`Volume ${title}`} width={140} height={230} />
      </StyledContainer>
      <StyledNavBar>
        {volumeIndex > 0 ? (
          <StyledLink direction="left" href={`/volumes/${previousVolume.slug}`}>
            <Previous />
            <div>
              <StyledName>Previous Volume</StyledName>
              {`${previousVolume.title}`}
            </div>
          </StyledLink>
        ) : null}
        {volumeIndex < 2 ? (
          <StyledLink direction="right" href={`/volumes/${nextVolume.slug}`}>
            <div>
              <StyledName> Next Volume</StyledName>
              {`${nextVolume.title}`}
            </div>
            <Next />
          </StyledLink>
        ) : null}
      </StyledNavBar>
    </StyledArticle>
  );
}
