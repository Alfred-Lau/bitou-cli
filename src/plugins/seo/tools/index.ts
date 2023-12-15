import checkExternalLink from "./checkExternalLinks";
import checkHn from "./checkHn";
import checkImgs from "./checkImgs";
import checkInnerLinks from "./checkInnerLinks";
import checkMeta from "./checkMeta";
import checkTdk from "./checkTdk";

export const tasks = [
  checkMeta,
  checkTdk,
  checkHn,
  checkInnerLinks,
  checkExternalLink,
  checkImgs,
]