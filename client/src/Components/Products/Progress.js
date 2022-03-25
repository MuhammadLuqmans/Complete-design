import * as React from 'react';
import { Box } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme)=>({
    progress_Bar:{
    '& .MuiLinearProgress-barColorPrimary':{
        backgroundColor:'red',
        
    }
}
}))

export default function LinearDeterminate({value}) {
    const classes = myStyles()
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 1 * value;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }} className={classes.progress_Bar}>
      <LinearProgress variant="determinate"  value={progress}/>
    </Box>
  );
}
