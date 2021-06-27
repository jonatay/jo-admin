import React from "react";
import {
  AssignmentTurnedInTwoTone,
  ChatBubbleTwoTone,
  NotificationsNoneTwoTone,
  SettingsApplicationsTwoTone,
  AccountCircleTwoTone,
} from "@material-ui/icons";

import "./topbar.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">joadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <AssignmentTurnedInTwoTone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <ChatBubbleTwoTone />
            <span className="topIconBadge">6</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNoneTwoTone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AccountCircleTwoTone />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplicationsTwoTone />
          </div>
        </div>
      </div>
    </div>
  );
}
