import React from "react";
import CheckEligibility from "../CheckEligibility";
import { BASE_URL } from "@/util/constant";
import axios from "axios";

// export async function getServerSideProps(context) {
//   try {
//     const { dynamicImage, dynamicmedia } = await getCheckEligibilityData();
//     return {
//       props: { dynamicImage, dynamicmedia },
//     };
//   } catch (error) {
//     console.error("Error in getServerSideProps:", error);
//     return {
//       props: { dynamicImage: [], dynamicmedia: [], error: error.message },
//     };
//   }
// }

// async function getCheckEligibilityData() {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}api/banner-image-and-videos?populate=*`
//     );
//     const data = response?.data?.data;
//     console.log(data, "dataaaaaaaa");

//     const dynamicmedia = data
//       .filter((item) => item?.attributes?.bannerMedia?.data)
//       .map((item) => item.attributes.bannerMedia.data.attributes.url);

//     const dynamicImage = data
//       .filter((item) => item?.attributes?.bannerImage?.data)
//       .map((item) => item.attributes.bannerImage.data.attributes.url);

//     console.log("helllllllllllllll");

//     return { dynamicImage, dynamicmedia };
//   } catch (error) {
//     console.error("Error in getCheckEligibilityData:", error);
//     throw error; // Throwing the error so it can be caught in getServerSideProps
//   }
// }

export default function CheckEligibilityApiWrapper({
  dynamicmedia,
  dynamicImage,
  error,
}) {
  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <CheckEligibility dynamicmedia={dynamicmedia} dynamicImage={dynamicImage} />
  );
}
