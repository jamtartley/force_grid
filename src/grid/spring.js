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
}

export default Spring;
