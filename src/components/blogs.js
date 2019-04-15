
import React from "react"
import { Menu, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "../styles/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

export default class MyBlogs extends React.Component {
    render() {
        return (
<>
<Segment raised>
            <section id="first-page">
              <div className="ui stackable four column grid">
                <div className="column">
                  <div className="ui cards">
                    <div className="card">
                      <div className="content">
                        <img
                          className="right floated huge ui image"
                          src="/images/7a84baec9538d4718007093115fe2997.jpg"
                        />
                        <div className="header">Elliot Fu</div>
                        <div className="meta">Friends of Veronika</div>
                        <div className="description">
                          Elliot requested permission to view your contact
                          details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui cards">
                    <div className="card">
                      <div className="content">
                        <img
                          className="right floated huge ui image"
                          src="/images/7a84baec9538d4718007093115fe2997.jpg"
                        />
                        <div className="header">Elliot Fu</div>
                        <div className="meta">Friends of Veronika</div>
                        <div className="description">
                          Elliot requested permission to view your contact
                          details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui cards">
                    <div className="card">
                      <div className="content">
                        <img
                          className="right floated huge ui image"
                          src="/images/7a84baec9538d4718007093115fe2997.jpg"
                        />
                        <div className="header">Elliot Fu</div>
                        <div className="meta">Friends of Veronika</div>
                        <div className="description">
                          Elliot requested permission to view your contact
                          details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui cards">
                    <div className="card">
                      <div className="content">
                        <img
                          className="right floated huge ui image"
                          src="/images/7a84baec9538d4718007093115fe2997.jpg"
                        />
                        <div className="header">Elliot Fu</div>
                        <div className="meta">Friends of Veronika</div>
                        <div className="description">
                          Elliot requested permission to view your contact
                          details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Segment>
          </>
)}}