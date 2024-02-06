import React from "react";
// import Jobapplyform from "./Jobapplyform";
import { useEffect } from "react";
import Jobapplyform from "./jobapplyform";

const Srseo = () => {
  useEffect(() => {
    function jobname(){
      var name = document.getElementById('jobname').innerHTML;
      console.log(name);
    }
    jobname();
  });
  useEffect(() => {
  var inputF = document.getElementById("jobrole");
  
  function jobroleinputvalue() {
    var name = document.getElementById('jobname').innerHTML;
      inputF.setAttribute('value', name);
      
  }
  jobroleinputvalue()

  
});
    return (
        <>
        <section className="master-class">
          <div className="container">
            <div className="row job-apply-row">
                <div className="col-md-7 col-12 job-apply-col">
                  <h1 className="job-deatil-heading" id="jobname">Sr. Search Engine Optimization Executive</h1>
                  <p className="job-detail-paragraph">Job purpose</p>
                   <p className="job-description-content">
                   Understanding and analyzing the objective of the client very clearly from the account managers, build a strategy and delegate it to the team. Supervising, guiding and motivating the team to ensure that the team members are delivering to the best of their abilities. To keep the momentum going and help and assist the team members in case of any issues. Have a check on deliverables, both quality wise and commitment wise. To make sure that the department should work at the best efficiency model.
                   </p>
                   <p className="job-detail-paragraph">Qualifications</p>
                   <p className="job-description-content">
                    <ul className="job-description-list">
                        <li>
                        B. Tech (Any Stream), B.C.A. and Certified Digital Marketing Expert Course or Diploma.
                        </li>
                        <li>
                        Thorough tool knowledge of all the Search engine tools. Should be a digital marketing expert, Digital marketing implementation on various platforms like, facebook, google, linkedin, twitter and other media buying platforms. Data & Web Analytics tools like Google analytics
                        </li>
                        <li>
                        Analytical & logical skills, Communication skills, Leadership skills, Delegation Skills, Ability to think through issues strategically.
                        </li>
                        <li>
                        Strategize the marketing efforts over different channels. To think in a broader perspective.
                        </li>
                        <li>
                        Self motivated, Problem Solving, Calm, Committed, Curious.
                        </li>
                        <li>2-3 Years of experience in SEO profile.</li>
                    </ul>
                   </p>
                   <p className="job-detail-paragraph">
                    Duties and responsibilities
                   </p>
                   <p className="job-description-content">
                    <ul className="job-description-list">
                        <li>
                        Design, build and execute strategies for all SEO activities.
                        </li>
                        <li>
                        Measure and report performance of all the strategies, and assess against goals (ROI and KPIs).
                        </li>
                        <li>
                        Clarity in communication withTeam and Departments.
                        </li>
                        <li>
                        Continuously analyze and evaluate departmental productivity and identify opportunities for improvement of systems and processes.
                        </li>
                        <li>
                        Coach, train, develop and assist in personal development at the individual and team level. Make sure of learnings for every individual of the team.
                        </li>
                        <li>Work to build a team environment with strong morale, positive energy, consultative and goal oriented culture.</li>
                        <li>
                        Facilitate problem solving and collaboration. Intervene when necessary to aid the group in resolving issues.
                        </li>
                        <li>
                        Assure that the team addresses all relevant issues within the specified timelines maintaining the quality of tasks at hand.
                        </li>
                        <li>
                        Serve as a focal point to communicate and resolve coordination issues with other teams, account managers and clients. Keep the account manager and management informed of any sort of updates, issues and task status.
                        </li>
                        <li>
                        Collaborate with agencies and other vendor partners for expansion to useful tools and platforms. Finding more accurate media buying platforms according to the need of the client.
                        </li>
                        <li>
                        Helping on sales front in order to create quality SEO audits for sales pitch.
                        </li>
                        <li>
                        Creating projections and verifying regularly with real time results.
                        </li>
                        <li>
                        To keep themselves and the team updated about latest trends in market.
                        </li>
                        <li>
                        Think Automation.
                        </li>
                        <li>
                        Leave Approvals.
                        </li>
                        <li>
                        Sharing feedback to the reporting managers.
                        </li>
                    </ul>
                   </p>
                </div>
                <div className="col-md-5 col-12">
            
                  
<Jobapplyform></Jobapplyform>
                </div>

            </div>

          </div>
        </section>
        </>
        )
    }

export default Srseo;        