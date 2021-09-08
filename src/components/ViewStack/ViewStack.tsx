import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  ViewStack: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    '& > *': {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 0,
    },
  },
});

interface ViewStackProps {
  children: React.ReactNode;
}

export default function ViewStack({ children }: ViewStackProps) {
  const classes = useStyles();

  return <div className={classes.ViewStack}>{children}</div>;
}
