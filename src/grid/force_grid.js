import * as Utils from './utils';
import Vector2D from './vector_2d';
import Mass from './mass';
import Spring from './spring';

class ForceGrid {
    constructor(width, height, desiredCells) {
        this.springs = [];
        this.smallestSide = Math.min(width, height);
        this.spacing = Math.min(width / desiredCells, height / desiredCells);
        this.masses = [];

        let cellsWide = width / this.spacing;
        let cellsHigh = height / this.spacing;
        let tempSprings = [];
        let fixedMasses = [];

        for (let i = 0; i < cellsHigh; i++) {
            for (let j = 0; j < cellsWide; j++) {
                this.masses.push(new Mass(new Vector2D(j * this.spacing, i * this.spacing), 1));
            }
        }
    }

    update() {
       for (let mass of this.masses) {
            mass.update();
       }
    }

    draw(context) {
        for (let mass of this.masses) {
            mass.draw(context);
        }
    }
}

export default ForceGrid;
