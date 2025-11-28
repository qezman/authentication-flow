# FE Dev Assessment

This project is a simple authentication flow built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, following the requirements of the assessment.

## Features

- Login with email & password
- Forgot password with OTP generation
- OTP verification using a custom 6-digit input
- Server Actions for all authentication logic
- Cookie-based session handling
- Protected dashboard route using Next.js middleware
- Clean, modular folder structure and reusable UI components

## Tech Stack

Next.js 16+ (App Router)

React 19

TypeScript

Tailwind CSS

## Project Structure

```
auth-flow/
src/
└── app/
    ├── login/
    │   ├── page.tsx
    │   └── action.ts
    ├── forgot-password/
    │   ├── page.tsx
    │   └── action.ts
    ├── verify-code/
    │   ├── page.tsx
    │   ├── action.ts
    │   ├── resendAction.ts
    │   └── resendWrapper.ts
    ├── dashboard/
    │   └── page.tsx
    ├── components/
    │   ├── auth/
    │   ├── dashboard/
    │   ├── ui/
    │   ├── OTPInput.tsx
    │   └── LogoutModal.tsx
    ├── data/
    │   └── dashboardData.ts
    ├── logout/
    │   └── action.ts
    ├── globals.css
    ├── layout.tsx
|    └── page.tsx
|└── hooks/
|    └── useResend.ts
└── middleware.ts

```

## Getting Started

First, run the development server:

```bash
cd auth-flow
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Forgot Password: /forgot-password

OTP Verify: /verify-code

Dashboard (protected): /dashboard

## Notes

OTP is displayed on-screen to allow testing without email delivery.

Middleware protects the /dashboard route by checking a session cookie.

OTP visibility is intentionally disabled in production for security

## Submission

Full codebase

Clear project structure

Working multi-step authentication flow
