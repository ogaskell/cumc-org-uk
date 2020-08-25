import Home from "./views/home/index.js";
import Blog from "./views/blog/index.js";

import ClubAbout from "./views/about/club.js";
import CommitteeAbout from "./views/about/committee.js";
import SafetyAbout from "./views/about/safety.js";
import CompetitionsAbout from "./views/about/competitions";
import GearAbout from "./views/about/gear";

import UpcomingMeets from "./views/meets/upcoming.js"
import IndoorMeets from "./views/meets/indoor.js"
import OutdoorMeets from "./views/meets/outdoor.js"
import SocialMeets from "./views/meets/social.js"

// Warning: Order matters here. It's an array!
const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    component: Home,
    layout: "",
  },
  {
    path: "/blog",
    name: "Blog",
    icon: "pe-7s-news-paper",
    component: Blog,
    layout: "",
  },
  {
    category: true,
    name: "About",
  },
  {
    path: "/about/club",
    name: "The Club",
    icon: "pe-7s-info",
    component: ClubAbout,
    layout: "",
  },
  {
    path: "/about/committee",
    name: "Committee",
    icon: "pe-7s-id",
    component: CommitteeAbout,
    layout: "",
  },
  {
    path: "/about/competitions",
    name: "Competitions",
    icon: "pe-7s-medal",
    component: CompetitionsAbout,
    layout: "",
  },
  {
    path: "/about/gear",
    name: "Gear",
    icon: "pe-7s-config",
    component: GearAbout,
    layout: "",
  },
  {
    path: "/about/safety",
    name: "Safety",
    icon: "pe-7s-attention",
    component: SafetyAbout,
    layout: "",
  },
  {
    category: true,
    name: "Meets",
  },
  {
    path: "/meets/upcoming",
    name: "Upcoming",
    icon: "pe-7s-clock",
    component: UpcomingMeets,
    layout: "",
  },
  {
    path: "/meets/indoor",
    name: "Indoor",
    icon: "pe-7s-gym",
    component: IndoorMeets,
    layout: "",
  },
  {
    path: "/meets/outdoor",
    name: "Outdoor",
    icon: "pe-7s-photo",
    component: OutdoorMeets,
    layout: "",
  },
  {
    path: "/meets/social",
    name: "Social",
    icon: "pe-7s-wine",
    component: SocialMeets,
    layout: "",
  },
];

export default routes;