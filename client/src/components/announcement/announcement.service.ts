import { USER_ROLES } from "../../globals";
class _announcementService {
  unread = 3;

  dtf = new Intl.DateTimeFormat("en", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  formatDate(date: Date) {
    return this.dtf.format(date);
  }
}

export interface Notification {
  _id: string;
  message: string;
  header: string;
  creator: any;
  createdAt: Date;
}

export const AnnouncementService = new _announcementService();
