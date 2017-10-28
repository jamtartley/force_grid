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

        this.cellsWide = Math.ceil(width / this.spacing) + 1;
        this.cellsHigh = Math.ceil(height / this.spacing) + 1;
        let fixedMasses = [];

        for (let i = 0; i < this.cellsHigh; i++) {
            for (let j = 0; j < this.cellsWide; j++) {
                this.masses.push(new Mass(new Vector2D(j * this.spacing, i * this.spacing), 1));
                fixedMasses.push(new Mass(new Vector2D(j * this.spacing, i * this.spacing), 0));
            }
        }

        for (let i = 0; i < this.cellsHigh; i++) {
            for (let j = 0; j < this.cellsWide; j++) {
                if (i === 0 || j === 0 || i === this.cellsHigh - 1 || j === this.cellsWide - 1) {
                    let firstMass = fixedMasses[Utils.getIndexFromVector(j, i, this.cellsWide)];
                    let secondMass = this.getMassAt(j, i);

                    this.springs.push(new Spring(firstMass, secondMass, 0.1, 0.1));
                }

                if (j > 0) {
                    let firstMass = this.getMassAt(j - 1, i);
                    let secondMass = this.getMassAt(j, i);

                    this.springs.push(new Spring(firstMass, secondMass, 0.28, 0.1));
                }

                if (i > 0) {
                    let firstMass = this.getMassAt(j, i - 1);
                    let secondMass = this.getMassAt(j, i);

                    this.springs.push(new Spring(firstMass, secondMass, 0.28, 0.1));
                }
            }
        }
    }

    applyForceAt(x, y) {
        const force = new Vector2D(10, 10);
        const radius = 100;
        let vec = new Vector2D(x, y);

        for (let mass of this.masses) {
            let dist2 = Vector2D.getDistanceSquared(vec, mass.position);
            if (dist2 < radius * radius) {
                mass.applyForce(force);
                mass.multiplyDamping(0.6);
            }
        }
    }

    drawLineBetween(context, x1, y1, x2, y2, colour, thickness) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = colour;
        context.lineWidth = thickness;
        context.stroke();
    }

    getMassAt(x, y) {
        return this.masses[Utils.getIndexFromVector(x, y, this.cellsWide)];
    }

    update() {
        for (let spring of this.springs) {
            spring.update();
        }
        for (let mass of this.masses) {
            mass.update();
        }
    }

    draw(context) {
        for (let spring of this.springs) {
            spring.draw(context, this.spacing / 2);
        }
        //for (let mass of this.masses) {
            //mass.draw(context);
        //}
    }
}

export default ForceGrid;
