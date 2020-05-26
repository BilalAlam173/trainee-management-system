"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = [
    {
        id: 0,
        title: "Basketball tournament",
        venue: "PNS Jauhar sports ground",
        startTime: new Date(),
        endTime: new Date(),
        date: new Date(),
        description: "Inter division basketball tournament, The Tournament is best of 4 matches, the award ceremony will be conducted on 27th morning",
        participants: ["0011", "0013", "0007"],
    },
    {
        id: 1,
        title: "Cricket tournament",
        venue: "PNS Jauhar sports ground",
        startTime: new Date(),
        date: new Date(),
        endTime: new Date(),
        description: "Inter division Cricket tournament, The Tournament is best of 4 matches, the award ceremony will be conducted on 27th morning",
        participants: ["0010", "0013", "0008", "0001"],
    },
];
exports.participate = (eventId, pno) => {
    const idx = exports.events.findIndex((x) => x.id == eventId);
    exports.events[idx].participants.push(pno);
};
//# sourceMappingURL=event.service.js.map