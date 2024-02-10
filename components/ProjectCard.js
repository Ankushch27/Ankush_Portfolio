import Link from 'next/link';

const ProjectCard = ({ title, link }) => {
  return (
    <Link href={link} className="p-8 rounded-md border-l-8 border-indigo-600 overflow-hidden shadow-md cursor-pointer transition-shadow">
      {title}
    </Link>
  );
};

export default ProjectCard;
