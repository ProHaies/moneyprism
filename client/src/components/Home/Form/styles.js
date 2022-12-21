
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width:'200px',
    height:'308px',
    marginLeft:'10px',
    borderRadius:'0',
    border:'1px solid white',
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius:'0px'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    height:'15px',
    marginTop:'9px',
    borderRadius:'0px'
  },
  buttonSubmit: {
    marginBottom: 5,
    borderRadius:'0px'
  },
  inputs: {
    height:'28px'
  },
  cardPlus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    width:'200px',
    height:'308px',
    marginLeft:'7px',
    fontSize:"50px",
    background:"white",
    color:"black",
    borderRadius:'0',
    border:'1px solid white'
  },

  
}));
