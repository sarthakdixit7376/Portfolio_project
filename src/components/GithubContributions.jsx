import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubContributions = () => {
  // Replace this with your actual GitHub username
  const githubUsername = 'sarthakdixit7376';

  // Custom yellow colors (darker yellow for higher number of commits)
  const customTheme = {
    light: ['#ebedf0', '#fef08a', '#facc15', '#eab308', '#854d0e'],
    dark: ['#161b22', '#5e4e09', '#a18418', '#d8b122', '#facc15'],
  };


  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-10 text-center md:text-left">
        GitHub Contributions
      </h2>

      {/* Calendar card container */}
      <div className="bg-white border border-neutral-200/80 rounded-[32px] p-6 md:p-8 flex justify-center shadow-sm overflow-x-auto">
        <GitHubCalendar
          username={githubUsername}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={customTheme}
          colorScheme="light"
        />
      </div>
    </div>
  );
};

export default GithubContributions;
