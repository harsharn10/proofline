import assert from "node:assert/strict";
import test from "node:test";
import { pointsInWindow } from "./chart-window.ts";

test("pointsInWindow sorts points and limits them from the newest snapshot", () => {
  const points = [
    { at: "2026-08-01T00:00:00Z", value: 1 },
    { at: "2026-09-02T00:00:00Z", value: 3 },
    { at: "2026-08-30T00:00:00Z", value: 2 },
  ];
  assert.deepEqual(pointsInWindow(points, "7d"), [points[2], points[1]]);
});

test("pointsInWindow omits invalid snapshots", () => {
  assert.deepEqual(
    pointsInWindow(
      [
        { at: "not-a-date", value: 1 },
        { at: "2026-09-02T00:00:00Z", value: Number.NaN },
      ],
      "30d",
    ),
    [],
  );
});
