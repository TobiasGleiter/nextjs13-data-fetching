export interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center lg:justify-center px-4 lg:px-8 font-mono text-sm mb-10 mt-5">
        <div className="lg:flex lg:gap-x-8">Tobias Gleiter</div>
      </div>
    </footer>
  );
};

export default Footer;
