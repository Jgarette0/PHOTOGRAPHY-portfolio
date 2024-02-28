import DarkModeToggle from "./Darkmode.jsx";
import GithubMode from "./Github.jsx";
function Header() {
  return (
    <>
      <div className="header-container flex flex-col gap-4 items-center justify-center space-y-2 text-center">
        <div className="name-header">
          <div className="nameNako">Jilian Garette</div>
          <div>
            <DarkModeToggle />
            <GithubMode />
          </div>
        </div>
      </div>
      <div className="description-container">
        <p className="description-header max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          CAPTURING THE MOMENT
        </p>
      </div>
    </>
  );
}

export default Header;
