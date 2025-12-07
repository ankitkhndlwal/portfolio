# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It features smooth animations, interactive elements, and a clean, minimalist design to showcase projects and skills.

## 🚀 Features

-   **Responsive Design:** Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
-   **Smooth Animations:** Powered by `motion` (Framer Motion) for page transitions and scroll reveals.
-   **Interactive Navigation:** Sticky navigation with a Lottie animation logo that reacts to hover.
-   **Case Study Showcase:** Grid layout for displaying project case studies with hover effects.
-   **Testimonials Marquee:** Infinite scrolling marquee for client testimonials.
-   **Modern UI Components:** Utilizes Radix UI primitives for accessible and robust components.

## 🛠️ Tech Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Motion](https://motion.dev/) (Framer Motion) & [Lottie React](https://github.com/Gamote/lottie-react)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **UI Components:** [Radix UI](https://www.radix-ui.com/)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## 💻 Usage

### Development Server
To start the development server with hot module replacement:

```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the next available port).

### Production Build
To build the application for production:

```bash
npm run build
```
This will generate optimized static assets in the `dist` directory.

## 📂 Project Structure

```
src/
├── assets/         # Static assets (images, JSON animations)
├── components/     # React components (Hero, Projects, About, etc.)
├── imports/        # Shared imports and helpers
├── styles/         # Global styles and Tailwind configuration
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## 🎨 Customization

-   **Content:** Update the content in individual components (e.g., `src/components/Projects.tsx`, `src/components/About.tsx`).
-   **Images:** Add your images to `src/assets/images` or `public/` and update references.
-   **Styles:** Modify `src/index.css` or Tailwind classes for styling changes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# portfolio
