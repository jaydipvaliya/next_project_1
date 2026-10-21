# Campus Directory — Next.js App Router (Project 1)

A modern, high-performance academic directory web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. This project enables students, faculty, and administrators to browse enrolled students, explore academic departments, and inspect specialization curriculum tracks with real-time filtering and dynamic routing.

---

## 1. Route Analysis & Strategy

The application structure directly maps the provided design specifications and utilizes the full spectrum of Next.js App Router file conventions:

| Route | Type | Description | Media Reference |
| :--- | :--- | :--- | :--- |
| `/` | Redirect | Canonical redirect to `/students` | Entry point |
| `/students` | Static / RSC | Main directory with real-time student search, department filter, and pagination | **Image 2** |
| `/students/[id]` | Dynamic Route | Detailed student profile, academic standing, enrolled subjects & credits table, record metadata | **Image 1** |
| `/departments` | Static / RSC | Faculties list with specialization counts and enrollment totals | **Image 3** |
| `/departments/[department]` | Dynamic Route | Department overview, available specialization tracks, and department-enrolled students | Intermediate drill-down |
| `/departments/[department]/[specialization]` | Nested Dynamic Route | Deep-dive specialization track (e.g. `/departments/computer-science/web-development`) with lead, lab, and track students | **Image 4** |
| `/about` | Static / RSC | Architecture and technical implementation overview | Informational |
| `not-found.tsx` | Error Convention | Custom 404 UI with suggested internal routing links | **Image 5** |
| `error.tsx` | Error Convention | Global client-side error boundary with retry capability | Error resilience |
| `loading.tsx` | Suspense / UX | Skeleton UI during route transitions and data fetching | Loading state |

---

## 2. Folder Structure

```text
src/
├── app/
│   ├── layout.tsx                               # Root layout with shared Navbar and Geist typography
│   ├── globals.css                              # Design tokens, clean academic theme, Tailwind CSS
│   ├── page.tsx                                 # Canonical redirect to /students
│   ├── not-found.tsx                            # Custom 404 page (Image 5)
│   ├── error.tsx                                # Global error boundary with reset()
│   ├── [...not-found]/
│   │   └── page.tsx                             # Catch-all route to trigger notFound()
│   ├── students/
│   │   ├── page.tsx                             # Students directory page (Image 2)
│   │   ├── loading.tsx                          # Skeleton loader for student grid
│   │   └── [id]/
│   │       ├── page.tsx                         # Student profile dynamic route (Image 1)
│   │       └── loading.tsx                      # Skeleton loader for student profile
│   ├── departments/
│   │   ├── page.tsx                             # Departments directory page (Image 3)
│   │   └── [department]/
│   │       ├── page.tsx                         # Department overview route
│   │       └── [specialization]/
│   │           └── page.tsx                     # Specialization track route (Image 4)
│   └── about/
│       └── page.tsx                             # About & architecture page
├── components/
│   ├── common/
│   │   ├── Breadcrumbs.tsx                      # Reusable hierarchical breadcrumbs
│   │   └── NotFoundView.tsx                     # 404 UI component matching Image 5
│   ├── layout/
│   │   └── Navbar.tsx                           # Global header with active tab indicator & logo
│   ├── students/
│   │   ├── StudentCard.tsx                      # Student card matching Image 2
│   │   ├── StudentDirectory.tsx                 # Search & department filter controller
│   │   └── SpecializationStudentCard.tsx        # 2-column track student card (Image 4)
│   └── departments/
│       └── DepartmentCard.tsx                   # Department card with icon & metadata (Image 3)
├── data/
│   ├── students.ts                              # Authentic student dataset matching media
│   └── departments.ts                           # Departments & specialization tracks dataset
├── libs/
│   └── data.ts                                  # Type-safe data querying & alias resolution
└── types/
    ├── student.ts                               # Student & Subject interfaces
    └── department.ts                            # Department & Specialization interfaces
```

---

## 3. UI Component Breakdown

- **`Navbar`**: Fixed/sticky top navigation displaying the Campus Directory brand, active blue indicator bar underneath the current section, and the "Frontend Practice" pill.
- **`Breadcrumbs`**: Contextual path indicator across student and department pages (e.g. `Departments / Computer Science / Web Development`).
- **`StudentCard`**: Card for the students list displaying avatar initials, student ID, department pill, academic year, and direct profile link.
- **`SpecializationStudentCard`**: Variant card displaying avatar, student name, ID, year badge, and track focus (e.g. *Full-Stack Architecture*).
- **`DepartmentCard`**: Full-width stacked card with department icon, overview, specialization count, and enrollment metadata.
- **`StudentDirectory`**: Interactive client controller providing instantaneous client-side fuzzy search and department filter dropdown without layout shifts.
- **`NotFoundView`**: Centered 404 illustration with suggested routes matching Image 5.

---

## 4. Types & Data Preparation

Data is strictly separated from presentation logic:

- **`Student` Interface**: Defines `id`, `slug`, `name`, `initials`, `email`, `department`, `specialization`, `trackCode`, `trackFocus`, `status`, `year`, `studyYear`, `standing`, `enrolled`, `systemRecordId`, `lastValidated`, `about`, and `subjects`.
- **`Department` & `Specialization` Interfaces**: Models academic hierarchy with `slug`, `code`, `icon`, `academicLead`, `primaryCoreLab`, `totalEnrollment`, and affiliated `studentIds`.
- **Query Utilities (`libs/data.ts`)**: Case-insensitive lookup supporting IDs (`STU-1042`, `1042`), name slugs (`aarav-mehta`), and aliases (`cs` -> `computer-science`).

---

## 5. Rendering & Route Implementation Decisions

1. **Server-First by Default**: The root page, student profile page, departments list, and specialization track page are React Server Components (RSC). They render on the server with zero client bundle overhead for data loading.
2. **`generateStaticParams`**: Applied to dynamic routes (`/students/[id]` and `/departments/[department]/[specialization]`) to pre-render static HTML at build time for optimal performance.
3. **Promise-based `params`**: Adheres to Next.js 15+ standards where route parameters are asynchronous promises (`await params`).
4. **Client-Side Interactivity where Appropriate**: Search and dropdown filtering utilize `'use client'` inside `StudentDirectory.tsx` for instantaneous responsive feedback.

---

## 6. Loading, Error, and Not-Found Handling

- **Missing Records**: If an unknown student ID or department slug is accessed (e.g. `/students/unknown`), `notFound()` is immediately called, rendering the custom `not-found.tsx` matching Image 5.
- **Catch-All 404**: The `[...not-found]` route catches invalid sub-paths and directs them to the custom 404 screen.
- **Loading UI**: `loading.tsx` files provide smooth, matching skeleton placeholders for the students grid and profile view.
- **Error Boundary**: `error.tsx` provides an isolated client error handler with recovery (`reset()`).

---

## 7. Getting Started

### Prerequisites
Node.js 18.18+ or 20+

### Installation & Development
```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run start
```
