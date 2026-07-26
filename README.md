# 🚀 MyHub - Personal Knowledge Workspace

MyHub is a modern, responsive, full-stack web application designed to act as your ultimate digital brain. It organizes every type of digital resource—from files and photos to hackathon schedules and daily tech news—into one clean, premium SaaS-style dashboard.

## ✨ Key Features

* **Unified Dashboard:** A centralized space with quick access to all your most important data, statistics, and recent files.
* **Universal Storage:** Dedicated modules to manage **Links**, **Videos**, **Photos**, **Files**, and **Notes**.
* **Live Integrations:** 
  * **Daily News:** Automated fetching of the latest technology and science news.
  * **Upcoming Hackathons:** Track, bookmark, and set reminders for upcoming events.
  * **Meet Links:** Store and organize your Google Meet or Zoom links with ease.
* **Premium UI/UX:** Designed with heavy inspiration from top-tier SaaS products (Notion, Linear, Arc). Features include glassmorphism, soft shadows, smooth Framer Motion animations, and large rounded cards.
* **Global Search:** Fast, fuzzy search using Fuse.js to find anything across your entire hub instantly (accessible via `⌘K`).
* **Fully Responsive:** Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

**Frontend:**
* [Next.js 15](https://nextjs.org/) (App Router)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)
* State Management: [Zustand](https://zustand-demo.pmnd.rs/)
* Icons: [Lucide React](https://lucide.dev/)

**Backend & Database:**
* Server: Next.js API Routes
* ORM: [Prisma](https://www.prisma.io/)
* Database: PostgreSQL
* Authentication: Ready for Clerk or NextAuth integration

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and a PostgreSQL database installed and running.

### 1. Clone the repository
```bash
git clone [https://github.com/yourusername/myhub.git](https://github.com/yourusername/myhub.git)
cd myhub
