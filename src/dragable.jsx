import { Rnd} from "react-rnd";
 
 
  
 
 
 const Dragable = ({title,backgroundImage,onAppclick}) => {
 
    
    console.log(backgroundImage)
   return (
     <Rnd default={
        {
            x:30,
            y:100,
            width:100,
            height:100
            
        }
        
     } 
     dragHandleClassName="title">
        <div className="f-app">
         <div className="app-bg" style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100px",
          }}></div>

               
            <p  className="title"  onClick={()=>{
                 onAppclick(title)
            }}> {title}</p>
            </div>
     </Rnd>
   )
 }
 
 export default Dragable