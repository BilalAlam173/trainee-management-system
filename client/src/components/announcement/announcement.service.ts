import { USER_ROLES } from "../../globals";
class _announcementService {
  data: Notification[] = [
    {
      id: "1",
      message: "All units must report to the ground at 9:00 PM",
      header: "muster",
      creator: USER_ROLES.ADMIN,
      dateTime: new Date(),
    },
    {
      id: "2",
      message: "All units must report to the ground at 9:00 PM",
      header: "muster",
      creator: USER_ROLES.ADMIN,
      dateTime: new Date(),
    },
    {
      id: "3",
      message: "Sick bay will remain close from  9:00 PM to 3:00 AM",
      header: "Closure",
      creator: USER_ROLES.MEDICAL_ADMIN,
      dateTime: new Date(),
    },
    {
      id: "6",
      message: "All units must report to the ground at 9:00 PM",
      header: "muster",
      creator: USER_ROLES.MEDICAL_ADMIN,
      dateTime: new Date(),
    }
  ];
  unread = this.data.length;

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
  id: string;
  message: string;
  header: string;
  creator: USER_ROLES;
  dateTime: Date;
}

export const AnnouncementService = new _announcementService();
