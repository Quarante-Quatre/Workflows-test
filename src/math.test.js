import { describe, expect, it } from 'vitest';

import { clamp, lerp, mapLinear, randFloat, randFloatSpread } from './math.js';

describe('randFloatSpread', () => {
  it('should return true if the value is <= 1', () => {
    expect(randFloatSpread(1)).toBeLessThanOrEqual(1);
  });
});

describe('randFloatSpread', () => {
  it('should return true if the value is >= -1', () => {
    expect(randFloatSpread(1)).toBeGreaterThanOrEqual(-1);
  });
});

describe('mapLinear', () => {
  it('should return 3 if the value is 1, 2, 3, 4, 5', () => {
    expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
  });
});

describe('mapLinear', () => {
  it('should return 0.882352941176471 if the value is 1, 20 ,3 ,40 ,5', () => {
    expect(mapLinear(1, 20, 3, 40, 5)).toBe(0.882352941176471);
  });
});

describe('lerp', () => {
  it('should return 41 if the value is 1, 3, 20', () => {
    expect(lerp(1, 3, 20)).toBe(41);
  });
});

describe('lerp', () => {
  it('should return -15.3 if the value is 1.3,-7,2', () => {
    expect(lerp(1.3, -7, 2)).toBe(-15.3);
  });
});

describe('clamp', () => {
  it('should return 5 if the value is within the range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
});

describe('clamp', () => {
  it('should return 1 if the value is less than the minimum', () => {
    expect(clamp(-5, 1, 10)).toBe(1);
  });
});

describe('clamp', () => {
  it('should return 10 if the value is greater than the maximum', () => {
    expect(clamp(15, 1, 10)).toBe(10);
  });
});

describe('randFloat', () => {
  it('should return a value between 1 and 10', () => {
    var value = randFloat(1, 10);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(10);
  });
});

describe('randFloat', () => {
  it('should return a value between -5 and 5', () => {
    var value = randFloat(-5, 5);
    expect(value).toBeGreaterThanOrEqual(-5);
    expect(value).toBeLessThanOrEqual(5);
  });
});

describe('ship movement', () => {
  it('should be at position 5 when halfway between 0 and 10', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
});

describe('ship position', () => {
  it('should be clamped to 100 when position exceeds screen limit', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('randFloat', () => {
  it('should return a value between 10 and 50', () => {
    var value = randFloat(10, 50);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThanOrEqual(50);
  });
});
