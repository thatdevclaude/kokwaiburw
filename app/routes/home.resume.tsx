const Resume = () => {
    return (
      <div className="h-full flex items-center justify-center m-10 rounded-md shadow-lg shadow-primary overflow-hidden">
        {/* <h1>My Resume</h1> */}
        <object data="/resume.pdf" type="application/pdf" width="100%" className="overflow-hidden h-[1500px]">
          <span>your Browser does not support PDF viewer <p className="badge badge-primary"><a href="/resume.pdf" download>Download Resume</a></p></span>
        </object>
        {/*  */}
      </div>
    );
  };
  
  export default Resume;