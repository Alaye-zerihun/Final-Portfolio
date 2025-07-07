import React from 'react';
import './style.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h1 className="resume-title wow fadeInDown" data-wow-duration="1s">Resume</h1>
        <div className="resume-card">
          {/* Contact Information */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <h2>Contact Information</h2>
            <p className="contact-info">
              <span className="font-medium">Abinet Zerihun Arega</span><br />
              Addis Ababa, Ethiopia<br />
              <a href="mailto:Alaye93@gmail.com">Alaye93@gmail.com</a><br />
              +2519-13-19-04-63<br />
              <a href="https://www.linkedin.com/in/abinet-zerihun" target="_blank" rel="noopener noreferrer">linkedin.com/in/abinet-zerihun</a>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <h2>Professional Summary</h2>
            <p>
              Dynamic Network Administrator with a Master of Science in Information Science from Addis Ababa University (2021) and over 1 year of hands-on experience in designing, implementing, and managing sophisticated network systems. Expert in enhancing network security, optimizing performance, and delivering technical training. Proven leadership in ICT consulting, system maintenance, and research, with a passion for driving technological innovation and operational excellence.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
            <h2>Technical Skills</h2>
            <ul className="skills-list">
              <li>Network Design & Implementation</li>
              <li>Network Security & Threat Mitigation</li>
              <li>Firewall & VPN Configuration</li>
              <li>Network Performance Optimization</li>
              <li>Troubleshooting & Problem Solving</li>
              <li>Cloud Computing (AWS, Azure)</li>
              <li>Routing & Switching (Cisco, Juniper)</li>
              <li>Network Monitoring & Analysis (Wireshark, SolarWinds)</li>
              <li>Virtualization (VMware, Hyper-V)</li>
              <li>Scripting & Automation (Python, Bash)</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
            <h2>Professional Experience</h2>
            <div className="experience-item">
              <h3>Network Administrator, Addis Ababa, Ethiopia</h3>
              <p className="date">2023 – Present</p>
              <ul className="experience-list">
                <li>Designed and deployed scalable network architectures for 5+ organizations, achieving 99% uptime and robust security.</li>
                <li>Conducted security assessments, implementing firewalls and VPNs to safeguard sensitive data.</li>
                <li>Led a team of 4 technicians, providing training on Cisco and Juniper protocols, improving team efficiency by 25%.</li>
                <li>Troubleshot complex network issues, reducing downtime by 30% through proactive monitoring with Wireshark and SolarWinds.</li>
                <li>Integrated cloud solutions (AWS, Azure), enhancing system scalability and performance.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>ICT Consultant & Technical Trainer, Self-Employed</h3>
              <p className="date">2016 – 2023, Addis Ababa, Ethiopia</p>
              <ul className="experience-list">
                <li>Provided ICT consulting for 10+ clients, optimizing IT infrastructure and reducing costs by 15%.</li>
                <li>Developed and delivered training programs on network administration, training 200+ students and professionals.</li>
                <li>Conducted research on network technologies, producing reports that informed client IT strategies.</li>
                <li>Maintained and upgraded systems, ensuring 98% reliability through routine diagnostics and updates.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="1s" data-wow-duration="0.8s">
            <h2>Education</h2>
            <div className="education-item">
              <p>
                <span className="font-medium">Master of Science in Information Science</span><br />
                Addis Ababa University, Addis Ababa, Ethiopia – Graduated October 2021<br />
                Specialization: Information Science and Systems
              </p>
            </div>
            <div className="education-item">
              <p>
                <span className="font-medium">Bachelor of Science in Information Science</span><br />
                Jimma University, Jimma, Ethiopia – Graduated June 2014
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="resume-section-content wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">
            <h2>Languages</h2>
            <ul className="skills-list">
              <li>English: Fluent</li>
              <li>Amharic: Fluent</li>
            </ul>
          </div>

          {/* Download Resume Button */}
          <div className="resume-section-content text-center wow zoomIn" data-wow-delay="1.4s" data-wow-duration="0.8s">
            <a
              href="/files/resume.pdf"
              download
              className="download-button"
              aria-label="Download Resume PDF"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
