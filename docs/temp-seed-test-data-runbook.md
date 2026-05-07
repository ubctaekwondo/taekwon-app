# Temp Runbook: Class Seed/Test Data

This runbook covers the temporary seed strategy for the Calendar vertical slice.

## What was added
- `api/classesSeed.ts`
  - `buildClassSeedData(referenceDate?)` returns a deterministic dataset:
    - 2 previous-month classes
    - 4 current-month classes
    - 2 next-month classes
- `api/classes.ts`
  - `createClassEvent(...)`
  - `seedClassTestData(seedTag?)`
  - `clearClassSeedData(seedTag?)`
- `app/(admin)/adminPanel.tsx`
  - Temporary buttons:
    - `Seed test classes`
    - `Clear seeded classes`

## How to use
1. Sign in with an account that can access admin routes.
2. Go to `Admin Panel`.
3. Tap `Seed test classes`.
4. Open `Calendar` tab and verify data appears.
5. Open `Today` tab and verify next upcoming class appears.
6. When done, tap `Clear seeded classes`.

## Expected data behavior
- Current month should show multiple classes.
- Previous and next month navigation should each show at least some classes.
- Today card should pick the nearest upcoming `startAt`.

## Notes
- Seeded docs include `seedTag = "calendar-seed-v1"` so cleanup removes only seeded entries.
- If Firestore rules block writes, update rules or use an admin account for seeding.
- This is a temporary strategy and can be replaced by admin CRUD once schedule management is built.
