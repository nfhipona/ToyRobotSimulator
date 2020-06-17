const expect = require('chai').expect;
const Table = require('../out/table').Table;
const Robot = require('../out/toy_robot').Robot;

describe('TEST ROBOT', ()=> {

    const table = new Table();

    it('TEST INPUT AND OUTPUT COMMANDS', done => {
        
        let robot = new Robot();
        robot.place(1, 0, 'NORTH');
        table.addRobot(robot);
        
        robot.move();
        robot.move();
        robot.right();
        robot.move();
        
        expect(robot.x).to.be.equal(2);
        expect(robot.y).to.be.equal(2);
        expect(robot.f).to.be.equal('e');
        
        done();
        robot.report(); // log info
    });

    it('ADD SECOND ROBOT WITH COMMANDS', done => {
        
        let robot = new Robot();
        robot.place(2, 2, 'NORTH');
        table.addRobot(robot);
        
        robot.move();
        robot.move();
        robot.left();
        robot.left();
        robot.move();
        
        expect(robot.x).to.be.equal(2);
        expect(robot.y).to.be.equal(3);
        expect(robot.f).to.be.equal('s');
        
        done();
        robot.report(); // log info
    });

    it('CHECK TABLE AND LIST ALL ROBOTS', done => {

        expect(table.robots).to.have.lengthOf.above(0);
        
        done();
        table.listRobots(); // log info
    });
});