import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"; 
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    state={videos: [], selectedVideo:null};


    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit=async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        console.log(response)
        this.setState({
            videos:response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
        console.log(video);
        
    }
    
  


    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                            I have {this.state.videos.length} videos
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;