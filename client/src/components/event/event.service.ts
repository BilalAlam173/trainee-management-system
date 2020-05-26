import { Trainee, getTrainee } from "../../services/data.service";

export const events = [
  {
    id: 0,
    title: "Basketball tournament",
    venue: "PNS Jauhar sports ground",
    startTime: new Date(),
    endTime: new Date(),
    date: new Date(),
    description:
      "Inter division basketball tournament, The Tournament is best of 4 matches, the award ceremony will be conducted on 27th morning",
    participants: ["0011", "0013", "0007"],
  },
  {
    id: 1,
    title: "Cricket tournament",
    venue: "PNS Jauhar sports ground",
    startTime: new Date(),
    date: new Date(),
    endTime: new Date(),
    description:
      "Inter division Cricket tournament, The Tournament is best of 4 matches, the award ceremony will be conducted on 27th morning",
    participants: ["0010", "0013", "0008", "0001"],
  },
];

export const participate = (eventId: number, pno: string) => {
  const idx = events.findIndex((x) => x.id == eventId);
  events[idx].participants.push(pno);
};

export interface Event {
  _id?: any;
  title: string;
  venue: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  description: string;
  creator?: any;
  participants: any[];
  new?: boolean;
}
