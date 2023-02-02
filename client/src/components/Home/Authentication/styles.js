import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 main: {
    width:'200px',
    display:'flex',
    flexDirection:'row',
    padding:'0px',
    height:'1000px',
    marginTop:"20px"
 },
 appBar: {
   borderRadius: 15,
   margin: '30px 0',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '10px 50px',
 },
 heading: {
   color: 'rgba(0,183,255, 1)',
   textDecoration: 'none',
 },
 image: {
   marginLeft: '15px',
 },
 toolbar: {
   display: 'flex',
   justifyContent: 'flex-end',
   width: '400px',
 },
 profile: {
   display: 'flex',
   justifyContent: 'space-between',
   width: '400px',
   position:"fixed"
 },

 brandContainer: {
   display: 'flex',
   alignItems: 'center',
   position:"fixed"
 },
 purple: {
   backgroundColor:'black',
   color:'white',
   marginLeft:'220px',
   border:'1px solid white',
   position:"fixed",
   cursor:"pointer"
   },
 logout: {
   height:"40px",
   position:"fixed",
   marginLeft:'280px',
   border:'1px solid white',
   backgroundColor:"black",
 },
 button:{
   height:'40px',
   position:"fixed",
   marginLeft:'220px',
   border:'1px solid white',
   backgroundColor:"black"
 }
}));
