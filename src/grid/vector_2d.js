class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y
    }

    multiply(other) {
        this.x *= other.x;
        this.y *= other.y;
    }

    static getDistance(a, b) {
        return Math.sqrt(Vector2D.getDistanceSquared(a, b));
    }

    static getDistanceSquared(a, b) {
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        return dx * dx + dy * dy;
    }
}

export default Vector2D;
