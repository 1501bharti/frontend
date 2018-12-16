
/****************************************** Common css ***************************************/
const Styles = theme =>({
    bar:{
        height:86,
        backgroundColor:'#ffff',    
        position: 'fixed',
        top:0,
        [theme.breakpoints.down('lg')]: {
            width:1400,
            height:86,
          },
          [theme.breakpoints.down(1200)]: {
            width:1400,
            height:86,
          },
        
          [theme.breakpoints.down(992)]: {
            width:1400,
            height:86,
          },
        
          [theme.breakpoints.down(768)]: {
            width:1400,
            height:86,
          },
      },

      searchbar:{
        position: 'fixed',
        top:30,
        left:95,
        [theme.breakpoints.down('lg')]: {
            position: 'fixed',
            top:30,
            left:95,
          },
          [theme.breakpoints.down(1200)]: {
            position: 'fixed',
            top:30,
            left:95,
          },
        
          [theme.breakpoints.down(992)]: {
            position: 'fixed',
            top:30,
            left:95,
          },
        
          [theme.breakpoints.down(768)]: {
            position: 'fixed',
            top:30,
            left:95,
          },
      }
      ,
/*************** Tagline***************/    
      text:{
        fontFamily:'Homemade Apple',
        letterSpacing:10,
        marginTop:70,
        marginLeft:390,
        fontSize:16,
        [theme.breakpoints.down('lg')]: {
          marginLeft:390,
          fontSize:16,
        },
        [theme.breakpoints.down('md')]: {
          marginLeft:200,
          fontSize:13,
        },
      
        [theme.breakpoints.down(1024)]: {
          marginLeft:180,
          fontSize:10,
        },
      
        [theme.breakpoints.down(768)]: {
          marginLeft:150,
          fontSize:8,
        },
        [theme.breakpoints.down(600)]: {
          marginLeft:100,
          fontSize:8,
        },
      },

// ************************* Brand grid ****************************************
contdiv:{
  marginLeft:180,
  [theme.breakpoints.down(1500)]: {
    marginLeft:180,
  },
  [theme.breakpoints.down(1400)]: {
    marginLeft:180,
  },

  [theme.breakpoints.down(1300)]: {
    marginLeft:180,
  },

  [theme.breakpoints.down(1024)]: {
    marginLeft:100,
  },

  [theme.breakpoints.down(768)]: {
    marginLeft:50,
  },
  [theme.breakpoints.down(600)]: {
    marginLeft:10,
  },
},
      cont:{
        width:270,
        height:320,
        [theme.breakpoints.down(1500)]: {
          width:270,
          height:320,
        },
        [theme.breakpoints.down(1400)]: {
          width:270,
          height:320,
        },
      
        [theme.breakpoints.down(1300)]: {
          width:250,
          height:300,
        },
 
        [theme.breakpoints.down(1024)]: {
          width:210,
          height:290,
        },
      
        [theme.breakpoints.down(768)]: {
          width:180,
          height:250,
        },
        [theme.breakpoints.down(600)]: {
          width:150,
          height:210,
        },
      },


      ///

      pop:{
        marginLeft:10,
        width:450,
        height:480,
        [theme.breakpoints.down(1500)]: {
          marginLeft:10,
          width:450,
          height:480,
        },
        [theme.breakpoints.down(1400)]: {
          marginLeft:10,
          width:410,
          height:420,
        },
      
        [theme.breakpoints.down(1300)]: {
          marginLeft:10,
          width:380,
          height:420,
        },
 
        [theme.breakpoints.down(1140)]: {
          marginLeft:10,
          width:320,
          height:400,
        },
      
        [theme.breakpoints.down(986)]: {
          marginLeft:10,
          width:280,
          height:360,
        },
        [theme.breakpoints.down(840)]: {
          marginLeft:10,
          width:250,
          height:320,
        },
        [theme.breakpoints.down(750)]: {
          marginLeft:10,
          width:220,
          height:320,
        },
        [theme.breakpoints.down(610)]: {
          marginLeft:10,
          width:180,
          height:220,
        },
        [theme.breakpoints.down(450)]: {
          marginLeft:50,
          width:300,
          height:320,
        },
      },
      popdiv:{
        marginLeft:30,
        [theme.breakpoints.down(1500)]: {
          marginLeft:30,
        },
        [theme.breakpoints.down(1400)]: {
          marginLeft:20,
        },
      
        [theme.breakpoints.down(1300)]: {
          marginLeft:10,
        },
 
        [theme.breakpoints.down(1140)]: {
          marginLeft:10,
        },
      
        [theme.breakpoints.down(986)]: {
          marginLeft:10,
        },
        [theme.breakpoints.down(840)]: {
          marginLeft:10,
        },
        [theme.breakpoints.down(750)]: {
          marginLeft:10,
        },
        [theme.breakpoints.down(610)]: {
          marginLeft:10,
        },
        [theme.breakpoints.down(450)]: {
          marginLeft:50,
        },
      },
 // ************************* Brand grid ****************************************

      text_:{
        fontFamily:'Roboto',
        letterSpacing:15,
        textTransform:"uppercase",
        fontSize:16,
        marginLeft:360,
        [theme.breakpoints.down('lg')]: {
          fontSize:16,
          marginLeft:360,
        },
        [theme.breakpoints.down('md')]: {
          marginLeft:180,
          fontSize:13,
        },
      
        [theme.breakpoints.down(1024)]: {
          marginLeft:160,
          fontSize:10,
        },
      
        [theme.breakpoints.down(768)]: {
          marginLeft:150,
          fontSize:8,
        },
        [theme.breakpoints.down(600)]: {
          marginLeft:80,
          fontSize:8,
        },
      },
/*************** inputText ***************/
      url:{
      
      },

      inputText :{
        height:30,
        width:600,
        fontSize:15,
        letterSpacing:"normal",
        color: "rgb(72, 72, 72)",
        cursor: 'pointer',
        textAlign: 'left',
        position: 'relative',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        background:"rgb(255, 255, 255)",
        padding: "7px 28px",
        overflow: 'hidden',
        outline: 'none',
        borderTopRightRadius:4,
        borderTopLeftRadius:4,
        border: "1px solid rgba(0,0,0,0.12)",
        backgroundColor: "#f2f2f2"
      },
//end 
}
);

export default Styles;