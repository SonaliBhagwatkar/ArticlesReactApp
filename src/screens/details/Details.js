import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import articleData from '../../assets/articleData';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import Home from '../home/Home';
import './Details.css';


class Details extends Component {

    constructor() {
        super();
        this.state = {
            article: {},
        }
    }

    UNSAFE_componentWillMount(){
        let currentState = this.state;
        currentState.article = articleData.filter((article) => {
            return article.id === this.props.articleId
        })[0];
        this.setState({currentState});
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home/>, document.getElementById('root'));
    }

    render() {
        let article = this.state.article;
        return(
            <div className="details">
                <Header/>
                <div className="back">
                    <Typography onClick={this.backToHomeHandler}>
                         &#60;&#60; Back to Home
                    </Typography>                
                </div>
                <div className="main-container">
                    <div className="left-section">
                        <img src={article.poster_url}  alt={article.title} width="300" height="400"/>
                    </div>
                    <div className="right-section">
                        <div>
                            <Typography variant="headline" component="h2">{article.title}</Typography>
                        </div>
                        <br/>
                        <div>
                            <Typography><span className="bold">Duration (in mins):</span> {article.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(article.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {article.critics_rating}  </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> storyline:</span> <a href={article.wiki_url}>(Wiki Link)</a> {article.storyline}  </Typography>
                        </div>                  

                    </div>
                </div>
            </div>
        );
    }
}


export default Details;