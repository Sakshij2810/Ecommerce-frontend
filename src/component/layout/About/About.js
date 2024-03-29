import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/sakshi-jadhav-9b46b4240/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dbd4b850-1864-410c-aca9-0945f15c9823/dgen18y-261f51c9-1704-47e1-a423-7d5d1957e19b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiZDRiODUwLTE4NjQtNDEwYy1hY2E5LTA5NDVmMTVjOTgyM1wvZGdlbjE4eS0yNjFmNTFjOS0xNzA0LTQ3ZTEtYTQyMy03ZDVkMTk1N2UxOWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SthGCmlOa7OLQnHUtkWd1jEV_DfRgJwwoc3MTTLm6kE"
              alt="Founder"
            />
            <Typography>Sakshi Jadhav</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              Welcome to ECOMMERCE, where quality meets convenience. Shop
              confidently with us for all your needs.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="http://youtube.com/@rishizjadhav" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="http://instagram.com/rishizjadhav" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
