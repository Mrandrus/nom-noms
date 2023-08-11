import React from "react"

import rmnp_img from "./images/Rocky-Mountain-National-Park-Colorado.png"
import bamboo_outside_img from "./images/bamboo_outside.jpg"
import bamboo_plate_img from "./images/bamboo_plate.jpg"
import cafe_de_bangkok_img from "./images/cafe_de_bangkok.jpg"
import coNomNomsLogo_img from "./images/coNomNomsLogo.png"
import curry_kabob_outside_img from "./images/curry_kabob_outside.jpg"
import curry_kabob_plate_img from "./images/curry_kabob_plate.jpg"
import dae_gee_grill_img from "./images/dae_gee_grill.jpg"
import dae_gee_outside_img from "./images/dae_gee_outside.jpg"
import defaultCoPic_img from "./images/defaultCoPic.jpg"
import jims_wings_outside_img from "./images/jims_wings_outside.jpg"
import krazy_karls_outside_img from "./images/krazy_karls_outside.jpg"
import logo_img from "./images/logo.svg"
import mt_everest_outside_img from "./images/mt_everest_outside.jpg"
import mt_everest_plate_one_img from "./images/mt_everest_plate_one.jpg"
import mt_everest_plate_two_img from "./images/mt_everest_plate_two.jpg"
import regional_outside_img from "./images/regional_outside.jpg"
// import rmnp_img from "../../../public/images/Rocky-Mountain-National-Park-Colorado.png"
// import bamboo_outside_img from "../../../public/images/bamboo_outside.jpg"
// import bamboo_plate_img from "../../../public/images/bamboo_plate.jpg"
// import cafe_de_bangkok_img from "../../../public/images/cafe_de_bangkok.jpg"
// import coNomNomsLogo_img from "../../../public/images/coNomNomsLogo.png"
// import curry_kabob_outside_img from "../../../public/images/curry_kabob_outside.jpg"
// import curry_kabob_plate_img from "../../../public/images/curry_kabob_plate.jpg"
// import dae_gee_grill_img from "../../../public/images/dae_gee_grill.jpg"
// import dae_gee_outside_img from "../../../public/images/dae_gee_outside.jpg"
// import defaultCoPic_img from "../../../public/images/defaultCoPic.jpg"
// import jims_wings_outside_img from "../../../public/images/jims_wings_outside.jpg"
// import krazy_karls_outside_img from "../../../public/images/krazy_karls_outside.jpg"
// import logo_img from "../../../public/images/logo.svg"
// import mt_everest_outside_img from "../../../public/images/mt_everest_outside.jpg"
// import mt_everest_plate_one_img from "../../../public/images/mt_everest_plate_one.jpg"
// import mt_everest_plate_two_img from "../../../public/images/mt_everest_plate_two.jpg"
// import regional_outside_img from "../../../public/images/regional_outside.jpg"

const Image = src => {
  switch (src) {
    case "rmnp_img":
      return <img src={rmnp_img} />
    case "bamboo_outside_img":
      return <img src={bamboo_outside_img} />
    case "bamboo_plate_img":
      return <img src={bamboo_plate_img} />
    case "cafe_de_bangkok_img":
      return <img src={cafe_de_bangkok_img} />
    case "coNomNomsLogo_img":
      return <img src={coNomNomsLogo_img} />
    case "curry_kabob_outside_img":
      return <img src={curry_kabob_outside_img} />
    case "curry_kabob_plate_img":
      return <img src={curry_kabob_plate_img} />
    case "dae_gee_grill_img":
      return <img src={dae_gee_grill_img} />
    case "dae_gee_outside_img":
      return <img src={dae_gee_outside_img} />
    case "defaultCoPic_img":
      return <img src={defaultCoPic_img} />
    case "jims_wings_outside_img":
      return <img src={jims_wings_outside_img} />
    case "krazy_karls_outside_img":
      return <img src={krazy_karls_outside_img} />
    case "logo_img":
      return <img src={logo_img} />
    case "mt_everest_outside_img":
      return <img src={mt_everest_outside_img} />
    case "mt_everest_plate_one_img":
      return <img src={mt_everest_plate_one_img} />
    case "mt_everest_plate_two_img":
      return <img src={mt_everest_plate_two_img} />
    case "regional_outside_img":
      return <img src={regional_outside_img} />
    default:
      return "no image found"
  }
}

export default Image

export const ImageArray = () => [
  rmnp_img,
  bamboo_outside_img,
  bamboo_plate_img,
  cafe_de_bangkok_img,
  coNomNomsLogo_img,
  curry_kabob_outside_img,
  curry_kabob_plate_img,
  dae_gee_grill_img,
  dae_gee_outside_img,
  defaultCoPic_img,
  jims_wings_outside_img,
  krazy_karls_outside_img,
  logo_img,
  mt_everest_outside_img,
  mt_everest_plate_one_img,
  mt_everest_plate_two_img,
  regional_outside_img,
]
