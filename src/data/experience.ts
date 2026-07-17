interface ITimelineItem {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    highlights: string[];
    tags: string[];
}

const EXPERIENCES: ITimelineItem[] = [
    {
        id: 'exp-vyavastha',
        title: 'Core Software Developer',
        subtitle: 'Vyavastha',
        duration: 'April 2026 – Present',
        description:
            'Building an event management marketplace connecting customers with verified vendors while developing the complete product from scratch.',
        highlights: [
            'Designed and developed the complete platform architecture',
            'Built scalable backend APIs using Node.js, Express.js, PostgreSQL and Prisma',
            'Developed responsive frontend using Next.js, React and Tailwind CSS',
            'Implemented authentication, booking flow, payments and vendor onboarding',
            'Deployed production infrastructure on Azure VM with Nginx, PM2 and GitHub Actions CI/CD',
            'Integrated Razorpay payments, Cloudinary media storage and role-based access control',
            
        ],
        tags: [
            'Next.js',
            'React',
            'Node.js',
            'Express.js',
            'TypeScript',
            'PostgreSQL',
            'Prisma',
            'Azure',
            'Docker',
            'GitHub Actions',
        ],
    },
];

export type { ITimelineItem };
export { EXPERIENCES };
