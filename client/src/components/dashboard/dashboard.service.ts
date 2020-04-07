import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import React from "react";

class _DashboardService {
  private menuItems: Record<string, MenuItem> = {
    about: {
      text: "About",
      route: "/about",
      icon: HomeIcon,
    },
    trainee: {
      text: "Trainees",
      route: "/trainee-list",
      icon: PersonIcon,
    },
    batches: {
      text: "Batches",
      route: "/batch-list",
      icon: GroupIcon,
    },
    leaveRequest: {
      text: "Leave Request",
      route: "/leave-request",
      icon: NoteAddIcon,
    },
    event: {
      text: "Events",
      route: "/event",
      icon: EventIcon,
    },
  };
  adminMenu: MenuItem[] = [
    this.menuItems.about,
    this.menuItems.trainee,
    this.menuItems.batches,
    this.menuItems.leaveRequest,
    this.menuItems.event,
  ];
  appointmentHolderMenu: MenuItem[] = [
    this.menuItems.about,
    this.menuItems.trainee,
    this.menuItems.batches,
    this.menuItems.event,
  ];
  currentMenu: MenuItem[] = [];
}
export interface MenuItem {
  text: string;
  route: string;
  icon: any;
}

export const DashboardService = new _DashboardService();
