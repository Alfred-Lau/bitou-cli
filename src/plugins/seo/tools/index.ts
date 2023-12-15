import * as checkHn from "./checkHn";
import * as checkImgs from "./checkImgs";
import * as checkInnerLinks from "./checkInnerLinks";
import * as checkMeta from "./checkMeta";
import * as checkTdk from "./checkTdk";

export const tasks = [
  checkMeta,
  checkTdk,
  checkHn,
  checkInnerLinks,
  checkImgs,
]