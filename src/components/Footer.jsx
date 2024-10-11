const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, Lorem Ipsum</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 cursor-pointer text-p5 transition-all duration-500 hover:text-p1">
                Lorem Ipsum
              </p>
              <p className="cursor-pointer text-p5 transition-all duration-500 hover:text-p1">
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
