import React from "react";
import "./about_us.css";
import { makeStyles } from '@material-ui/core/styles';
import Card1 from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    paddingTop:'23px',
    paddingBottom: '23px',
    paddingLeft: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '60%',
    height: '140px',
    borderRadius: '50%',
  },
}));
const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="about-section">
        <img src="./images/about-us.jpg" alt="" className="aboutus-img" />
      </div>
      <div className="about">
        <div className="row">
          <div className="col-lg-6">
            <h1>Who are we and what we do?</h1>
            <div className="dash"></div>
            <h4 className="by-line text-left">By Students, For Students</h4>
          </div>
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <p>
              Ad dolore dignissimos asperiores dicta facere optio quod commodi
              nam tempore recusandae. Rerum sed nulla eum vero expedita ex
              delectus voluptates rem at neque quos facere sequi unde optio
              aliquam!
            </p>
            <p>
              Tenetur quod quidem in voluptatem corporis dolorum dicta sit
              pariatur porro quaerat autem ipsam odit quam beatae tempora
              quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur
              at!
            </p>
          </div>
        </div>
      </div>
      <div className="meet">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h1>MEET THE CREW</h1>
            <h5 >
              “Individuals can and do make a difference, but it takes a team to
              really mess things up.”
            </h5>
          </div>
          <div className="col-lg-4">
            <img src="./images/profile.png" alt="" className="team-img"/>
          </div>
          <div className="col-lg-4">
            <img src="./images/profile.png" alt="" className="team-img"/>
          </div>
        </div>
      </div>
      <div className="team ">
        <div className="row ">
          <div className="col-lg-6">
            <div className="card1">
              <Card1 className={classes.root} >
                <CardMedia
                  className={classes.cover}
                  image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" 
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                    </div>
                    <br/>
                    <div className="team-social">
                      <i className="fab fa-linkedin fa-2x card_footer in"></i>
                      <i className="fab fa-twitter-square fa-2x card_footer"></i>
                      <i className="fab fa-github-square fa-2x card_footer"></i>
                    </div>
                </CardContent>
                </div>
              </Card1>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card1">
              <Card1 className={classes.root} >
                <CardMedia
                  className={classes.cover}
                  image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" 
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                    </div>
                    <br/>
                    <div className="team-social">
                      <i className="fab fa-linkedin fa-2x card_footer in"></i>
                      <i className="fab fa-twitter-square fa-2x card_footer"></i>
                      <i className="fab fa-github-square fa-2x card_footer"></i>
                    </div>
                </CardContent>
                </div>
              </Card1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
          <div className="card1">
              <Card1 className={classes.root} >
                <CardMedia
                  className={classes.cover}
                  image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" 
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                    </div>
                    <br/>
                    <div className="team-social">
                      <i className="fab fa-linkedin fa-2x card_footer in"></i>
                      <i className="fab fa-twitter-square fa-2x card_footer"></i>
                      <i className="fab fa-github-square fa-2x card_footer"></i>
                    </div>
                </CardContent>
                </div>
              </Card1>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card1">
              <Card1 className={classes.root} >
                <CardMedia
                  className={classes.cover}
                  image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" 
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.</p>
                    </div>
                    <br/>
                    <div className="team-social">
                      <i className="fab fa-linkedin fa-2x card_footer in"></i>
                      <i className="fab fa-twitter-square fa-2x card_footer"></i>
                      <i className="fab fa-github-square fa-2x card_footer"></i>
                    </div>
                </CardContent>
                </div>
              </Card1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
