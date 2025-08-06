"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

// Pages
import LandingPage from "@/pages/LandingPage"
import Dashboard from "@/pages/Dashboard"
import Projects from "@/pages/Projects"

// Auth Pages (keeping existing structure)
import LoginPage from "@/app/auth/login/page"
import SignupPage from "@/app/auth/signup/page"
import ForgotPasswordPage from "@/app/auth/forgot-password/page"

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="cuconnect-theme"
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
