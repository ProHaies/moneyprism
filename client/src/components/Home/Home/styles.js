import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 main: {
    width:'100%',
    marginLeft:'390px',
    alignItems: 'center',
    display:'flex',
 },
 pagination: {
   borderRadius: 4,
   marginTop: '1rem',
padding:"7px",
 width:"874px",
 border:"1px solid white",
 backgroundColor:"black",
 color:"white"
 },
 number : {
backgroundColor:"white",
color:"white"
 },
 appBarSearch: {
   borderRadius: 4,
marginBottom:"80px",
   display: 'block',
   padding: '5px',
   width:"873px",
   height:"140px ",
marginLeft:"0px",
backgroundColor:"black",
border:"1px solid white"
 },
 searchButton: {
  width:"200px",
  height:"60px",
  border:"1px solid white"
 },
 textfield : {
  marginLeft:"13px",
  marginRight:"30px",
  marginBottom:"10px",
  width:"600px",
  border:"1px solid white",
backgroundColor:"white"
 },
 tags:{
  marginRight:"10px",
  marginLeft:"10px",
  border:"1px solid white",
  backgroundColor:"white",
  display:"block"
 }
}));
