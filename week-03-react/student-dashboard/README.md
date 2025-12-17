# Student Dashboard

A modern, responsive Student Management System built with React, Vite, and Tailwind CSS. This application allows you to create, read, update, and delete student records with a clean and intuitive interface.

## 🚀 Features

- ✨ **Create Students**: Add new student records with name, email, and age
- 📝 **Edit Students**: Update existing student information inline
- 🗑️ **Delete Students**: Remove student records with a single click
- 📱 **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- ⚡ **Fast Development**: Powered by Vite for lightning-fast HMR (Hot Module Replacement)
- 🎨 **Modern UI**: Clean, card-based interface with smooth interactions

## 🛠️ Tech Stack

- **React 19.1.1** - UI Library
- **Vite 7.1.7** - Build Tool & Dev Server
- **Tailwind CSS 4.1.14** - Utility-first CSS Framework
- **ESLint** - Code Linting
- **React Compiler** - Optimized React performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-make-up-class.git
   cd student-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
student-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Header.jsx          # Application header
│   │   ├── Home.jsx             # Main container component
│   │   ├── StudentCard.jsx      # Individual student card with edit/delete
│   │   └── StudentForm.jsx      # Form for adding new students
│   ├── lib/
│   │   └── api.js               # API functions for CRUD operations
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔌 API Integration

The application expects a backend API with the following endpoints:

- `GET /api/students` - Fetch all students
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

Update the API base URL in `src/lib/api.js` to point to your backend server.

## 🎨 Customization

### Tailwind CSS

This project uses Tailwind CSS v4. To customize the styling:
1. Modify the `index.css` file for global styles
2. Use Tailwind utility classes directly in your components
3. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs) for more options

### React Compiler

The React Compiler is enabled for optimized performance. See the [React Compiler Documentation](https://react.dev/learn/react-compiler) for more information.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is part of my PLP MERN Stack Development course.

## 📚 Related Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [PLP MERN Stack Development](https://github.com/PLP-MERN-Stack-Development)

## 👥 Course Information

**Week 3 Make-up Class** - PLP MERN Stack Development, July Cohort

For questions or support, reach out to me or our course instructor.

---

Built with ❤️ by we PLP Students