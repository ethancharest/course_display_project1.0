# CSC417 Project 2 - Course Display
### Ethan Charest

## About
This React app displays a list of CS advising courses in a filtered table.
You can type a letter grade (A, B, C, or D) to filter courses by that grade,
or type 'all' to see every course. Leaving the textbox empty hides all rows.
Courses with discrepancies (grade without being taken, or taken without a grade)
are highlighted in red.

## How to Run

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open your browser and navigate to the localhost link shown in the terminal

## Filter Options
- Empty → no courses shown
- 'all' → all courses shown
- 'A', 'B', 'C', 'D' → only courses with that grade shown (case sensitive)