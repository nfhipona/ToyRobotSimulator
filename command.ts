import * as fs from 'fs';
import * as rd from 'readline'
import { Robot } from "./toy_robot";
import { Table } from "./table";

const reader = rd.createInterface(fs.createReadStream("commands.txt"))
const table: Table = new Table();

reader.on("line", (l: string) => {
    if (l.length == 0) return;

    let components = l.split(' ');
    let command = components[0];
    
    if (command == 'PLACE') {
        console.log(`\ncomamnd: `, command);

        if (components.length == 2) {
            let parameters = components[1].split(',');
            console.log(`parameters: `, parameters);

            if (parameters.length == 3) {
                let x = Number(parameters[0]), y = Number(parameters[1]), f = parameters[2];
                // console.log(`Will add robot with position (${x}, ${y}) facing: ${f}`);

                let robot = new Robot();
                robot.place(x, y, f);
                table.addRobot(robot);
            } // else invalid command
        } // else invalid command
    }else{
        console.log(`comamnd: `, command);
        
        let robot = table.lastActiveRobot();
        if (robot) {

            switch (command) {
                case 'MOVE': {
                    robot.move();
                    break;
                }

                case 'REPORT': {
                    robot.report();
                    break;
                }

                case 'LEFT': {
                    robot.left();
                    break;
                }

                case 'RIGHT': {
                    robot.right();
                    break;
                }

                default: break;
            }
        }else{
            console.log('Robot not found.')
        }
    }    
});

reader.on("close", ()=> {
    console.log('\nListing all robots:');

    table.listRobots();

    console.log(`\nDone... Total robots: ${table.robots.length}`);
});
