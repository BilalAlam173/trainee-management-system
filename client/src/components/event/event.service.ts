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

export const getEvents = () => {
  return events.map((x) => {
    return {
      ...x,
      participants: x.participants.map((a: any) =>
        getTrainee(typeof a === "string" ? a : a.pno)
      ),
    };
  });
};

export const updateEvent = (evt: Event) => {
  evt.participants.map((x) => x.pno);
  evt.isNew = false;
  const idx = events.findIndex((x) => x.id == evt.id);
  events[idx] = evt;
};
export const deleteEvent = (evt: Event) => {
  const idx = events.findIndex((x) => x.id == evt.id);
  events.splice(idx, 1);
};

export const addEvent = (evt: Event) => {
  evt.id = events[events.length - 1].id + 1;
  events.push(evt);
};

export const participate = (eventId: number, pno: string) => {
  const idx = events.findIndex((x) => x.id == eventId);
  events[idx].participants.push(pno);
};

export interface Event {
  id: number;
  title: string;
  venue: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  description: string;
  creator?: any;
  participants: any[];
  isNew?: boolean;
}
