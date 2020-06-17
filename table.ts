import { Robot } from "./toy_robot";

export class Table {
    robots: Robot[];

    constructor() {
        this.robots = [];
    }

    addRobot(r: Robot) {
        r.isOnTable = true;
        this.robots.push(r);
    }

    lastActiveRobot() {
        if (this.robots.length == 0) return null;

        return this.robots[this.robots.length - 1];
    }

    listRobots() {

        this.robots.forEach((r, i) => {
            console.log(`Robot ${i} position (${r.x}, ${r.y}) facing: ${r.facing()}`);
        });
    }
}