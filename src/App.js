import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {HashRouter, Link} from "react-router-dom";
import './App.css';
import './themes/base/sass/base.scss'
import { Button } from '@material-ui/core';

/*const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
      <h2>About</h2>
    </div>
);

const Product = () => (
    <div>
      <h2>Product</h2>
    </div>
);*/

class App extends Component {
  render() {
    return (
        /*<HashRouter>
          <Link to={'/register'}>About</Link>
          <Switch>
            <Route exact path='/'>
              <Redirect to="/login" />
            </Route>
            <Route exact path='/login' component={Home}/>
            <Route exact path='/register' component={About}/>
            <Route exact path='/oauth/authorize' component={Product}/>
          </Switch>
        </HashRouter>*/
        <div>
          <div id="shell">

            <a id="logo" href="#"></a>

            <div id="nav-bar">
              <div>
                <div id="nav-header"></div>
                <nav>
                  <ul>

                    <li className="">
                      <a href="#music">
                        <i className="mdi-av-my-library-music"></i>
                        <span>Music</span>
                      </a>


                      <ul>

                        <li><a href="#music">Music</a></li>

                        <li><a href="#music/genres">Genres</a></li>

                        <li><a href="#music/top">Top music</a></li>

                        <li><a href="#music/artists">Artists</a></li>

                        <li><a href="#music/albums">Albums</a></li>

                        <li><a href="#music/videos">Videos</a></li>

                      </ul>

                    </li>

                    <li className="">
                      <a href="#movies/recent">
                        <i className="mdi-av-movie"></i>
                        <span>Movies</span>
                      </a>


                      <ul>

                        <li><a href="#movies/recent">Movies</a></li>

                        <li><a href="#movies">All movies</a></li>

                      </ul>

                    </li>

                    <li className="">
                      <a href="#tvshows/recent">
                        <i className="mdi-hardware-tv"></i>
                        <span>TV shows</span>
                      </a>


                      <ul>

                        <li><a href="#tvshows/recent">TV shows</a></li>

                        <li><a href="#tvshows">All TV shows</a></li>

                      </ul>

                    </li>

                    <li className="">
                      <a href="#browser">
                        <i className="mdi-action-view-list"></i>
                        <span>Browser</span>
                      </a>


                    </li>

                    <li className="">
                      <a href="#addons/all">
                        <i className="mdi-action-extension"></i>
                        <span>Add-ons</span>
                      </a>


                      <ul>

                        <li><a href="#addons/all">all</a></li>

                        <li><a href="#addons/video">video</a></li>

                        <li><a href="#addons/audio">audio</a></li>

                        <li><a href="#addons/executable">executable</a></li>

                        <li><a href="#settings/addons">settings</a></li>

                      </ul>

                    </li>

                    <li className="">
                      <a href="#thumbsup">
                        <i className="mdi-action-thumb-up"></i>
                        <span>Thumbs up</span>
                      </a>


                    </li>

                    <li className="">
                      <a href="#playlists">
                        <i className="mdi-action-assignment"></i>
                        <span>Playlists</span>
                      </a>


                    </li>

                    <li className="">
                      <a href="#settings/web">
                        <i className="mdi-action-settings"></i>
                        <span>Settings</span>
                      </a>


                      <ul>

                        <li><a href="#settings/web">Web interface</a></li>

                        <li><a href="#settings/nav">Main Menu</a></li>

                        <li><a href="#settings/addons">Add-ons</a></li>

                        <li><a href="#settings/search">Search</a></li>

                      </ul>

                    </li>

                    <li className="">
                      <a href="#help">
                        <i className="mdi-action-help"></i>
                        <span>Help</span>
                      </a>


                    </li>

                  </ul>
                </nav>
              </div>
            </div>

            <div id="header">

              <h1 id="page-title">
                <span className="context"></span>
                <span className="title"></span>
              </h1>

              <ul className="mobile-menu">
                <li><a href="#remote" className="mobile-menu--link__remote remote-toggle"><i></i></a></li>
                <li><a href="#search" className="mobile-menu--link__search"><i></i></a></li>
                <li><a href="#playlist" className="mobile-menu--link__playlist"><i></i></a></li>
              </ul>

              <div id="selected-region" className="media-" style={{display: "none"}}>
                <div className="selected-text">
                  <span id="selected-count">0 items selected</span>
                </div>
                <i data-toggle="dropdown" className="menu-toggle"></i>
                <ul className="dropdown-menu pull-right">
                  <li className="selected-play">Play in Kodi</li>
                  <li className="selected-add">Queue in Kodi</li>
                  <li className="selected-localadd">Add to playlist</li>
                </ul>
              </div>

              <div id="search-region">
                <input id="search" title="Search" />
                  <span id="do-search"></span>
              </div>

            </div>

            <div id="main">

              <div id="sidebar-one"></div>

              <div id="content">
                <div>
                  <div className="playlist-page playlist-page__empty set-page">
                    <h3>Now playing - Playlists</h3>
                    <p>Switch between Kodi and local playback via the tabs. You can toggle visibility with the arrow in
                      the top right</p>
                  </div>
                </div>
              </div>

            </div>

            <div id="sidebar-two">
              <div className="playlist-toggle-open"></div>
              <div id="playlist-summary"></div>
              <div id="playlist-bar">
                <div className="playlist-bar media-audio">
                  <div className="playlist-header">
                    <ul className="player-toggle">
                      <li className="kodi">Kodi</li>
                      <li className="local">Local</li>
                    </ul>
                    <div className="playlist-menu dropdown">
                      <i data-toggle="dropdown" className="menu-toggle"></i>
                      <ul className="dropdown-menu pull-right">
                        <li className="dropdown-header">Current playlist</li>
                        <li><a href="#" className="clear-playlist">Clear playlist</a></li>
                        <li><a href="#" className="refresh-playlist">Refresh playlist</a></li>
                        <li><a href="#" className="party-mode">Party mode <i className="mdi-navigation-check"></i></a>
                        </li>
                        <li className="dropdown-header">Kodi</li>
                        <li><a href="#" className="save-playlist">Save Kodi playlist</a></li>

                      </ul>
                    </div>
                  </div>
                  <div className="playlists-wrapper">
                    <div className="kodi-playlists">
                      <ul className="media-toggle">
                        <li className="audio">Audio</li>
                        <li className="video">Video</li>
                      </ul>
                      <div className="kodi-playlist">
                        <ul className="playlist-items"></ul>
                      </div>
                    </div>
                    <div className="local-playlists">
                      <div className="local-playlist">
                        <ul className="playlist-items"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="remote">
              <div>
                <div id="remote-background" className="close-remote"></div>
                <div className="remote kodi-remote">
                  <div className="toggle-visibility"></div>
                  <div className="playing-area">

                  </div>
                  <div className="main-controls">
                    <div className="direction">
                      <div className="pad">
                        <div className="ibut mdi-hardware-keyboard-arrow-left left input-button" data-type="Left"></div>
                        <div className="ibut mdi-hardware-keyboard-arrow-up up input-button" data-type="Up"></div>
                        <div className="ibut mdi-hardware-keyboard-arrow-down down input-button" data-type="Down"></div>
                        <div className="ibut mdi-hardware-keyboard-arrow-right right input-button"
                             data-type="Right"></div>
                        <div className="ibut mdi-image-brightness-1 ok input-button" data-type="Select"></div>
                      </div>
                    </div>
                    <div className="buttons">
                      <div className="ibut mdi-action-settings-power power-button"></div>
                      <div className="ibut mdi-navigation-more-vert input-button" data-type="ContextMenu"></div>
                      <div className="ibut mdi-action-info info-button" data-type="Info"></div>
                    </div>
                  </div>
                  <div className="secondary-controls">
                    <div className="ibut mdi-hardware-keyboard-return input-button" data-type="Back"></div>
                    <div className="ibut mdi-av-stop player-button" data-type="Stop"></div>
                    <div className="ibut mdi-maps-store-mall-directory input-button" data-type="Home"></div>
                  </div>

                </div>
              </div>
            </div>

            <div id="player-wrapper">
              <footer id="player-kodi">
                <div>
                  <div className="player">

                    <div className="controls-primary">
                      <div className="controls-primary-buttons">
                        <div className="control control-prev"></div>
                        <div className="control control-play"></div>
                        <div className="control control-next"></div>
                      </div>
                    </div>

                    <div className="controls-secondary">
                      <div className="volume slider-bar noUi-target noUi-ltr noUi-horizontal noUi-background">
                        <div className="noUi-base">
                          <div className="noUi-origin noUi-connect noUi-stacking" style={{left: "100%;"}}>
                            <div className="noUi-handle noUi-handle-lower"></div>
                          </div>
                        </div>
                      </div>
                      <div className="controls-secondary-buttons">
                        <div className="control control-mute"></div>
                        <div className="control control-repeat"></div>
                        <div className="control control-shuffle"></div>
                        <div className="control control-menu"></div>
                      </div>
                    </div>

                    <div className="now-playing">
                      <div className="playing-thumb thumb" src="images/thumbnail_default.png">
                        <div className="mdi remote-toggle"></div>
                      </div>
                      <div className="playing-info">
                        <div
                            className="playing-progress slider-bar noUi-target noUi-ltr noUi-horizontal noUi-background">
                          <div className="noUi-base">
                            <div className="noUi-origin noUi-connect" style={{left: "0%"}}>
                              <div className="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                        <div className="playing-time">
                          <div className="playing-time-current">0</div>
                          <div className="playing-time-duration">0</div>
                        </div>
                        <div className="playing-meta">
                          <div className="playing-title">Nothing playing</div>
                          <div className="playing-subtitle"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </footer>
              <footer id="player-local">
                <div>
                  <div className="player">

                    <div className="controls-primary">
                      <div className="controls-primary-buttons">
                        <div className="control control-prev"></div>
                        <div className="control control-play"></div>
                        <div className="control control-next"></div>
                      </div>
                    </div>

                    <div className="controls-secondary">
                      <div className="volume slider-bar noUi-target noUi-ltr noUi-horizontal noUi-background">
                        <div className="noUi-base">
                          <div className="noUi-origin noUi-connect" style={{left: "50%;"}}>
                            <div className="noUi-handle noUi-handle-lower"></div>
                          </div>
                        </div>
                      </div>
                      <div className="controls-secondary-buttons">
                        <div className="control control-mute"></div>
                        <div className="control control-repeat"></div>
                        <div className="control control-shuffle"></div>
                        <div className="control control-menu"></div>
                      </div>
                    </div>

                    <div className="now-playing">
                      <div className="playing-thumb thumb">
                        <div className="mdi remote-toggle"></div>
                      </div>
                      <div className="playing-info">
                        <div
                            className="playing-progress slider-bar noUi-target noUi-ltr noUi-horizontal noUi-background">
                          <div className="noUi-base">
                            <div className="noUi-origin noUi-connect" style={{left: "0%"}}>
                              <div className="noUi-handle noUi-handle-lower"></div>
                            </div>
                          </div>
                        </div>
                        <div className="playing-time">
                          <div className="playing-time-current">0</div>
                          <div className="playing-time-duration">0:00</div>
                        </div>
                        <div className="playing-meta">
                          <div className="playing-title">Nothing playing</div>
                          <div className="playing-subtitle"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </footer>
            </div>

            <div className="player-menu-wrapper">
              <ul className="player-menu">
                <li className="video-scan">Scan video library</li>
                <li className="audio-scan">Scan audio library</li>
                <li className="send-input">Send text to Kodi</li>
                <li className="goto-lab">The lab</li>
                <li className="about">About Chorus</li>
              </ul>
            </div>

          </div>
        </div>
    );
  }
}

export default App;