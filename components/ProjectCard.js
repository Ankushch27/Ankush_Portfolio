import Link from 'next/link';
const ProjectCard = ({ title, link }) => {
  return (
    <Link href={link}>
      <a>
        <div
          className="p-8 rounded-md border-l-8 border-indigo-600 overflow-hidden shadow-md cursor-pointer transition-shadow">
          {title}
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
