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
        this.acceleration += force * this.inverseMass;
    }

    multiplyDamping(amount) {
        this.damping *= amount;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.multiply(0);

        if (this.velocity.getLengthSquared() <= 0.001) {
            this.velocity.multiply(0);
        }

        this.velocity.multiply(this.damping);
        this.damping = this.initialDamping;
    }
}

export class Mass;
