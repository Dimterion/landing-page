import feature1 from "../assets/features/feature_1.png";
import feature2 from "../assets/features/feature_2.png";
import featuresBtn1 from "../assets/features/features_btn_1.svg";
import featuresBtn2 from "../assets/features/features_btn_2.svg";
import detail1 from "../assets/features/detail_1.png";
import detail2 from "../assets/features/detail_2.png";
import detail3 from "../assets/features/detail_3.png";
import detail4 from "../assets/features/detail_4.png";
import pricingIcon1 from "../assets/pricing/pricing_icon_1.svg";
import pricingIcon2 from "../assets/pricing/pricing_icon_2.svg";
import pricingIcon3 from "../assets/pricing/pricing_icon_3.svg";
import plan1 from "../assets/pricing/plan_1.png";
import plan2 from "../assets/pricing/plan_2.png";
import plan3 from "../assets/pricing/plan_3.png";

export const features = [
  {
    id: "0",
    icon: feature1,
    caption: "LOREM IPSUM",
    title: "FEATURE 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui.",
    button: {
      icon: featuresBtn1,
      title: "Lorem ipsum",
    },
  },
  {
    id: "1",
    icon: feature2,
    caption: "LOREM IPSUM",
    title: "FEATURE 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui.",
    button: {
      icon: featuresBtn2,
      title: "Lorem ipsum",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: detail1,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "1",
    icon: detail2,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "2",
    icon: detail3,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "3",
    icon: detail4,
    title: "Lorem ipsum dolor sit amet.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Lorem",
    priceMonthly: 5,
    priceYearly: 4,
    caption: "Lorem ipsum dolor sit amet",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    icon: pricingIcon1,
    logo: plan1,
  },
  {
    id: "1",
    title: "Lorem",
    priceMonthly: 10,
    priceYearly: 9,
    caption: "Lorem ipsum dolor sit amet",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    icon: pricingIcon2,
    logo: plan2,
  },
  {
    id: "2",
    title: "Lorem",
    priceMonthly: 19,
    priceYearly: 15,
    caption: "Lorem ipsum dolor sit amet",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    icon: pricingIcon3,
    logo: plan3,
  },
];
