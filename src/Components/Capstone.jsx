import React, { useState } from 'react';
import '../App.css';
import { useUser } from '../UserContext';
function Capstone() {
  const { user } = useUser();
  const [showDetails, setShowDetails] = useState(false);
  const [frontEndCode, setFrontEndCode] = useState('');
  const [backEndCode, setBackEndCode] = useState('');
  const [frontEndURL, setFrontEndURL] = useState('');
  const [backEndURL, setBackEndURL] = useState('');
  const [comments, setComments] = useState('');

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const hideDetails = () => {
    setShowDetails(false);
  };

  const handleSubmit = () => {
    
    setFrontEndCode('');
    setBackEndCode('');
    setFrontEndURL('');
    setBackEndURL('');
    setComments('');
  };

  return (
    <div>
      <h1>Capstone</h1>
      <div className="Body_body__wrapper_new" bis_skin_checked="1">
        <div className="Navbar_navbar__container__new" bis_skin_checked="1">
          <div className="sc-jTrPJq gFWlwy" bis_skin_checked="1">
            <div className="sc-jTrPJq gFWlwy" bis_skin_checked="1">
              {showDetails && (
                <button
                  className="NavButtons_add__button__q_2E5"
                  onClick={hideDetails}
                >
                  &lt; Back
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" " bis_skin_checked="1">
          <div className="baseContainer sideBox1 flexCont   mb-3  py-3" bis_skin_checked="1" onClick={toggleDetails}>
            <div className="mx-2" bis_skin_checked="1">
              <div className="title weight-500" bis_skin_checked="1">{user}</div>
              <div className="row d-flex align-items-center secondaryGreyTextColor mx-1" bis_skin_checked="1">
                <div className="mx-1" bis_skin_checked="1">(B47 WD2 Tamil - Capstone Project)</div>
                <div className="mx-1" bis_skin_checked="1">Zen class student dashboard</div>
              </div>
            </div>
            <div className="mx-2" bis_skin_checked="1">
              <div className="ml-3 mr-1 d-flex align-self-end justify-content-end" bis_skin_checked="1">
                <div className="secondaryGreyTextColor mx-1 px-1 rounded" bis_skin_checked="1">Yet to be graded</div>
                <div className="tasktag px-2 rounded" bis_skin_checked="1">capstone</div>
              </div>
            </div>
          </div>
        </div>
        {showDetails && (
          <div className=" taskContainer" bis_skin_checked="1">
            <div className="flexCont my-2 mx-4" bis_skin_checked="1" style={{ alignItems: 'center' }}>
            <div className="my-2 mx-2" bis_skin_checked="1">
                <div className="title weight-500" bis_skin_checked="1">{user}</div>
                <div className="row d-flex align-items-center mx-1 secondaryGreyTextColor" bis_skin_checked="1">
                  <div className="mx-1" bis_skin_checked="1">(B47 WD2 Tamil - Capstone Project)</div>
                  <div className="mx-1" bis_skin_checked="1">Zen class student dashboard</div>
                </div>
              </div>
              <div bis_skin_checked="1">
                <div className="ml-3 mr-1 d-flex align-self-end justify-content-end" bis_skin_checked="1">
                  <div className="secondaryGreyTextColor mx-1 px-1 rounded" bis_skin_checked="1">Yet to be graded</div>
                  <div className="tasktag px-2 rounded" bis_skin_checked="1">capstone</div>
                </div>
              </div>
            </div>
            <div className="row d-flex align-itmes-center justify-content-between mx-1 commentsstudent" bis_skin_checked="1">
              <div className="col-12" bis_skin_checked="1">
                <div className="mx-2 mt-3" bis_skin_checked="1">Description :</div>
                <div className="mx-2 mt-0 mb-3 py-3 px-2 rounded descriptionStudents" bis_skin_checked="1">
                  <div className="smooth-scroll list-unstyled" bis_skin_checked="1">
                    <p>To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.</p>
                    <p><strong>Task Title:  Zen class student dashboard</strong></p>
                    <p><strong>Any specifications on the design?</strong></p>
                    <ul>
                      <li>Front-end: Reactjs</li>
                      <li>Back-end: Nodejs</li>
                      <li>Database: MongoDB</li>
                      <li><strong>Requirements:</strong></li>
                      <li>The project should achieve the CODE QUALITY</li>
                      <li>Use fonts/icons if it’s required in the design.</li>
                      <li>The use of various charts is required in the design.</li>
                      <li>The use of bootstrap/ material CSS is required in the design</li>
                    </ul>
                    <p><strong>How do I submit my work?</strong></p>
                    <ul>
                      <li>Push all your work files to GitHub in two different repositories as given below</li>
                      <li>Front-end repo name project-name-frontend.</li>
                      <li>Back-end repo name project-name-backend.</li>
                      <li>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).</li>
                    </ul>
                    <p><strong>Any basic hints/links/reference sites to solve?</strong></p>
                    <p>https://getbootstrap.com/docs/4.4/getting-started/introduction/</p>
                    <p>https://www.chartjs.org/</p>
                    <p>https://jwt.io/introduction/</p>
                    <p>https://react-bootstrap.github.io/</p>
                    <p>https://materializecss.com/</p>
                    <p>https://tailwindcss.com/</p>
                    <p>https://expressjs.com/</p>
                    <p><strong>Terms and Conditions?</strong></p>
                    <ul>
                      <li>You agree to not share this confidential document with anyone.&nbsp;</li>
                      <li>You agree to open-source your code (it may even look good on your profile!). Do not mention our company’s name anywhere in the code.</li>
                      <li>We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.</li>
                      <li>For capstone, the use case has to be identified by the developer.</li>
                    </ul>
                    <p>NOTE: Any violation of Terms and conditions is strictly prohibited. You are bound to adhere to it.</p>
                  </div>
                </div>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Submission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="codeName">Front-end Source code</td>
                  <td>
                    <input
                      type="text"
                      className="codeSubmission"
                      value={frontEndCode}
                      onChange={(e) => setFrontEndCode(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="codeName">Back-end Source code</td>
                  <td>
                    <input
                      type="text"
                      className="codeSubmission"
                      value={backEndCode}
                      onChange={(e) => setBackEndCode(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="codeName">Front-end Deployed URL</td>
                  <td>
                    <input
                      type="text"
                      className="codeSubmission"
                      value={frontEndURL}
                      onChange={(e) => setFrontEndURL(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="codeName">Back-end Deployed URL</td>
                  <td>
                    <input
                      type="text"
                      className="codeSubmission"
                      value={backEndURL}
                      onChange={(e) => setBackEndURL(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td><h6>Comments: </h6></td>
                  <td>
                    <input
                      type="text"
                      className="codeSubmission"
                      placeholder="leave your comments here"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pl-2 my-0 align-self-end text-center" bis_skin_checked="1">
              <button className="btn btn-primary reqbuttoncreate" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <hr className="containerDivider mx-1" />
           
            <p style={{ padding: '8px', color: 'rgb(250, 185, 20)' }}>
              <strong>Warning</strong>: 2 mark may be deducted automatically from your total score if your submission is beyond the deadline
            </p>
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Capstone;
