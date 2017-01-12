/**
 * Created by IvanP on 11.01.2017.
  */
import React from 'react';
import ReactDOM from 'react-dom';
import mainCSS from './main.css';
import GridTile from './ImageGridTile/ImageGridTile';

class RReactVideo extends React.Component {
  constructor(props){
    super(props);
    this.onSelect=this.onSelect.bind(this);
    this.state = {
      items:[]
    }
  }
  render() {
    return (
      <div className="image-list-grid">
        {this.state.items.map((item,index)=>(
          <GridTile
            key={item.uid.toString()}
            aspect="4:3"
            image={item.image}
            mediatype={item.mediatype}
            title={item.title}
            description={item.description}
            actionIcon={this.constructor.actionIcon()}
            onSelect={this.onSelect}
          />
        ))}
      </div>
    )
  }

  onSelect(e){
    console.log(e)
  }

  componentDidMount(){
    this.setState({
      items:[
        {
          uid:1,
          image:"http://kenteriksen.com/wp-content/uploads/Kyle-Link-27.5-Plus-02.jpg",
          mediatype:'image',
          title:'Hello',
          description:'World',
        },
        {
          uid:2,
          image:"https://i.ytimg.com/vi/xYwZ5Egjlc0/maxresdefault.jpg",
          mediatype:'video',
          title:'Hello1',
          description:'World1'
        },
        {
          uid:3,
          image:"",
          mediatype:'audio',
          title:'Hello2',
          description:'World2'
        },
      ]
    });

  }

  static actionIcon(){
    return  <svg className="icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
  }
}

export default RReactVideo;


ReactDOM.render(<RReactVideo />,document.getElementById('root'));
