import { test, expect, describe, beforeAll, beforeEach } from "vitest";

function add(a: number, b: number) {
    return a + b;
}


test('add', async () => {
    expect(add(1, 2)).toBe(3)
})

