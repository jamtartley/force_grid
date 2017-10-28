import Vector2D from './grid/vector_2d';
import Mass from './grid/mass';
import Spring from './grid/spring';

let m1 = new Mass(new Vector2D(10, 5), 0);
let m2 = new Mass(new Vector2D(1, 1), 0);
let s = new Spring(m1, m2, 0, 0);

s.update();
