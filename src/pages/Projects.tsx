"use client"

import Navbar from "@/components/Navbar/Navbar"
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid"
import { projects } from "@/data/mockData"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-6">
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}
