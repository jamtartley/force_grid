import Vector2D from './vector_2d';

export function getIndexFromVector(vector, width) {
    return vector.x + vector.y * width;
}

export function getVectorFromIndex(index, width) {
    return new Vector2D(index % width, index / width);
}
