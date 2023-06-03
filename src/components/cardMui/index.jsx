import './index.css'
import Image from 'mui-image'
import Seal from '../seal'
import Stamp from '../stamp'
import SealEagle2Red from '../seal/img/stampEagle2Red.svg'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Container, Stack, TableContainer } from '@mui/material'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export function CardMui({ user }) {
    const [expanded, setExpanded] = React.useState(false);
    const { studentName, department, imgSrc, message, date, sender } = user;
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card mx={{ minWidth: 400, height: 500, maxWidth: 400, minHeight:500}}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
        <div className="addressee">
            <div className="studentName">{studentName}</div>
            <div className="department">{department}</div>
        </div>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
        <div className="imageFrame">
            <div className="stamp">
                <Image src={imgSrc} alt="image" duration={0} />
            </div>
        </div>
        </Box>
        <Box sx={{
              height: 30
            }}>
              <Seal imgSrc={SealEagle2Red}/>
        </Box>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
            <Typography paragraph>
                <div className="message">
                    <div className="content">{message}</div>
                    <div className="sender">{date +  " - " + sender}</div>
                </div>
            </Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    );
  }



function Card2({ user }) {
    const { studentName, department, imgSrc, message, date, sender } = user
    return (
    <div className="card">
    <div className="addressee">
        <div className="studentName">{studentName}</div>
        <div className="department">{department}</div>
    </div>
    <div className="imageFrame">
        <div className="stamp">
        <Image src={imgSrc} alt="image" duration={0} />
        </div>
    </div>
    <Seal imgSrc={SealEagle2Red}/>
    <div className="message">
        <div className="content">{message}</div>
        <div className="sender">{date +  " - " + sender}</div>
    </div>
    </div>
    )
}
