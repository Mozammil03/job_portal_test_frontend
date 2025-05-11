import { useState } from "react";
import { useSelector } from "react-redux";
import { profile } from "../Data/Data";
import { IconBrandGithub, IconBrandLinkedin, IconWorld } from "@tabler/icons-react";

export const Profile = () => {
  const [userData] = useState(profile);
  const { user } = useSelector((state: any) => state.user);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-mine-shaft-950 text-white">
      {/* Header Section */}
      <div className="text-center">
        <img 
          src={userData.profileImg} 
          alt="Profile" 
          className="w-32 h-32 rounded-full mx-auto shadow-lg hover:scale-105 transition-transform duration-300" 
        />
        <h1 className="text-3xl font-bold mt-4 text-bright-sun-400">{userData.name}</h1>
        <p className="text-xl text-mine-shaft-200">{userData.profession}</p>
        <p className="text-mine-shaft-300">{userData.location.city}, {userData.location.state}, {userData.location.country}</p>
      </div>
      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        {Object.entries(userData.socialLinks).map(([platform, url]) => (
          <a 
            key={platform}
            href={url}
            className="text-mine-shaft-300 hover:text-bright-sun-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform === 'github' && <IconBrandGithub size={24} />}
            {platform === 'linkedin' && <IconBrandLinkedin size={24} />}
            {platform === 'portfolio' && <IconWorld size={24} />}
          </a>
        ))}
      </div>

      {/* Bio Section */}
      <div className="bg-mine-shaft-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-bright-sun-400">About Me</h2>
        <p className="text-mine-shaft-200">{userData.bio}</p>
      </div>

      {/* Experience Section */}
      <div className="bg-mine-shaft-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-bright-sun-400">Experience</h2>
        {userData.employment.map((job, index) => (
          <div key={index} className="mb-6 hover:bg-mine-shaft-800 p-4 rounded-lg transition-colors">
            <h3 className="text-xl font-semibold text-bright-sun-300">{job.role}</h3>
            <p className="text-mine-shaft-300">{job.company} • {job.duration}</p>
            <ul className="list-disc list-inside mt-2 text-mine-shaft-200">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-2">
              {job.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-mine-shaft-700 text-bright-sun-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-mine-shaft-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-bright-sun-400">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(userData.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-2 text-mine-shaft-300 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(skills) ? skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-mine-shaft-700 text-bright-sun-300 rounded-full text-sm">
                    {skill}
                  </span>
                )) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-mine-shaft-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-bright-sun-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {userData.projects.map((project, index) => (
            <div key={index} className="p-4 border border-mine-shaft-700 rounded-lg hover:bg-mine-shaft-800 transition-colors">
              <h3 className="text-xl font-semibold text-bright-sun-300">{project.name}</h3>
              <p className="text-mine-shaft-300 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-mine-shaft-700 text-bright-sun-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.githubUrl}
                className="mt-4 inline-block text-bright-sun-400 hover:text-bright-sun-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};
