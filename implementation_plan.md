# Refactor "Work Experience" into Experience, Education & Competitive Programming Sections

The current `ExperienceTimeline` component renders all three entries (B.Tech education, personal projects, and competitive programming) under a single "Work Experience" heading. This plan separates them into three distinct sections, removes the "Full-Stack Project Builder" card entirely, adds a real professional experience entry (Vyavastha), and introduces a reusable `TimelineCard` component to avoid code duplication.

## Proposed Changes

### Data Layer

#### [DELETE] [experience.ts](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/data/experience.ts)
Replace with three separate data files below.

#### [NEW] [experience.ts](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/data/experience.ts)
- New `ITimelineItem` interface shared by all sections (replaces `IExperience`):
  ```ts
  interface ITimelineItem {
    id: string;
    title: string;        // Role or degree or activity name
    subtitle: string;     // Company, institution, or platform
    duration: string;
    description: string;
    highlights: string[]; // Achievements / responsibilities / details
    tags: string[];       // Tech stack / skill tags
  }
  ```
- Single Vyavastha experience entry with all specified responsibilities and tech badges.

#### [NEW] [education.ts](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/data/education.ts)
- Uses the same `ITimelineItem` interface.
- Contains the Rungta College B.Tech entry with CGPA, focus areas, and skill tags.

#### [NEW] [competitive-programming.ts](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/data/competitive-programming.ts)
- Uses the same `ITimelineItem` interface.
- Contains the LeetCode/Coding Platforms entry with problem count, rating, and CS tags.

---

### Shared Component

#### [NEW] [TimelineCard.tsx](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/components/effects/TimelineCard.tsx)
- Extracts the card rendering logic currently inlined in `ExperienceTimeline` into a reusable component.
- Accepts a single `ITimelineItem`, an `index` (for stagger delay), and `isInView` (for animation trigger).
- Renders the same GlowCard layout: duration badge, subtitle, title, description, arrow-prefixed highlights, and tech/skill badges.
- Identical styles, spacing, hover effects, and transitions as the current implementation.

---

### Section Components

#### [MODIFY] [ExperienceTimeline.tsx](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/app/_components/ExperienceTimeline.tsx)
- Rename internal heading from "Work Experience" to "Experience" (subtitle label: "Career").
- Import `EXPERIENCES` from the new data file and `TimelineCard` from the shared component.
- Map over `EXPERIENCES` using `<TimelineCard />` instead of the inline card markup.
- Keep `section id="experience"`.

#### [NEW] [EducationSection.tsx](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/app/_components/EducationSection.tsx)
- Same section pattern as `ExperienceTimeline` but with:
  - Subtitle label: "Academics"
  - Heading: "Education"
  - `section id="education"`
- Uses `<TimelineCard />` with cyan accent glow (`glowColor`) to visually differentiate from Experience.

#### [NEW] [CompetitiveProgrammingSection.tsx](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/app/_components/CompetitiveProgrammingSection.tsx)
- Same section pattern with:
  - Subtitle label: "Problem Solving"
  - Heading: "Competitive Programming"
  - `section id="competitive-programming"`
- Uses `<TimelineCard />` with a green-ish accent glow for differentiation.

---

### Page Assembly

#### [MODIFY] [PageClient.tsx](file:///d:/my%20code/dubeydiv/clone-1/my-portfolio/src/app/_components/PageClient.tsx)
- Import and render the three new sections in order:
  ```
  <HeroSection />
  <BentoGrid />
  <ExperienceTimeline />      ← real professional experience
  <EducationSection />         ← B.Tech card
  <CompetitiveProgrammingSection /> ← CP card
  <FeaturedProjects />
  <ContactCta />
  ```

---

## Design Notes

- All three sections use the **exact same** card styling, animation variants, and layout via the shared `TimelineCard`.
- Each section gets a unique accent glow color on hover to create visual variety while staying within the design system:
  - **Experience**: violet (default, `rgba(139, 92, 246, 0.15)`)
  - **Education**: cyan (`rgba(6, 182, 212, 0.15)`) — using the existing `--color-cyan-accent`
  - **Competitive Programming**: emerald (`rgba(34, 197, 94, 0.15)`)
- The subtitle label colors above the heading will match the section's accent color.
- Section IDs enable smooth-scroll navigation.
- No information is duplicated across sections.

## Verification Plan

### Manual Verification
- Run `npm run dev` and visually confirm:
  - Experience section shows only the Vyavastha card
  - Education section shows only the B.Tech card
  - Competitive Programming section shows only the LeetCode card
  - "Full-Stack Project Builder" card is completely removed
  - All hover glows, animations, transitions work identically
  - Responsive layout works on mobile/tablet breakpoints
  - Page section ordering is correct
