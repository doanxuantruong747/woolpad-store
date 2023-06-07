import Image from "next/image";
import { useTranslation } from "react-i18next";

// card icon
import imageLeft from "@/assets/friendifyPage/friendifyHelp/imageLeftFeatures.png";
import imageIconRight from "@/assets/friendifyPage/friendifyHelp/icon-text-right.png";
import CustomSection from "../common/Section";
import Collapse from "../common/Collapse";

const HowItWorks = () => {
  const { i18n, t } = useTranslation();

  const litsRight = [
    {
      title: t("friendifyHowItWorks.AFQ1"),
      content: t("friendifyHowItWorks.sub_AFQ1"),
    },
    {
      title: t("friendifyHowItWorks.AFQ2"),
      content: t("friendifyHowItWorks.sub_AFQ2"),
    },
    {
      title: t("friendifyHowItWorks.AFQ3"),
      content: t("friendifyHowItWorks.sub_AFQ3"),
    },
    {
      title: t("friendifyHowItWorks.AFQ4"),
      content: t("friendifyHowItWorks.sub_AFQ4"),
    },
  ];

  const title = t("friendifyHowItWorks.title");
  const subTitle = t("friendifyHowItWorks.sub_title");

  return (
    <div className="bg-[]" style={{ background: "rgba(81, 81, 81, 0.3)" }}>
      <CustomSection title={title} subTitle={subTitle}
        classSubTitle="text-center text-[16px] xl:text-[20px] text-[#CFCFCF]"
      >
        <div className="flex md:flex-row flex-col  pt-10 w-full items-center">
          <div className=" h-full md:w-[25%] w-[60%] mx-auto text-center self-start">
            <Image
              alt="content img"
              src={imageLeft}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="md:w-[60%] w-full h-full mt-[8%]">
            {litsRight.map((item, index) => (
              <Collapse
                content={item.content}
                title={item.title}
                key={`collapse-${index}`}
              />
            ))}
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default HowItWorks;
