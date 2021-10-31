import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    { title: 'Expense Tracker', link: '/expense-tracker' },
    { title: 'Menu Filter', link: '/menu-filter' },
    { title: 'Password Module', link: '/password-module' },
    { title: 'Signup Form', link: '/signup-form' },
    { title: 'Login Form', link: '/login-form' },
  ];
  return (
    <div className="min-h-screen grid items-center">
      <div className="p-6 grid grid-cols-2 md:gap-y-10 md:gap-x-6 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
        {projects.map(({ title, link }) => (
          <ProjectCard key={title} title={title} link={link} />
        ))}
      </div>
    </div>
  );
}
