interface IExperience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
    achievements: string[];
    techStack: string[];
}

const EXPERIENCES: IExperience[] = [
    {
        id: 'exp-1',
        role: 'B.Tech Student, Computer Science & Engineering',
        company: 'Rungta College of Engineering and Technology, Bhilai',
        duration: 'Sep 2022 – Jul 2026',
        description: 'Focused on backend systems, problem solving, and full-stack web development while pursuing CSE.',
        achievements: [
            'Maintaining a CGPA of 8.1 in Computer Science and Engineering',
            'Built multiple production-style projects using Node.js, React, and Next.js',
            'Continuously learning scalability, cloud concepts, and backend architecture',
        ],
        techStack: ['C++', 'Java', 'Python', 'DBMS'],
    },
    {
        id: 'exp-2',
        role: 'Full-Stack Project Builder',
        company: 'Personal Projects and Open Source',
        duration: '2024 – Present',
        description: 'Building end-to-end web products with REST APIs, authentication, database design, and polished UIs.',
        achievements: [
            'Developed CourseGen using Gemini API to automate course outline generation',
            'Built CartForge with complete CRUD workflows for product management',
            'Created and deployed portfolio projects with modern React and Next.js tooling',
        ],
        techStack: ['Node.js', 'Express.js', 'Next.js', 'MongoDB'],
    },
    {
        id: 'exp-3',
        role: 'Competitive Programming and Core CS Practice',
        company: 'LeetCode and Coding Platforms',
        duration: 'Ongoing',
        description: 'Consistent DSA practice with focus on data structures, algorithms, and computer science fundamentals.',
        achievements: [
            'Solved 600+ coding problems across platforms',
            'Reached LeetCode rating 1727 (top 11.28% globally)',
            'Strengthened CS fundamentals across OOP, OS, DBMS, and Computer Networks',
        ],
        techStack: ['DSA', 'OOP', 'OS', 'Computer Networks'],
    },
];

export type { IExperience };
export { EXPERIENCES };
