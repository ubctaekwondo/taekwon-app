# Taekwon App Plan + Gap Analysis

## Goal
Build the app shown in the provided mockups as a polished, role-aware member/admin experience with:
- Authentication (sign-in/sign-up)
- Member home (`Today`, `Calendar`, `News`)
- Sponsor and membership experiences
- Admin management screens for schedule, sponsors, announcements, and members

This document defines:
1. What we want to exist (target state)
2. What currently exists (current state)
3. The gap and implementation plan

## Target Product (What We Want)

### 1) Authentication
- **Sign-in screen** with logo, email/password inputs, CTA, and sign-up link.
- **Sign-up screen** with first/last name, email/password, validation, CTA, and sign-in link.
- Clean error messaging and loading states.
- Auth state persistence between sessions.

### 2) Member Experience

#### Today
- Header with date + member name.
- Role/status pills (membership state, role tags).
- "What's Up?" section with next class card.
- Sponsor shortcut card and Linktree shortcut.
- Visual parity with mockups (spacing, hierarchy, card styling).

#### Calendar
- Month navigation and class list by date.
- Repeated class cards in timeline/list style.
- Current-day and category visual emphasis.

#### News
- Scrollable announcements feed.
- Cards with title/body/deadline metadata.
- Different visual styles for priority/standard announcements.

### 3) Sponsor + Membership
- **Membership screen** with member card visual and key member metadata.
- **Sponsor screen** with sponsor cards (image, name, perks/description, link behavior).

### 4) Admin Experience

#### Admin Panel
- Landing page with clear navigation to all management modules.
- Visual style consistent with mockups.

#### Management Modules
- Manage Schedule
- Manage Sponsors
- Manage Announcements
- Manage Membership

For each:
- List view of entities (cards/rows)
- Create/edit/delete actions
- Back navigation and consistent admin shell layout

### 5) Data + Behavior
- Firebase Auth for identity
- Firestore-backed data for:
  - members
  - classes/schedule
  - announcements
  - sponsors
- Role-aware routing/visibility (member vs exec/admin)

## Current State (What Exists Today)

### Implemented / Partially Implemented
- **Expo Router structure** is set up with route groups:
  - `app/(auth)`
  - `app/(tabs)`
  - `app/(admin)`
- **Auth screens exist** and are functional in structure:
  - `app/(auth)/index.tsx`
  - `app/(auth)/signup.tsx`
- **Firebase config exists** with app + firestore + lazy auth initialization:
  - `config/firebaseConfig.js`
- **Root auth gating exists**:
  - `app/_layout.tsx` uses `onAuthStateChanged(...)` to switch auth vs app routes.
- **Today tab has custom UI** and is closest to target:
  - `app/(tabs)/today.tsx`

### Present but Minimal / Placeholder
- `app/(tabs)/calendar.tsx` (placeholder text)
- `app/(tabs)/news.tsx` (placeholder text)
- `app/(admin)/adminPanel.tsx` (simple links only)
- `app/(admin)/manageSchedule.tsx` (placeholder text)
- `app/(admin)/manageSponsor.tsx` (placeholder text)
- `app/(admin)/manageAnnouncements.tsx` (placeholder text)
- `app/(admin)/manageMembership.tsx` (placeholder text)

### Technical Notes
- SDK stack has been upgraded to Expo 54.
- Firebase has been upgraded to `firebase@^12.12.1`.
- Lint currently passes with warnings (no blocking errors).

## Gap Analysis (Target vs Current)

## 1) Authentication
- **Status:** ~70%
- **Done:** basic sign-in/sign-up forms, firebase auth calls, navigation.
- **Missing:**
  - refined validation UX (field-level and consistent copy)
  - polished visual parity with mockups
  - explicit persistence verification and user feedback states

## 2) Member Tabs
- **Today**
  - **Status:** ~60%
  - **Done:** core card layout and shortcuts exist.
  - **Missing:** dynamic Firestore-driven content, final spacing/typography parity, real role/status chips.
- **Calendar**
  - **Status:** ~10%
  - **Done:** route exists.
  - **Missing:** almost all UI and data integration.
- **News**
  - **Status:** ~10%
  - **Done:** route exists.
  - **Missing:** feed UI, styling, Firestore binding, prioritization.

## 3) Sponsor + Membership
- **Status:** ~5-10%
- **Done:** route shells exist.
- **Missing:** full cards, image assets, metadata display, links/actions.

## 4) Admin
- **Status:** ~10-15%
- **Done:** route shells + nav entry points exist.
- **Missing:** management UIs, CRUD flows, form validation, item-level actions, final styling.

## 5) Data Model + Integration
- **Status:** ~35%
- **Done:** Firebase app/auth/firestore bootstrapped; member create flow started in sign-up.
- **Missing:** normalized collections + read/write hooks powering schedule/news/sponsors/admin modules.

## Proposed Build Plan

## Phase 1 - Stabilize foundation (short)
1. Confirm/auth harden:
   - Keep lazy auth initializer pattern (`getFirebaseAuth()`).
   - Add user-facing fallback error boundary for auth bootstrap failures.
2. Remove global log suppression (`LogBox.ignoreAllLogs(true)`) or narrow it.
3. Add simple service layer per domain (`members`, `classes`, `announcements`, `sponsors`).

## Phase 2 - Member core experience
1. Finish `Today` with real data:
   - Current user profile + tags
   - next class card from schedule collection
2. Build `Calendar` screen per mockup:
   - month controls
   - list of class cards
3. Build `News` screen per mockup:
   - announcement card list + deadline badges

## Phase 3 - Sponsor + Membership screens
1. Membership card screen:
   - identity + membership status + term
2. Sponsor screen:
   - sponsor cards with image, text, and outbound links

## Phase 4 - Admin functionality
1. Admin panel visual parity + navigation shell.
2. Build CRUD modules:
   - schedule
   - sponsors
   - announcements
   - members
3. Add role checks so non-admin users cannot access admin routes.

## Phase 5 - Polish + QA
1. Responsive pass on target devices.
2. End-to-end auth + CRUD test script.
3. Lint warning cleanup and selective type hardening.

## Definition of Done
- Every screen in mockups exists with equivalent hierarchy and interactions.
- Member app screens are data-driven from Firestore.
- Admin screens support full CRUD for the four domains.
- Auth state persists across restart and routes gate correctly by auth/role.
- No blocking runtime errors; lint/type checks clean enough for maintainability.

## Recommended Next Slice
If we implement one slice now, highest ROI is:
1. `Calendar` implementation
2. `News` implementation
3. Data hooks for classes + announcements

That unlocks most of the visible user value quickly while keeping design momentum.
