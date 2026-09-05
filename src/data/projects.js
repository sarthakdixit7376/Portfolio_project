import project1Img from '../assets/images/project_images/project_1.png';
import reactIcon from '../assets/images/icons/react.png';
import nodeIcon from '../assets/images/icons/node-js.png';
import mongoIcon from '../assets/images/icons/database.png';
import expressIcon from '../assets/images/icons/express-js.svg';
import tailwindIcon from '../assets/images/icons/Tailwind CSS.svg';

// To add a new project in the future, simply add another object to this array
export const projectsData = [
  {
    id: 1,
    title: 'Sparrow',
    description: [
      "Built a real-time AI voice tutoring app using React and Vapi AI, allowing users to hold spoken practice conversations directly in the browser.",
      "Developed a Node.js/Express REST API backend to orchestrate voice session lifecycle, process LLM scoring results, and persist data in MongoDB.",
      "Designed MongoDB schemas for conversation transcripts and performance metrics, enabling per-user progress tracking and actionable feedback delivery.",
    ],
    image: project1Img,
    techStack: [
      { name: 'React', icon: reactIcon },
      { name: 'Node.js', icon: nodeIcon },
      { name: 'MongoDB', icon: mongoIcon },
      { name: 'Express.js', icon: expressIcon },
      { name: 'Tailwind CSS', icon: tailwindIcon }
    ]
  }
];
