import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    width:'200px',
    borderRadius:'4px',
    border:'1px solid white',
    color:'black',
    background: "white",
   
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color:'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',

       color:'tan'
  },
  grid: {
    color:'white'
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color:'black'
  },
  title: {
    padding: '0 16px',
    color:'black'
  },
  cardActions: {
   cursor:"pointer",
   color:'white',
  },
});
