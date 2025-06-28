import React from 'react';
import ProjectCard from './projectCard';
import './Projects.css';

const projectData = [
  {
    title: "Quiz App",
    description: "An interactive quiz app built in React.",
    link: "https://github.com/Abhishek-3318/quiz-app"
  },
  {
    title: "E-learning Platform",
    description: "Course UI platform for learners.",
    link: "https://github.com/Abhishek-3318/elearning-ui"
  },
  {
    title: "ChatApp",
    description: "Course chat platform for interactor.",
    link: "https://github.com/Abhishek-3318/real-time-chat-app"
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
