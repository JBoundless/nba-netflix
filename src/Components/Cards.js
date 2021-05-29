import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
     <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.sportsmediawatch.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNwb3J0c21lZGlhd2F0Y2guY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE0JTJGMTAlMkZuYmF0bnRsb2dvZmxhdC0zMDB4MzAwLmdpZiZjYWNoZU1hcmtlcj0xNjEwOTk3MzQxLTEwMTg0JnRva2VuPTk4MTA2YWQ2ZjUyOWRlZDQ.q.gif"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nuggets vs Trail Blazers (Game 4)
                  </Typography>
                  <Typography>
                  May 29, 2021; 1PM PST
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://upload.wikimedia.org/wikipedia/en/c/c3/NBA_on_ESPN_logo_2016–present.jpg"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    76ers vs Wizards (Game 3)
                  </Typography>
                  <Typography>
                  May 29, 2021; 4PM PST
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://upload.wikimedia.org/wikipedia/en/c/c3/NBA_on_ESPN_logo_2016–present.jpg"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jazz vs Grizzlies (Game 3)
                  </Typography>
                  <Typography>
                  May 29, 2021; 6:30PM PST
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
  </Grid>
  
  );
}