import React,{useState} from 'react';
import '../App.css';
import { useUser } from '../UserContext';

function Webcode() {
  const { user } = useUser();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const hideDetails = () => {
    setShowDetails(false);
  };
  return (
    <div>
    <h1>Webcode</h1>
    <div class="Body_body__wrapper__6cj6C" bis_skin_checked="1">
        <div class="Navbar_navbar__container__3Q3Zl" bis_skin_checked="1">
            <div class="sc-jTrPJq gFWlwy" bis_skin_checked="1">
                <div class="sc-jTrPJq gFWlwy" bis_skin_checked="1">
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
        <div class="my-4" bis_skin_checked="1">
            <div class="baseContainer" bis_skin_checked="1" onClick={toggleDetails}>
                <div class="flexCont" bis_skin_checked="1">
                    <div bis_skin_checked="1">
                        <div class="title weight-500" bis_skin_checked="1">{user}</div>
                        <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor"
                            bis_skin_checked="1">
                            <div class="mx-1" bis_skin_checked="1">(B47 WD2 Tamil - First Webcode)</div>
                            <div class="mx-1" bis_skin_checked="1">Makeup API</div>
                        </div>
                    </div>
                    <div bis_skin_checked="1">
                        <div class="mx-1 secondaryGreyTextColor" bis_skin_checked="1">submitted June 2nd 2023, 9:31 pm
                        </div>
                        <div class="ml-3 mr-1 d-flex align-self-end justify-content-end" bis_skin_checked="1">
                            
                            <div class="tasktag px-2 rounded" bis_skin_checked="1">webCode</div>
                        </div>
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
                  <div className="mx-1" bis_skin_checked="1">(B47 WD2 Tamil - First Webcode)</div>
                  <div className="mx-1" bis_skin_checked="1">Makeup API</div>
                </div>
              </div>
              <div bis_skin_checked="1">
                <div className="ml-3 mr-1 d-flex align-self-end justify-content-end" bis_skin_checked="1">
                  
                  <div className="tasktag px-2 rounded" bis_skin_checked="1">webCode</div>
                </div>
                <div className="mx-1 secondaryGreyTextColor" bis_skin_checked="1">submitted on June 2nd 2023, 9:31 pm</div>
              </div>
            </div>
            <div className="row d-flex align-itmes-center justify-content-between mx-1 commentsstudent" bis_skin_checked="1">
              <div className="col-12" bis_skin_checked="1">
                <div className="mx-2 mt-3" bis_skin_checked="1">Description :</div>
                <div className="mx-2 mt-0 mb-3 py-3 px-2 rounded descriptionStudents" bis_skin_checked="1">
                  <div className="smooth-scroll list-unstyled" bis_skin_checked="1">
                    <p>Implement the Makeup API using async/await with fetch.</p>
                    <p><strong>Constraints:</strong></p>
                    <ul>
                      <li>All your HTML elements should be created with DOM.</li>
                      <li>Use the async/await.</li>
                      <li>Use try-catch to handle errors.</li>
                      <li>Use fetch() to get the data from Makeup API</li>
                      <li>All JavaScript codes should be in a script file named script.js which has to be imported in your HTML page.</li>
                      <li>The project should contain either a search filter (which should highlight the text) or pagination (shouldn't use any library).</li>
                    </ul>
                    <p><strong>How do I process the API data?</strong></p>
                    <ul>
                      <li>Display the brand and the name of the product.</li>
                      <li>Display the price of the product.</li>
                      <li>Also display the image and product link.</li>
                      <li>Display the description of the product.</li>
                    </ul>
                    <p><strong>Any basic hints to solve?</strong></p>
                    <p>https://makeup-api.herokuapp.com/api/v1/products.json</p>
                    <p>https://makeup-api.herokuapp.com/</p>
                    <p><strong>Terms and Conditions?</strong></p>
                    <ul>
                      <li>You have 24 hours to complete before the deadline</li>
                      <li>Raise a query ticket only in the Zen portal and get your doubts resolved.</li>
                      <li>You agree to not share this confidential document with anyone.</li>
                      <li>You agree to open-source your code (it may even look good on your profile!). Do not mention our company’s name anywhere in the code.</li>
                      <li>We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.</li>
                      <li>Submit the Netlify URL and GitHub repository URLs</li>
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
                  <td className="codeName">Front-end Deployed URL</td>
                  <td>
                    <a href="https://zippy-tiramisu-cbade9.netlify.app" target="_blank" rel="noreferrer">https://zippy-tiramisu-cbade9.netlify.app</a>
                  </td>
                </tr>
                <tr>
                  <td className="codeName">Front-end Source code</td>
                  <td>
                    <a href="https://github.com/aravindhselvam3/daily-task/blob/main/MakeupProducts/index.html" target="_blank" rel="noreferrer">https://github.com/aravindhselvam3/daily-task/blob/main/MakeupProducts/index.html</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col-12 marksContainer" bis_skin_checked="1">
              <div className="row d-flex align-itmes-center justify-content-between mx-1" bis_skin_checked="1">
                <div className="col-12" bis_skin_checked="1">
                  
                 
                </div>
              </div>
              <hr className="containerDivider mx-1" />
            </div>
          </div>)}
    </div>
</div>

  )
}

export default Webcode;