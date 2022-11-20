import React, { useState } from "react";
import { useMatchMedia } from "../../../hooks/useMatchMedia";
import { IBook } from "../../../types/IBooksData";
import SelectUI from "../../../UI/SelectUI/SelectUI";
import SkeletonUI from "../../../UI/SkeletonUI/SkeletonUI";
import AB_Header from "./AB_Header/AB_Header";
import AB_MainInfo from "./AB_MainInfo/AB_MainInfo";
import { useAboutBookStyle } from "./style";
import { useAboutBook } from "./useAboutBook";

const AboutBook = ({ book }: IBook) => {
  const { isMobile }: any = useMatchMedia();
  const {
    AboutBookSC,
    AboutBookTopSC,
    AboutBookImgSC,
    ABDescriptionSC,
    AboutBookMainInfoSC,
    AB_OpenGoogleBook,
  } = useAboutBookStyle();
  const {
    authors,
    categories,
    description,
    publisher,
    title,
    previewLink,
    publishedDate,
    printedPageCount,
    photoSmall,
    listPrice,
  } = useAboutBook({ book });

  return (
    <AboutBookSC>
      <AboutBookTopSC>
        {isMobile && <AB_Header title={title} categories={categories} />}
        <AboutBookImgSC href={previewLink} target="_blank">
          {photoSmall ? (
            <img src={photoSmall} alt="IconError" />
          ) : (
            <SkeletonUI />
          )}
        </AboutBookImgSC>

        <AboutBookMainInfoSC>
          {!isMobile && <AB_Header title={title} categories={categories} />}
          {isMobile ? (
            <SelectUI title="о книге">
              <AB_MainInfo
                authors={authors}
                publisher={publisher}
                listPrice={listPrice}
                publishedDate={publishedDate}
                printedPageCount={printedPageCount}
              />
            </SelectUI>
          ) : (
            <AB_MainInfo
              authors={authors}
              publisher={publisher}
              listPrice={listPrice}
              publishedDate={publishedDate}
              printedPageCount={printedPageCount}
            />
          )}
          <AB_OpenGoogleBook href={previewLink} target="_blank">
            open google book
          </AB_OpenGoogleBook>
          {isMobile && (
            <SelectUI title="описание">
              <ABDescriptionSC>
                {description ? description : <SkeletonUI />}
              </ABDescriptionSC>
            </SelectUI>
          )}
        </AboutBookMainInfoSC>
      </AboutBookTopSC>

      {!isMobile && (
        <ABDescriptionSC>
          {description ? description : <SkeletonUI />}
        </ABDescriptionSC>
      )}
    </AboutBookSC>
  );
};

export default React.memo(AboutBook);