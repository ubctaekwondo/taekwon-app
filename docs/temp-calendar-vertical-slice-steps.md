# Temp Plan: Calendar Vertical Slice

## Scope for this slice only
Build one end-to-end slice:
1. Firestore class data model
2. `api/classes` read utilities
3. `app/(tabs)/calendar.tsx` real UI + real data
4. `app/(tabs)/today.tsx` uses same "next class" data source

Out of scope for this slice:
- Admin CRUD screens
- News and Sponsor modules
- Final visual polish for all screens

---

## Step 0 - Pre-work and guardrails
- Confirm current app runs (`npx expo start -c`) and auth is stable.
- Keep changes isolated to:
  - `api/`
  - `types/`
  - `app/(tabs)/calendar.tsx`
  - `app/(tabs)/today.tsx`
- Avoid changing navigation architecture in this slice.

---

## Step 1 - Define class schema (Firestore + TS)
- Create/confirm a shared type in `types/`:
  - `id`
  - `title`
  - `classType` (demo / sparring / poomsae / other)
  - `location`
  - `startAt` (timestamp)
  - `endAt` (timestamp)
  - `visibility` (member/admin)
  - `createdAt`, `updatedAt`
- Decide date storage:
  - Firestore `Timestamp` in DB
  - convert to JS `Date` in UI boundary layer
- Add brief schema notes in code comments (or this file if preferred).

Deliverable:
- Type-safe class model ready for service and UI usage.

---

## Step 2 - Build class service layer (`api/classes`)
- Add read-focused functions first:
  - `getClassesForMonth(year, month)`
  - `getUpcomingClasses(limit?)`
  - `getNextClass()`
- Query behavior:
  - Sort by `startAt` ascending
  - Filter month range for calendar
  - Filter future-only for upcoming/next
- Add mapping helper:
  - Firestore doc -> typed class object
- Add safe fallbacks for empty results and query errors.

Deliverable:
- Reusable class data utilities consumed by multiple screens.

---

## Step 3 - Implement Calendar screen with real data
- Replace placeholder in `app/(tabs)/calendar.tsx`.
- Add state:
  - selected month/year
  - loading/error
  - class list
- Add controls:
  - previous/next month buttons
  - month header label
- Render cards list:
  - Day + date (large visual)
  - class title
  - location
  - time range
- Empty state:
  - "No classes this month"
- Keep structure close to mockup, prioritize data fidelity over pixel-perfect polish.

Deliverable:
- Calendar tab is fully data-driven and usable.

---

## Step 4 - Hook Today screen to shared class source
- Update `app/(tabs)/today.tsx`:
  - Remove hardcoded next class values
  - Use `getNextClass()` from `api/classes`
- Add loading and empty state in “What’s Up?” area.
- Keep existing sponsor/linktree card structure.

Deliverable:
- Today + Calendar now share one canonical data source.

---

## Step 5 - Seed/test data strategy
- Add quick seed approach for local testing:
  - either manual Firestore entries
  - or temporary script/helper (if needed)
- Minimum test dataset:
  - 2 past classes
  - 4 current month classes
  - 2 next month classes
  - mixed class types/locations

Deliverable:
- Repeatable way to validate month nav and next-class logic.

---

## Step 6 - Validation checklist
- Functional:
  - Calendar month nav works
  - Classes load correctly by month
  - Today shows nearest upcoming class
  - Empty states render correctly
- Technical:
  - `npm run lint` has no new errors
  - no runtime red screens
  - no duplicate data logic between Today/Calendar

Deliverable:
- Slice is stable and ready to build admin schedule CRUD on top.

---

## Step 7 - Definition of done (for this slice)
- `Calendar` is no longer placeholder.
- `Today` no longer hardcodes class content.
- Class reads are centralized in `api/classes`.
- Data shape is explicit and type-safe.
- Ready for next slice: `manageSchedule` CRUD using same model.

---

## Immediate next action
Start Step 1 + Step 2 together:
- define the class type
- scaffold `api/classes` functions

Then wire Calendar in Step 3.
