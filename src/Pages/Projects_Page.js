import ProjectsPhoto from '../Assets/Images/ProjectsPhoto.jpg';

//component
import HeaderPages from "../Commponents/HeaderPages";
import Projects from '../Commponents/Projects';

function Projects_Page() {
    
    return (
        <div className="Projects_Page container-fluid p-0">
        <HeaderPages
          backgroundImage={ProjectsPhoto}
          title="Projects"
          description="We offer a wide range of high-quality products."
        />
        <Projects/>

       </div>

        
    );
}
export default Projects_Page;