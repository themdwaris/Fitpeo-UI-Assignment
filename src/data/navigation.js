import { BiSolidTimer } from "react-icons/bi";
import { FaCalendarAlt, FaChartBar, FaHeadset } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";

import { IoChatbubbleEllipsesSharp, IoSettingsSharp } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";

export const navigationLinks = [
  { name: "Dashboard", icon: RiDashboardHorizontalFill },
  { name: "History", icon: GiSandsOfTime },
  { name: "Calendar", icon: FaCalendarAlt },
  { name: "Appointments", icon: BiSolidTimer },
  { name: "Statistics", icon: FaChartBar },
];

export const support = [
  { name: "Chat", icon: IoChatbubbleEllipsesSharp },
  { name: "Support", icon: FaHeadset },
];
export const setting = [{ name: "Setting", icon: IoSettingsSharp }];
