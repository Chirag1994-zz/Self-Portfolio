import React from "react"
import { Menu, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "../styles/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import MyProjects from '../components/projects'
import MyBlogs from '../components/blogs'

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

export default class IndexPage extends React.Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="main">
        <Menu pointing secondary inverted>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="blogs"
            active={activeItem === "blogs"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
        </Menu>

        <div className="fix">

          <Segment raised>
            <section id="zero-page">
              <div className="animated fadeInDown intro">
                <img
                  className="profile-photo"
                  src={require("../images/chirag.jpg")}
                />
                <h1>Hi, </h1>
                <p>
                  I'm Chirag Lodha and I help businesses create beautiful
                  experiences on the web and mobile
                </p>

                <ul className="social-icons desktop-right">
                  <li>
                    <a
                      href="https://twitter.com/Chirag1994"
                      title="Follow me on twitter"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/Chirag1994/"
                      title="Follow on Pinterest"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>

                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/Chirag1994/"
                      title="Follow me on Instagram"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/chirag/"
                      title="Follow me on Facebook"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/82_clicks/"
                      title="Follow me on Linkedin"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/82_clicks/"
                      title="Follow me on Github"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/82_clicks/"
                      title="Mail me on"
                      target="_blank"
                      className="hvr-back-pulse"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="ui horizontal inverted divider">
                My tech toolbox
              </h4>
              <h3 className="fw-600">
                Javascript, HTML5, CSS3, ReactJS, Redux, GraphQl, GatsbyJS,
                Bootstrap4, Git, Java, AngularJS.
              </h3>
            </section>
          </Segment>

          <h1 class=" ui horizontal inverted divider">
            <p class="element">My Projects</p>
          </h1>
          <MyProjects/>
          <h1 class=" ui horizontal inverted divider">
            <p class="element">My Blogs</p>
          </h1>
          <MyBlogs/>
        </div>
      </div>
    )
  }
}


