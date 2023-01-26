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
    width:"1000px",
    height:'430px',
    marginLeft:'430px',
    marginTop:"140px",
    borderRadius:'0',
    border:'1px solid white',
    backgroundColor:"black",
    color:"white"
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
    marginTop:'20px',
    marginBottom:"20px",
    borderRadius:'0px',
    color:"white"
  },
  buttonSubmit: {
    marginBottom: 5,
    borderRadius:'0px'
  },
  inputs: {
    height:'48px',
    backgroundColor:"white"

  },

formButton: { 
  height:"100%"
},
  buttonSubmit:{
    height:"60px",
    marginTop:"10px",
    border:"1px solid white"
  }
}));
