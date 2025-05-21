import React from 'react';

const skillsData = [
        { name: 'Java', iconUrl: 'https://svgl.app/library/java.svg', category: 'Backend' },
        { name: 'Spring', iconUrl: 'https://svgl.app/library/spring.svg', category: 'Backend' },
        { name: 'C++', iconUrl: 'https://svgl.app/library/c-plusplus.svg', category: 'Backend' },
        { name: 'Python', iconUrl: 'https://svgl.app/library/python.svg', category: 'Backend' },
        { name: 'MySQL', iconUrl: 'https://svgl.app/library/mysql.svg', category: 'Backend' },
        { name: 'Firestore', iconUrl: 'https://svgl.app/library/firebase.svg', category: 'Backend' },
        { name: 'MongoDB', iconUrl: 'https://svgl.app/library/mongodb.svg', category: 'Backend' },
        { name: 'HTML', iconUrl: 'https://svgl.app/library/html5.svg', category: 'Frontend' },
        { name: 'CSS', iconUrl: 'https://svgl.app/library/css_old.svg', category: 'Frontend' },
        { name: 'Bootstrap', iconUrl: 'https://svgl.app/library/bootstrap.svg', category: 'Frontend' },
        { name: 'JavaScript', iconUrl: 'https://svgl.app/library/javascript.svg', category: 'Frontend' },
        { name: 'React', iconUrl: 'https://svgl.app/library/react_light.svg', category: 'Frontend' },
        { name: 'Next.js', iconUrl: 'https://svgl.app/library/nextjs_icon_dark.svg', category: 'Frontend' },
        { name: 'Tailwind CSS', iconUrl: 'https://svgl.app/library/tailwindcss.svg', category: 'Frontend' },
        { name: 'AWS', iconUrl: 'https://svgl.app/library/aws_light.svg', category: 'Cloud' },
        { name: 'GCP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', category: 'Cloud' },
        { name: 'Docker', iconUrl: 'https://svgl.app/library/docker.svg', category: 'Cloud' },
        { name: 'Kubernetes', iconUrl: 'https://svgl.app/library/kubernetes.svg', category: 'Cloud' },
        { name: 'Redis', iconUrl: 'https://svgl.app/library/redis.svg', category: 'Cloud' },
        { name: 'Kafka', iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/apachekafka/apachekafka-original.svg', category: 'Cloud' },
        { name: 'Tomcat', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg', category: 'Other Tools' },
        { name: 'Maven', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg', category: 'Other Tools' },
        { name: 'Git', iconUrl: 'https://svgl.app/library/git.svg', category: 'Other Tools' },
        { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', category: 'Other Tools' },
        { name: 'Jenkins', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', category: 'Other Tools' },
        { name: 'IntelliJ', iconUrl: 'https://svgl.app/library/intellijidea.svg', category: 'Other Tools' },
        { name: 'Jira', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', category: 'Other Tools' },
];

const groupedSkills = skillsData.reduce((acc, skill) => {
        if (!acc[skill.category]) {
                acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
}, {});

const Skill = ({ iconUrl, name }) => (
    <div className="flex flex-col items-center m-2">
            <img src={iconUrl} alt={name} className="w-10 h-10" />
            <p className="mt-2 text-xs text-gray-600">{name}</p>
    </div>
);

const Skills = () => (
    <section id="skills" className="py-12 bg-gray-50 text-center">
            <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

                    {/* Grid for Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {Object.entries(groupedSkills).map(([category, skills]) => (
                                <div key={category} className="p-4 bg-white rounded-xl shadow-lg">
                                        <h3 className="text-xl font-semibold text-center mb-4">{category}</h3>

                                        {/* Grid for Skills */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                {skills.map((skill) => (
                                                    <Skill key={skill.name} iconUrl={skill.iconUrl} name={skill.name} />
                                                ))}
                                        </div>
                                </div>
                            ))}
                    </div>
            </div>
    </section>
);

export default Skills;
