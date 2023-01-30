import { StyleSheet, Text, View,Image ,ImageBackground,TouchableOpacity} from 'react-native';
import "@fontsource/poppins";


export default function App() {
  return (
      <ImageBackground source={'https://mobimg.b-cdn.net/v3/fetch/44/44b208e04a532e7077071d32baebf666.jpeg'}  style={styles.image}>
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <Image style={styles.img} resizeMode="cover" source={require("./assets/img.jpg")}/>
        <View style={styles.heading}>Find Your Dream Date here. </View>
        <View style={styles.content}> Dating is a numbers game and online dating has the best odds. </View>

        <View style={ styles.btnconatiner}>
          <TouchableOpacity  style={styles.btncomp}>
                  <Text style={styles.forFont}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btncomp} >
                  <Text style={styles.forFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderRadius:'7px',
    color:'white',
    backdropFilter:'blur(10px)',
    display:'flex',
    height:'80%',
    width:'75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    top:'-5%',
    width:'80%',
    fontSize:'6vw',
    textAlign:'center',
    fontFamily: "Poppins"
  },
  content:{
    top:'-2%',
    width:'90%',
    fontSize:'3.5vw',
    textAlign:'center',
    fontFamily: "Poppins"
  },
  img:{
    top:'-7%',
    height:'50%',
    width:'90%',
    aspectRatio:'1',
    borderRadius:'20px',
    display:'flex',
    alignItems:'stretch'
  },
  
  image: {
    flex: 1,
    height:'100%',
    width:'100%',
    
  },
  btnconatiner:{
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width:'85%',
    alignItems:'center',
    height:"10%",
    justifyContent:'space-evenly',
    textAlign:'center',
    borderRadius:'8px',
    bottom:'-40px',
    borderRadius:'10px',
  }
  ,
  btncomp:{
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    border:'0.5px solid rgba(255 ,255 ,255 , 0.7)',
    width:'47%',
    height:'80%',
    borderRadius:'7px',
  },
  forFont:{
    fontSize:'11px',
    color:'rgba(255 ,255 ,255 , 0.7)',
    fontFamily: "Poppins"
  }

});
