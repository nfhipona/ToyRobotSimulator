
export class Robot {
    x: number;
    y: number;
    f: string; // NORTH, SOUTH, EAST or WEST.
    isSet: boolean;
    isOnTable: boolean;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.f = "";
        this.isSet = false;
        this.isOnTable = false;
    }

    place(x: number, y: number, f: string) {
        let facing = this.convertF(f);

        if (x < 0 || x > 4) return false;
        if (y < 0 || y > 4) return false;
        if (['n', 'e', 'w', 's'].indexOf(facing) < 0) return false;

        this.x = x;
        this.y = y;
        this.f = facing;

        this.isSet = true;        
        
        return true;
    }

    move() {
        if (!this.isSet) return;

        switch (this.f) {
            case 'n': { // North
                if (this.y >= 4) return;
                this.y += 1; 
                break;
            }
            case 'e': { // East
                if (this.x >= 4) return;
                this.x += 1; 
                break;
            }
            case 'w': { // West
                if (this.x <= 0) return;
                this.x -= 1;
                break;
            }
            case 's': { // South
                if (this.y <= 0) return;
                this.y -= 1;
                break;
            }

            default: break;
        }
    }

    left() {
        if (!this.isSet) return;
        
        switch (this.f) {
            case 'n': {
                this.f = 'w';
                break;
            }
            case 'e': {
                this.f = 'n';
                break;
            }
            case 'w': {
                this.f = 's';
                break;
            }
            case 's': {
                this.f = 'e';
                break;
            }

            default: break;
        }
    }

    right() {
        if (!this.isSet) return;
        
        switch (this.f) {
            case 'n': {
                this.f = 'e';
                break;
            }
            case 'e': {
                this.f = 's';
                break;
            }
            case 'w': {
                this.f = 'n';
                break;
            }
            case 's': {
                this.f = 'w';
                break;
            }

            default: break;
        }
    }

    report() {
        if (!this.isSet) return;

        console.log(`Output: ${this.x},${this.y},${this.facing()}`);
    }

    facing() {
        if (!this.isSet) return "";

        switch (this.f) {
            case 'n': {
                return 'NORTH';
            }
            case 'e': {
                return 'EAST';
            }
            case 'w': {
                return 'WEST';
            }
            case 's': {
                return 'SOUTH';
            }

            default: return "";
        }
    }

    convertF(f: String) {

        switch (f) {
            case 'NORTH': {
                return 'n';
            }
            case 'EAST': {
                return 'e';
            }
            case 'WEST': {
                return 'w';
            }
            case 'SOUTH': {
                return 's';
            }

            default: return "Not Found";
        }
    }
}