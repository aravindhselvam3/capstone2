import React, {useState} from 'react';

function MyComponent() {
    const [sessionData, setSessionData] = useState(null);
    const handleRoadmapItemClick = (clickedNumber) => {
      
    fetch(`https://capstonebackend-6l2d.onrender.com/api/getSession/${clickedNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setSessionData(data[0]); 
      })
      .catch((error) => {
        console.error("Error fetching session data:", error);
      });
  };
  const handleAdditionalSessionClick = (sessionDate) => {

  }
  return (
    <div>
    <div className="Body_body__wrapper__6cj6C" bis_skin_checked="1">
      <div className="Body_body__content__full__1L5Pm" bis_skin_checked="1">
        <div className="row-container" bis_skin_checked="1">
          <div className="class-content" bis_skin_checked="1">
            <div className="class-head d-flex px-3" style={{ justifyContent: 'space-between', alignItems: 'center' }} bis_skin_checked="1">
              <h3 className="classhead m-0 text-white">Join the class on time!</h3>
              <div bis_skin_checked="1"></div>
            </div>
            <div className="session-container" bis_skin_checked="1">
            <div className="session-area" bis_skin_checked="1">
            {sessionData ? (
                  <>
                    <span style={{ fontSize: '24px', fontWeight: 500 }}>{sessionData.title}</span><br />
                    {sessionData.contents}
                    <hr />
                    <div className="preread-head" bis_skin_checked="1">Contents:</div>
                    <div className="ml-3" bis_skin_checked="1">
                      <span className="preread" style={{ whiteSpace: 'pre-wrap' }}>{sessionData.contents}</span>
                    </div>
                    <div className="preread-head mt-3 mb-3 " style={{"width": "340px"}} bis_skin_checked="1">Pre-read:</div>
                    <div className="ml-3 " bis_skin_checked="1">
                      <span className="preread" style={{ whiteSpace: 'pre-wrap' }}>{sessionData.preread}</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span style={{ fontSize: '24px', fontWeight: 500 }}>No session title available</span><br />
                    Class schedule is not updated
                    <hr />
                    <div className="preread-head" bis_skin_checked="1">Contents:</div>
                    <div className="ml-3" bis_skin_checked="1">
                      <span className="preread" style={{ whiteSpace: 'pre-wrap' }}>No content available</span>
                    </div>
                    <div className="preread-head mt-8" bis_skin_checked="1">Pre-read:</div>
                    <div className="ml-3 mt-5" bis_skin_checked="1">
                      <span className="preread" style={{ whiteSpace: 'pre-wrap' }}>No preread available</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4" bis_skin_checked="1"></div>
          </div>
          <div className="sideContainer" bis_skin_checked="1">
            <div className="roadmap-container justify-self-center" bis_skin_checked="1">
              <div className="roadmap-area" bis_skin_checked="1">
                <div className="progress-head" bis_skin_checked="1">
                  <span className="progress-header">Sessions Roadmap</span>
                </div>
                <div bis_skin_checked="1">
                  <div className="sessionsContainer" bis_skin_checked="1">
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(1)}><h6>1</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(2)}><h6>2</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(3)}><h6>3</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(4)}><h6>4</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(5)}><h6>5</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(10)}><h6>10</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(9)}><h6>9</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(8)}><h6>8</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(7)}><h6>7</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(6)}><h6>6</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(11)}><h6>11</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(12)}><h6>12</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(13)}><h6>13</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(14)}><h6>14</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(15)}><h6>15</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(20)}><h6>20</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(19)}><h6>19</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(18)}><h6>18</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(17)}><h6>17</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(16)}><h6>16</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(21)}><h6>21</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(22)}><h6>22</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(23)}><h6>23</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(24)}><h6>24</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(25)}><h6>25</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(30)}><h6>30</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(29)}><h6>29</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(28)}><h6>28</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(27)}><h6>27</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(26)}><h6>26</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(31)}><h6>31</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(32)}><h6>32</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(33)}><h6>33</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(34)}><h6>34</h6><div className="step_path_right" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(35)}><h6>35</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(40)}><h6>40</h6><div className="step_path_bottom" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(39)}><h6>39</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(38)}><h6>38</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(37)}><h6>37</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(36)}><h6>36</h6><div className="step_path_left " bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(41)}><h6>41</h6><div className="step_path" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(42)}><h6>42</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(43)}><h6>43</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                    <div className="roadmap_icon_container RICompleted" bis_skin_checked="1" onClick={() => handleRoadmapItemClick(44)}><h6>44</h6><div className="step_path_left" bis_skin_checked="1" style={{ pointerEvents: 'none' }}></div></div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="roadmap-container mt-2" bis_skin_checked="1">
              <div className="roadmap-area" bis_skin_checked="1">
                <div className="progress-head d-flex justify-content-between" bis_skin_checked="1">
                  <span className="progress-header">Additional Sessions</span>
                </div>
                <div className="addSessionContainer" bis_skin_checked="1">
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Mock API : 4th August 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>04/08/2023 - Friday - 8:00 AM</p>
                  </div>
                  {/* ... (repeat for other addSession elements) */}
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>AWS Day 5 : 2nd August 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>02/08/2023 - Wednesday - 8:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>AWS Day 4: 1st August 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>01/08/2023 - Tuesday - 8:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>AWS Day 3 : 31st July 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>31/07/2023 - Monday - 8:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Pre placement Session : 29th July 2023 @ 9 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>29/07/2023 - Saturday - 9:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>AWS Day 2 : 28th July 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>28/07/2023 - Friday - 8:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>AWS Day 1 : 27th July 2023 @ 8 AM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>27/07/2023 - Thursday - 8:00 AM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>FSD Demo Day 2 : 24th July 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>24/07/2023 - Monday - 6:30 PM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>FSD Demo Day 1 : 21st July 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>21/07/2023 - Friday - 6:30 PM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Recap : 20th July 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>20/07/2023 - Thursday - 6:30 PM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Recap : 19th July 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>19/07/2023 - Wednesday - 6:30 PM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Insert , Updates : 4th July 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>04/07/2023 - Tuesday - 6:30 PM</p>
                  </div>
                  <div className="addSession" bis_skin_checked="1">
                    <h5 style={{ fontWeight: 450 }}>Practice Session 30th June 2023 @ 6.30 PM</h5>
                    <p style={{ fontWeight: 200, margin: '0px' }}>30/06/2023 - Friday - 6:30 PM</p>
                  </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Practice Session : 15th June 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>15/06/2023 - Thursday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Previous Topic Recap (24/05/2023) @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>24/05/2023 - Wednesday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Recap : 18th May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>18/05/2023 - Thursday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>grid layout : 11th May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>11/05/2023 - Thursday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Doubt session: 8th May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>08/05/2023 - Monday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>HTML Day 1 Recap : 5th May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>05/05/2023 - Friday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>JAvascript Recap : 3rd May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>03/05/2023 - Wednesday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>DS ALGo Day 5 : 2nd May 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>02/05/2023 - Tuesday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>DS Algo Day 4 : 28th April 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>28/04/2023 - Friday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>DS ALGO Day 3 : 27th April 2023 @6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>27/04/2023 - Thursday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>DS ALGO Day 2 : 26th April 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>26/04/2023 - Wednesday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>DS Algo Day 1 : 25th April 2023 @ 6.30 PM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>25/04/2023 - Tuesday - 6:30 PM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>GITHUB Session 13th April 2023 @ 10 Am</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>13/04/2023 - Thursday - 10:00 AM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Day 0 Demo : 12th April 2023 @ 10.30 AM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>12/04/2023 - Wednesday - 10:30 AM</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Codekata Day 5: 11th April 2023 @ 8 Am</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>Class Schedule Not Updated</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Codekata Day 4 : 10th April 2023 @ 8 AM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>Class Schedule Not Updated</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Codekata Day 3: 7th April 2023 @ 8 AM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>Class Schedule Not Updated</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <h5 style={{ fontWeight: 450 }}>Codekata Day 2 : 6th April 2023 @ 8 AM</h5>
            <p style={{ fontWeight: 200, margin: '0px' }}>Class Schedule Not Updated</p>
          </div>
          <div className="addSession" bis_skin_checked="1">
            <div className="addSession" bis_skin_checked="1">
              <h5 style={{ fontWeight: 450 }}>Codekata 5th April 2023 @ 8 AM</h5>
              <p style={{ fontWeight: 200, margin: '0px' }}>Class Schedule Not Updated</p>
             </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div></div>
  );
}

export default MyComponent;
