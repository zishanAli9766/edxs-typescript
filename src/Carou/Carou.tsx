import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";


const useStyle = makeStyles({
    image:{
        width:"100%",
        height:280
    },
    carousel:{
        marginTop:5,
    }
   
})



const Carou : FC = (props : any) =>{
    const classes = useStyle()
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return(
       
        // <Carousel className={classes.carousel} 
        // autoPlay={true} animation="slide" indicators={false} navButtonsAlwaysVisible={true}
        // cycleNavigation={true} navButtonsProps={{
        //     style:{
        //         background:"#FFFFFF",
        //         color:"#494949",
        //         borderRadius: 0,
        //         margin: 0,
        //         width: 50,
        //     }
        // }}
        // >
        //     <img src="logo12.png" className={classes.image} alt="" />
        //     <img src="logo512.png" className={classes.image} alt="" />
        //     <img src="logo12.png" className={classes.image} alt="" />
        // </Carousel>
        <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
  
    )
}

export default Carou

function Item(props : any)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}