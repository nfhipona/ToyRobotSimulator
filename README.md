# ToyRobotSimulator

## Prepare environment
if you have not yet installed typescript
do `npm install -g typescript`

test install and check version
do `tsc --version`

### To run the project

compile scripts
do `Ctrl+Shift+B` on your VSCode

run the scripts
do `npm start`

run test scripts
do `npm test`

## Command instructions
Input your command in the `commands.txt` file.

The `Robot` will accept commands:
`PLACE` with parameters - to place the robot on the table
`MOVE` - to move 1 unit forward-facing
`LEFT` - will turn the robot facing -90deg
`RIGHT` - will turn the robot facing +90deg
`REPORT` - will report robot's info

the format will be:

```
PLACE 0,0,NORTH
MOVE
LEFT
MOVE
RIGHT
MOVE
REPORT
```

commands will accept a multiple commands with format:
```
PLACE 0,0,NORTH
MOVE
LEFT
MOVE
RIGHT
MOVE
REPORT

PLACE 1,3,SOUTH
MOVE
LEFT
MOVE
MOVE
REPORT
```