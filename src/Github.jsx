import { Github } from "lucide-react";

function GithubMode({ color }) {
  return (
    <a href="https://github.com/Jgarette0/PHOTOGRAPHY">
      <button className="github">
        <Github color={color} size={27} />
      </button>
    </a>
  );
}

export default GithubMode;
