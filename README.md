# Interactive Quiz Platform

A modern, responsive quiz application built with React, TypeScript, and Tailwind CSS that allows users to take timed quizzes and track their progress.

## Features

### Quiz Management
- Multiple question types support (multiple-choice and integer-based questions)
- Alphabetical options (A, B, C, D) for multiple-choice questions
- Timer-based questions (30 seconds per question)
- Instant feedback on answers
- Progress tracking across questions

### User Experience
- Clean, modern UI using shadcn/ui components
- Responsive design that works on all device sizes
- Visual feedback with color-coding for correct/incorrect answers
- Timer countdown with visual warnings
- Stable card layout that prevents content jumping

### Progress Tracking
- Real-time score updates
- Comprehensive end-of-quiz results
- Multiple attempts support
- Historical attempt tracking with dates and scores
- Score percentage calculation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/VishalChaudhary01/quiz-platform.git
cd quiz-platform
```

2. Install dependencies
```bash
npm install
```

### Development
Start the development platform:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── custom/
│       └── Quiz.tsx         # Main quiz component
│       └── QuizResult.tsx   # Quiz Result component
│   └── ui/
│       └── button.tsx
│       └── card.tsx
│       └── input.tsx
├── config/
│   └── index.ts
├── data/
│   └── quizData.ts
├── lib/
│   └── utils.ts
├── types/
│   └── type.d.ts           # TypeScript interfaces
├── pages/
│   └── homePage.tsx
│   └── quizPage.tsx
└── App.tsx                 # Root component
```

## Technologies Used

- React 18
- TypeScript 5
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Deployment

The app is deployed and can be accessed at: [Quiz Platform](https://quiz-platform-indol.vercel.app)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/name`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/name`)
5. Create a Pull Request
