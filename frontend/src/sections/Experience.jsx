// import { FaLayerGroup, FaPalette, FaReact } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode } from "react-icons/fa";

 const experiences = [
  {
    year: "Jun 2024 – Present",
    role: "Software Developer",
    company: "Ommify Technologies Pvt. Ltd.",
    description: `
Working as a frontend-focused Software Developer building scalable web applications.
Developing production-ready features using Next.js, React, and TypeScript.
Collaborating with designers, backend teams, and product managers.
Improving UI performance, responsiveness, and overall user experience.
    `,
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Framer Motion",
    ],
    icon: FaReact,
    color: "from-cyan-400 to-blue-500",
  },
  {
    year: "Jan 2024 – May 2024",
    role: "Software Engineer Intern",
    company: "Salesine Technologies Pvt. Ltd.",
    description: `
Worked on full-stack features using React and Node.js.
Integrated APIs and handled authentication flows.
Assisted in database operations and backend logic.
Gained hands-on experience in real-world production systems.
    `,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: FaNodeJs,
    color: "from-green-400 to-emerald-500",
  },
  {
    year: "Aug 2021 – Jan 2022",
    role: "Web Developer Intern",
    company: "Putatoe Technologies Pvt. Ltd.",
    description: `
Developed UI components and cloned existing interfaces.
Integrated REST APIs and fixed frontend bugs.
Collaborated with senior developers in an agile environment.
Strengthened fundamentals of web development and API handling.
    `,
    tech: ["HTML", "CSS", "JavaScript", "React.js", "REST APIs"],
    icon: FaCode,
    color: "from-purple-400 to-pink-500",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 px-4"
    >
      {/* Background Glow */}
      <div className="sticky  inset-0">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r opacity-10 from-pink-600 to-purple-600 blur-3xl rounded-full top-1/4 left-1/2 -translate-x-1/2" />
      </div>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A journey through my career — building, breaking, and learning with
          passion.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex ${
                i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 md:left-[47%] lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-12 lg:-translate-y-1/2 z-10">
                <div
                  className={`w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center shadow-lg bg-gradient-to-r ${exp.color}`}
                >
                  <span className="text-black">{exp.icon}</span>
                </div>
              </div>

              {/* Card */}
              <div className="ml-6 md:ml-0 md:w-1/2 px-2">
                <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl">
                  <span className="text-sm font-semibold text-cyan-400">
                    {exp.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
                    {exp.role}
                  </h3>

                  <p className="text-purple-400 mt-1 font-medium">
                    {exp.company}
                  </p>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop spacer */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
