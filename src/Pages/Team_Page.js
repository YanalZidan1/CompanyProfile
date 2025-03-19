import React, { useState, useEffect } from 'react';
import TeamPhoto from '../Assets/Images/TeamPhoto.jpg';
import TeamData from '../Data/TeamData.json';
import HeaderPages from "../Commponents/HeaderPages";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team_Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  const totalPages = Math.ceil(TeamData.teamMembers.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedTeamMembers = TeamData.teamMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="TeamPage container-fluid p-0"> 
      <HeaderPages
        backgroundImage={TeamPhoto}
        title="Team"
        description="Our team of experts is always ready to help you."
      />
      <div id="Team" className="Team m-0 row"> 
        {paginatedTeamMembers.map((team, index) => (
          <div key={index} className="col-md-2 p-0 Team_box" data-aos="fade-up">
            <div className="team-member">
              <img src={require(`../Assets/Images/Team/${team.image}`)} alt={team.name} />
              <div className="team-member-info">
                <h3>{team.name}</h3>
                <h4>{team.position}</h4>
                <div className="social-links">
                  <Link to={team.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to={team.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to={team.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to={team.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">  
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team_Page;
