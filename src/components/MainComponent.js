import React from "react";
import Navbar from "./Navbar";
import Overlay from "./Overlay";
import PageLoader from "./PageLoader";
import Sidebar from "./Sidebar";
import HomeComponent from "./HomeComponent";
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component{
    state={
        bodyClass: "theme-red ls-closed",
        dispalyOverlay: "none",
    };
    onBarClick=()=>{
        if(this.state.bodyClass=="theme-red ls-closed overlay-open"){
            this.setState({bodyClass: "theme-red ls-closed"});
            this.setState({dispalyOverlay: "none"});
        }
        else if(this.state.bodyClass=="theme-red ls-closed")
        {
            this.setState({bodyClass: "theme-red ls-closed overlay-open"});
            this.setState({dispalyOverlay: "block"});
        }
        
    };

    render(){
        if(window.screen.width>1150){
            document.getElementById("root").className="theme-red";
        }
        else{
            document.getElementById("root").className=this.state.bodyClass;
        }
        
        return (
            
            <React.Fragment>
                <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Roboto',
                        weights: [400, '700'],
                        }
                    ]}
                    subsets={['cyrillic-ext', 'latin']}
                />
                <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Material+Icons'
                        }
                    ]}
                />
                <Overlay display={this.state.dispalyOverlay} />
                <Navbar onBarClick={this.onBarClick}/>
                <Sidebar/>
                <HomeComponent/>
            

            </React.Fragment>
        );

    }
    
}

export default MainComponent;