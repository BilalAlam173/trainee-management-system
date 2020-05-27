export interface Event {
  _id?: any;
  title: string;
  venue: string;
  date: Date;
  startTime: string;
  endTime: string;
  description: string;
  creator?: any;
  participants: any[];
  new?: boolean;
}
