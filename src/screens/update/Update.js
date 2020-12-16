import React, { Component } from 'react';
import Header from '../../common/header/Header';
import ReactDOM from 'react-dom';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import './Update.css';


class Update extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      storyline: '',
      duration: '',
      poster_url: '',
      trailer_url: '',
      wiki_url: '',
      release_date: '',
      censor_board_rating: '',
      critics_rating: 8.0,
      status: '',
    };
  }

  backToHomeHandler = () => {
    ReactDOM.render(<Home />, document.getElementById('root'));
  };

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onFromSubmitted = (e) => {
      e.preventDefault();
      this.props.addArticleHandler(this.state);
      this.setState({
        id: 0,
        title: '',
        storyline: '',
        duration: '',
        poster_url: '',
        trailer_url: '',
        wiki_url: '',
        release_date: '',
        censor_board_rating: '',
        critics_rating: 8.0,
        status: '',
      });
      this.props.history.push("/");
  }

  render() {
      const { title, storyline, duration, poster_url, trailer_url, wiki_url, release_date, censor_board_rating, critics_rating, status} = this.state;
    return (
      <div>
        <Header />
        <div className='back'>
          <Typography onClick={this.backToHomeHandler}>
            &#60;&#60; Back to Home
          </Typography>
          <form
            className='update-form'
            onSubmit={this.onFromSubmitted.bind(this)}
          >
            <label htmlFor='title' className='label-control'>
              Title:
            </label>
            <input
              id='title'
              type='text'
              className='input-control'
              name='title'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='storyline' className='label-control'>
              StoryLine:
            </label>
            <input
              id='storyline'
              type='text'
              className='input-control'
              name='storyline'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='duration' className='label-control'>
              Duration:
            </label>
            <input
              id='duration'
              type='number'
              className='input-control'
              name='duration'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='poster_url' className='label-control'>
              Poster_Url:
            </label>
            <input
              id='poster_url'
              type='text'
              className='input-control'
              name='poster_url'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='trailer_url' className='label-control'>
              Trailer_Url:
            </label>
            <input
              id='trailer_url'
              type='text'
              className='input-control'
              name='trailer_url'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='wiki_url' className='label-control'>
              Wiki_Url:
            </label>
            <input
              id='wiki_url'
              type='text'
              className='input-control'
              name='wiki_url'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='release_date' className='label-control'>
              Release Date:
            </label>
            <input
              id='release_date'
              type='date'
              className='input-control'
              name='release_date'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='censor_board_rating' className='label-control'>
              Censor Board Rating:
            </label>
            <input
              id='censor_board_rating'
              type='text'
              className='input-control'
              name='censor_board_rating'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='critics_rating' className='label-control'>
              Critics Rating:
            </label>
            <input
              id='critics_rating'
              type='number'
              className='input-control'
              name='critics_rating'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />
            <label htmlFor='status' className='label-control'>
              Status:
            </label>
            <input
              id='status'
              type='text'
              className='input-control'
              name='status'
              onChange={this.inputChangeHandler}
            />
            <br />
            <br />

            <div className='article-info-container'>
              <span className='article-to-add-heading'>
                Article to be added:{' '}
              </span>
              <br />
              <span className='article-info'>Title: {title}</span>
              <br />
              <span className='article-info'>StoryLine: {storyline}</span>
              <br />
              <span className='article-info'>Duration: {duration}</span>
              <br />
              <span className='article-info'>Poster_Url: {poster_url}</span>
              <br />
              <span className='article-info'>Trailer_Url: {trailer_url}</span>
              <br />
              <span className='article-info'>Wiki_Url: {wiki_url}</span>
              <br />
              <span className='article-info'>Release Date: {release_date}</span>
              <br />
              <span className='article-info'>
                Censor Board Rating: {censor_board_rating}
              </span>
              <br />
              <span className='article-info'>
                Critics Rating: {critics_rating}
              </span>
              <br />
              <span className='article-info'>Status: {status}</span>
              <br />              
            </div>
            <button type="submit" className="custom-btn add-btn">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Update;
