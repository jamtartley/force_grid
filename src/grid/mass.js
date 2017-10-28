import Vector2D from './vector_2d';

class Mass {
    constructor(position, inverseMass) {
        this.position = position;
        this.inverseMass = inverseMass;
        this.velocity = new Vector2D(0, 0);
        this.acceleration = new Vector2D(0, 0);
        this.initialDamping = 0.98;
        this.damping = this.initialDamping;
    }

    applyForce(force) {
        let delta = force.clone();
        delta.multiplyScalar(this.inverseMass);
        this.acceleration.add(delta);
    }

    multiplyDamping(amount) {
        this.damping *= amount;
    }

    update() {
        //console.log(this.position);
        //this.velocity.add(this.acceleration);
        //this.position.add(this.velocity);
        //this.acceleration.multiply(0);

        //if (this.velocity.getMagnitudeSquared() <= 0.001) {
            //this.velocity.multiply(0);
        //}

        //this.velocity.multiply(this.damping);
        //this.damping = this.initialDamping;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = "white";
        context.fillRect(this.position.x, this.position.y, 1, 1);
    }
}

export default Mass;
