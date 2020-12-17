import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import articleData from '../../assets/articleData';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Details from '../details/Details';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import './Home.css';
import Update from '../update/Update';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

class Home extends Component {
  constructor() {
    super();
    this.state = {
      article: [...articleData],
    };
    console.log(this.state.article);
  }

  articleClickHandler = (articleId) => {
    ReactDOM.render(
      <Details articleId={articleId} />,
      document.getElementById('root')
    );
  };

  addArticleHandler = (newArticle) => {
      let articleList = this.state.article;
      if (articleList.length > 0) {
          newArticle.id = articleList[articleList.length - 1].id + 1;
      } else {
          newArticle.id = 1;
      }
      articleList.push(newArticle);
      this.setState({ article: articleList});
  }

  updateArticleHandler = () => {
      ReactDOM.render(<Update addArticleHandler={this.addArticleHandler}/>, document.getElementById('root') );
  }


  deleteArticleHandler = (articleId) => {
    let articleList = this.state.article;
    console.log(articleList);
    let articleIndex = 0;
    articleList.forEach(function (article, index) {
      if (article.id === articleId) {
        articleIndex = index;
      }
    }, this);
    let newArticles = articleList;
    newArticles.splice(articleIndex, 1);
    this.setState({ article: newArticles });
  };

  render() {
    return (
      <div>
        <Header />
        <div className='articles-list'>
            <div className="update-Button">
                 <Button variant="contained" color="primary" onClick={this.updateArticleHandler}> UPDATE ARTICLES </Button>
            </div><br/><br/>   
            <div>       
          <List className={useStyles.root}>
          
            {this.state.article.map((article) => (
              <ListItem key={article.id} alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar src={article.poster_url} alt={article.title} />
                </ListItemAvatar>
                <div>
                <Link to="/details">
                <ListItemText
                  primary={article.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={useStyles.inline}
                        color='textPrimary'
                      >
                        Duration (in mins):{article.duration}
                      </Typography>
                      <div>
                        <b>Story Line:</b> {article.storyline}
                      </div>
                    </React.Fragment>
                  }
                  onClick={() => this.articleClickHandler(article.id)}
                ></ListItemText>
                </Link>
                </div>

                <ListItemSecondaryAction>
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => this.deleteArticleHandler(article.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                <Divider variant='inset' component='li' />
              </ListItem>
            ))}
           
          </List>
          </div>  
        </div>
      </div>
    );
  }
}

export default Home;
