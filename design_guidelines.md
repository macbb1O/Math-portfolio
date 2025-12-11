# Linear Legends Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from Duolingo (streak mechanics), Prodigy Math (progression system), and Geometry Dash (polish/animations) to create an addictive, arcade-style educational game.

## Visual Aesthetic

**Color Palette:**
- Soft neon colors: pinks, blues, purples
- Glowing UI elements with subtle luminance
- Gold glow for completed elements
- Dark dramatic theme for boss fights

**Visual Effects:**
- Floating particles in background
- Dynamic ambient background with slow gradient pulse
- Sparkle animations on correct answers
- Shake animations on wrong answers
- Confetti for victory screens
- Smooth fade transitions between all screens

## Typography & Spacing

**Font System:**
- Use Google Fonts: Select a rounded, friendly display font for headings (e.g., Poppins, Quicksand)
- Clean sans-serif for body text and questions
- Bold weights for CTAs and important numbers

**Spacing Units:**
- Tailwind units: 2, 4, 6, 8, 12, 16 for consistent rhythm
- Generous padding around game containers (p-8 to p-12)
- Comfortable spacing between question elements (gap-6)

## Core UI Components

**Buttons:**
- Rounded, pill-shaped (rounded-full or rounded-2xl)
- Bounce animation on hover
- Glow effect on primary actions
- Four animated MCQ buttons per question
- "Check Answer" button with prominent styling
- Hint button with energy cost indicator

**Cards & Containers:**
- Soft rounded corners (rounded-3xl)
- Subtle shadows with glow effects
- Glass-morphism for overlays
- Animated level nodes on world map

**Progress Elements:**
- XP bar with animated fill
- Streak counter with flame icon 🔥
- Heart/energy display (5 max)
- Badge unlock animations with sparkle effects

**Input Fields:**
- Clean, minimal equation input bar
- Rounded corners matching overall aesthetic
- Focus states with subtle glow

## Screen Layouts

**Title Screen:**
- Centered composition
- Large game title "Linear Legends" with glow effect
- Animated math symbols or characters
- Prominent "Start Adventure" and "Continue" buttons
- Streak + XP level display at top
- Daily bonus popup overlay

**World Map:**
- Central vertical or winding path layout
- 13 level nodes: 1.01→1.10, 4 SWYK boss fights, Review, Final Test
- Connected by animated paths
- Larger, animated nodes for boss levels
- Completed levels: gold glow
- Locked levels: greyed out with lock icon
- Current level: pulsing animation

**Lesson Gameplay:**
- Question container centered (max-w-2xl)
- Top bar: XP progress, level number, streak flame, hearts
- MCQ: 4 buttons in 2x2 or vertical stack
- Equation input: centered input with "Check Answer" below
- Hint button in corner with energy cost badge

**Level Complete:**
- Full-screen overlay
- Confetti canvas animation
- XP reward counter with animation
- Badge unlock showcase if earned
- "Continue" button to return to map

**Boss Fight Screen:**
- Dramatic darker theme overlay
- Timer display (countdown)
- Harder question presentation
- No hints available indicator
- Tension-building visual treatment

**Final Boss Test:**
- Epic full-screen experience
- 20-question progression indicator
- Timer prominently displayed
- Grand "YOU PASSED THE UNIT!" celebration with maximum confetti and effects

## Animations & Micro-interactions

**Essential Animations:**
- Button press: scale bounce (scale-95 on click)
- Correct answer: sparkle burst from center
- Wrong answer: horizontal shake (translate-x)
- Streak milestone: special effect at 3, 5, 10 streak
- Level node: pop-in animation when unlocked
- Screen transitions: smooth fade (200-300ms)
- XP bar: animated fill on reward
- Floating particles: slow drift in background

**Animation Timing:**
- Keep interactions snappy (<300ms)
- Victory screens: allow 1-2s for celebration
- Transitions between screens: 400-500ms

## Game Element Styling

**Streak System:**
- Flame icon with number
- Glow intensifies with higher streaks
- Special animation borders at milestones
- "Revive" button when streak breaks (costs 5 energy)

**Energy Hearts:**
- Row of 5 heart icons
- Filled vs outline states
- Subtle pulse when at max capacity
- Regeneration timer display

**Badges:**
- Circular or shield-shaped
- Locked: greyscale silhouette
- Unlocked: full color with shine animation
- 10 total badges with unique icons

**World Map Paths:**
- Glowing line connections between nodes
- Animate completion (gold sweep effect)
- Dashed lines for locked progression

## Images
No photographic images needed. All visuals are UI-generated:
- Abstract geometric math symbols for title screen decoration
- Icon-based badge illustrations
- Pure CSS/canvas particle effects

This is a UI-driven game experience with no traditional hero images or photography.