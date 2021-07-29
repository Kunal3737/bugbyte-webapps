import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <div>
      <section className="main-screen_1">
        <div className="main-screen_1-panels left-panel">
          <span className="title">The coding school that cares about you.</span>
          <span className="description">Pay ₹0 fees till you earn 5LPA+</span>
          <button className="apply-now-for-free">Apply now for free</button>
        </div>
        <div className="main-screen_1-panels right-panel">
          <div className="studing-image">Image</div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="main-screen_2">
        <div className="path-to-success">
          <span className="title">The path to your success</span>
          <span className="subtitle">
            Join the skill-based learning programs at Masai School and launch
            your career in the technology industry.
          </span>
        </div>
        <div className="success-key">
          <div className="success-key--item">
            <div className="success-key--icon"></div>
            <div className="success-key-description">
              Become a Software Developer with
              <br /> our Web
              <br /> Development courses.
            </div>
          </div>
          <div className="success-key--item">
            <div className="success-key--icon"></div>
            <div className="success-key-description">
              Study at Zero Fee and pay only
              <br /> after you get a job that pays
              <br /> minimum 5LPA.
            </div>
          </div>
          <div className="success-key--item">
            <div className="success-key--icon"></div>
            <div className="success-key-description">
              Build your communication and presentation skills, in addition to
              becoming a successful developer.
            </div>
          </div>
        </div>
      </section>

      <section className="main-screen_3">
        <div className="courses">
          <div className="our_courses">Our Courses</div>
          <div className="course-card__wrapper">
            <div className="course-card">
              <div className="course-card--upper-content">
                <div className="course-card-image">image</div>
                <div className="course-card-content">
                  <div className="full-stack-title">FULL STACK</div>
                  <div className="web-development">
                    Web <br />
                    Development
                  </div>
                  <div className="timimg">Part time</div>
                </div>
              </div>
              <div className="card-footer">
                <div className="start-date">
                  <div>Starts:</div>
                  <div className="date">30 Aug 2021</div>
                </div>
                <div className="arrow-wrapper">
                  <span className="arrow">&rarr;</span>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-card--upper-content">
                <div className="course-card-image">image</div>
                <div className="course-card-content">
                  <div className="full-stack-title">FULL STACK</div>
                  <div className="web-development">
                    Web <br />
                    Development
                  </div>
                  <div className="timimg">Part time</div>
                </div>
              </div>
              <div className="card-footer">
                <div className="start-date">
                  <div>Starts:</div>
                  <div className="date">30 Aug 2021</div>
                </div>
                <div className="arrow-wrapper">
                  <span className="arrow">&rarr;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-screen_4">
        <div>
          <div className="course-fee">Course Fee</div>
          <div className="course-description">
            “Study at zero fee, pay after you earn”
          </div>
        </div>
        <div className="course-fee-lower-wrapper">
          <div className="course-fee-content">Image</div>
          <div className="course-fee-content second-section">
            <div className="fee-details">
              You pay no fees while studying at Masai School. Only once you
              complete the course, get placed and start earning Rs. 5 lakh or
              more per year, you will&nbsp;
              <span className="color--red">pay 15%</span> of your monthly income
              towards the Income Share Agreement (ISA) for a maximum of 3 years
              or until you have paid{" "}
              <span className="color--red">Rs 3 lakhs</span> (including GST).
            </div>
            <div className="know-more">Know More</div>
          </div>
        </div>
      </section>

      <section className="main-screen_5">
        <div className="how-to-apply__wrapper">
          <div className="how-to-apply">How to apply</div>
          <div className="applying-steps__wrapper">
            <div className="card">
              <div className="image">Image</div>
              <div className="card-text">
                Click <span className="apply-now-pointer">"Apply Now”</span> to
                <br />
                &nbsp;register
              </div>
            </div>
            <div className="card">
              <div className="image">Image</div>
              <div className="card-text">
                Choose your desired
                <br />
                &nbsp;course
              </div>
            </div>
            <div className="card">
              <div className="image">Image</div>
              <div className="card-text">
                Complete the admission
                <br />
                &nbsp;process
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
