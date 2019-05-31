import React, { Component } from "react";

class Portfolio extends Component {

  render() {
    return (
      <div>
        <h2 id="portfolio-header">Portfolio</h2><br/>
        <div class="cards-6 section-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="bryant.jpg" alt=""/>
                                    <div class="card-caption"> Cubs Talk! </div>
                            </div>
                            <div class="table">
                                <h6>Cheerio Scrape</h6>
                                <p class="card-description"> Heroku-deployed application allows users to stay current on all Chicago Cub-related headlines.</p>
                                <a href="https://cubsheadlinescrape.herokuapp.com/" target="_blank"><button className="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="golf.jpg" alt="golf"/>
                                    <div class="card-caption">Beaver Creek</div>
                            </div>
                            <div class="table">
                                <h6>React.JS</h6>
                                <p class="card-description"> Enhanced Full-Stack app now allows potential golfers to book tee-times thorugh the site. </p>
                                <a href="https://beavercreek.herokuapp.com/" target="_blank"><button className="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="burger.jpg" alt=""/>
                                    <div class="card-caption"> Eat-Da-Burger</div>
                            </div>
                            <div class="table">
                                <h6>Handlebars</h6>
                                <p class="card-description"> Eat-Da-Burger is your burger bucket list, of sorts.  Track all your burger conquests, to date. </p>
                                <a href="https://burgerbucketlist.herokuapp.com/" target="_blank"><button className="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <div class="cards-6 section-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="waiter.jpg" alt=""/>
                                    <div class="card-caption"> What's for Dinner? </div>
                            </div>
                            <div class="table">
                                <h6>Yelp! API</h6>
                                <p class="card-description"> Taps into the Yelp! API to arrive at list of suggested restaurants local to user based on craving considerations.</p>
                                <a href="https://lit-stream-91450.herokuapp.com/" target="_blank"><button className="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img classname="img" src="blackii.png" alt="hornet helmet"/>
                                    <div class="card-caption">Hornet History</div>
                            </div>
                            <div class="table">
                                <h6>React.JS w/ MySQL</h6>
                                <p class="card-description">Brush up on all things Hittin' Hornet Football with this full-stack application written in React.JS and MySQL.</p>
                                <a href="https://hittinhornets.herokuapp.com/" target="_blank"><button className="btn-info-2">V I E W</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-profile">
                            <div class="card-image">
                                <img class="img" src="fitness.jpg" alt=""/>
                                    <div class="card-caption"> My Fitness App</div>
                            </div>
                            <div class="table">
                                <h6>React.JS, MySQL, JSX</h6>
                                <p class="card-description"> Built specifically for use on a mobile device, the My Fitness App tracks & trends all fitness-related goals for the user. </p>
                                <a href="https://my-fitness.herokuapp.com/routine" target="_blank"><button className="btn-info-2">V I E W</button></a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
