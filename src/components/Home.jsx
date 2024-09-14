import { useState } from "react";
import "./Home.css";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <button onClick={toggleSidebar} className="sidebar-toggle">
            {isSidebarOpen ? (
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
              </svg>
            )}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20.5A2.5 2.5 0 0 1 23 19.5V7a2.5 2.5 0 0 0-2.5-2.5H6.5A2.5 2.5 0 0 0 4 7v12.5z" />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 20h-10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
              </svg>
              <span>Energy</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3 3 0 0 0-1.24-2.47l-6.91-6.91c-.8-.8-.8-2 0-2.83l6.91-6.91a3 3 0 0 0 2.47-1.24V4m-6 4h.01M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
              </svg>
              <span>Cost Breakdown</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Recommendations</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7" />
                <path d="M18 20v-8" />
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <span>Personalized Tips</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-footer">
          <a href="#" className="customization">
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 4v12a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V4" />
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3 3 0 0 0-1.24-2.47l-6.91-6.91c-.8-.8-.8-2 0-2.83l6.91-6.91a3 3 0 0 0 2.47-1.24V4m-6 4h.01M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
            </svg>
            <span>Customization</span>
          </a>
          <a href="#" className="sign-out">
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>

            {/* <span>Sign Out</span> */}
          </a>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="title">Dashboard Overview</div>
          <div className="actions">
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,16 2,6" />
            </svg>
            <svg
              xmlns=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
        </div>
        <div className="content-body">
          <div className="dashboard-container">
            <div className="dashboard-overview">
              <div className="card energy-overview">
                <h2>Energy Overview</h2>
                <p>Track energy usage</p>
                {/* <p>Live session starts soon</p> */}
                {/* <p>Number of participants</p> */}
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <div className="progress-labels">
                  {/* <span>Current lesson</span> */}
                  <span>Completion</span>
                </div>
              </div>
              <div className="card global">
                <h2>Global</h2>
                <p>Insights into market trends</p>
                {/* <p>Upcoming assessment</p> */}
                {/* <p>Online assessment details</p> */}
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <div className="progress-labels">
                  <span>Current status</span>
                  <span>Registration</span>
                </div>
              </div>
              <div className="card renewable">
                <h2>Renewable</h2>
                <p>Understanding sustainable</p>
                {/* <p>Upcoming session details</p> */}
                {/* <p>Attendee count</p> */}
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <div className="progress-labels">
                  {/* <span>Lesson progress</span> */}
                  {/* <span>Completion</span> */}
                </div>
              </div>
              <div className="card literature">
                <h2>Trends</h2>
                <p>Review session details</p>
                <p>Scheduled review session</p>
                {/* <p>Individual meeting details</p> */}
                <div className="progress-bar">
                  <div className="progress-bar-fill"></div>
                </div>
                <div className="progress-labels">
                  <span>Current</span>
                  {/* <span>Registration</span> */}
                </div>
              </div>
            </div>
            <div className="dashboard-calendar">
              <div className="calendar-header">
                <div className="calendar-title">Dashboard</div>
                <div className="calendar-date-range">
                  <svg
                    xmlns=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Date range for current</span>
                  <svg
                    xmlns=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </div>
              </div>
              <div className="calendar-grid">
                <div className="calendar-cell">1</div>
                <div className="calendar-cell">2</div>
                <div className="calendar-cell">3</div>
                <div className="calendar-cell assignment">
                  4<div className="assignment-title">Energy</div>
                  {/* <div className="assignment-details"> */}
                  {/* Class information */}
                  <br />
                  Session timing
                </div>
              </div>
              <div className="calendar-cell">5</div>
              <div className="calendar-cell">6</div>
              <div className="calendar-cell">7</div>
              <div className="calendar-cell">8</div>
              <div className="calendar-cell">9</div>
              <div className="calendar-cell assignment">
                10
                <div className="assignment-title">Data</div>
                <div className="assignment-details">
                  details
                  <br />
                  Session timing
                </div>
              </div>
              <div className="calendar-cell">11</div>
              <div className="calendar-cell">12</div>
              <div className="calendar-cell">13</div>
              <div className="calendar-cell">14</div>
              <div className="calendar-cell">15</div>
              <div className="calendar-cell">16</div>
              <div className="calendar-cell">17</div>
              <div className="calendar-cell">18</div>
              <div className="calendar-cell assignment">
                19
                <div className="assignment-title">Document</div>
                <div className="assignment-details">
                  details
                  <br />
                  meeting
                </div>
              </div>
              <div className="calendar-cell">20</div>
              <div className="calendar-cell">21</div>
            </div>
          </div>
          <div className="dashboard-real-time">
            <div className="card real-time-data">
              <h2>Real-time Data</h2>
              <div className="real-time-image">
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
                  <path d="M10 18l4-4" />
                </svg>
              </div>
              <div className="real-time-title">
                <h2>Energy Tracking</h2>
                <span>(Ends in: 45 min)</span>
              </div>
              <div className="real-time-details">
                <span>Live Users:</span>
                <span>34/40</span>
              </div>
              <div className="real-time-details">
                <span>User Presence:</span>
                <span>Attendance</span>
              </div>
            </div>
            <div className="card historical-trends">
              <h2>Historical Trends</h2>
              <div className="historical-trends-item">
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Past Performance</span>
                <span>98</span>
                <span>Spring Semester</span>
              </div>
              <div className="historical-trends-item">
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span>Environmental</span>
                <span>72</span>
                <span>Fall Semester</span>
              </div>
              <div className="historical-trends-item">
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Energy Analytics</span>
                <span>34</span>
                <span>Winter Semester</span>
              </div>
            </div>
            <div className="card notifications">
              <h2>Notifications</h2>
              <div className="notification-item">
                <span>New Recommendations Available</span>
                <span>Contact support for assistance.</span>
                <svg
                  xmlns=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
