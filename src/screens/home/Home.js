import React, {Component} from 'react';
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
   
    articleClickHandler = (articleId) => {
        ReactDOM.render(<Details articleId ={articleId}/>, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="articles-list">
                    <List className={useStyles.root}>
                        {articleData.map(article => (
                            <ListItem key={article.id} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar src={article.poster_url} alt={article.title} />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={article.title}
                                    secondary= {
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={useStyles.inline}
                                                color="textPrimary">
                                                Duration (in mins):{article.duration}                                                
                                            </Typography>
                                            <div><b>Story Line:</b> {article.storyline}</div>                                            
                                        </React.Fragment>
                                    }
                                    onClick={()=> this.articleClickHandler(article.id)}>
                                </ListItemText>
                                <Divider variant="inset" component="li" />
                            </ListItem>
                            

                        ))}
                    </List>
                </div>
            </div>
        );

    }
}

export default Home;