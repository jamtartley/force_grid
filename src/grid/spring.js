import Vector2D from './vector_2d';

class Spring {
    constructor(firstMass, secondMass, stiffness, damping) {
        const targetLengthFactor = 0.95;

        this.firstMass = firstMass;
        this.secondMass = secondMass;
        this.stiffness = stiffness;
        this.damping = damping;
        this.targetLength = Vector2D.getDistance(firstMass.position, secondMass.position) * targetLengthFactor;
    }

    update() {
        let deltaPos = Vector2D.getSubtractionVector(this.firstMass.position, this.secondMass.position);
        let length = deltaPos.getMagnitude();

        if (length <= this.targetLength) {
            // Springs pull, not push
            return;
        }

        deltaPos.divideScalar(length);
        deltaPos.multiplyScalar(length - this.targetLength);

        let deltaVel = Vector2D.getSubtractionVector(this.secondMass.velocity, this.firstMass.velocity);
        deltaPos.multiplyScalar(this.stiffness);
        deltaVel.multiplyScalar(this.damping);

        let force = Vector2D.getSubtractionVector(deltaPos, deltaVel);
        this.firstMass.applyForce(-force);
        this.secondMass.applyForce(force);
    }
}

export default Spring;
