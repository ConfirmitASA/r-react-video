import React from 'react';
import ImageGridTile from '../ImageGridTile/ImageGridTile';


class ImageGrid extends React.Component {
  /**
   * `ImageGrid` is a stateless React component that allows to compute an array of ImageGridTiles from `items` passed in props
   * @param {Object} props
   * @param {Array} props.items - an array of items `{id:Number|String, image:String, mediatype:?String, placeholder:?String, title:String,description:String}`
   * @param {Array} props.aspect - aspect ratio for the ImageGridTile image
   * @param {JSX} props.actionIcon - action icon JSX with a bound handler
   * @param {?String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
   * @param {Function} props.onSelect - function that is executed when an item is clicked on
   * */
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="ImageGrid">
        {
          this.props.items.map((item,index)=>(
            <ImageGridTile
              key={item.id.toString()}
              aspect={this.props.aspect}
              image={item.image}
              mediatype={item.mediatype}
              placeholder={item.placeholder}
              placeholderSizing={this.props.placeholderSizing}
              title={item.title}
              description={item.description}
              actionIcon={this.props.actionIcon}
              onSelect={e=>this.props.onSelect.call(this,item)}
            />
          ))
        }
      </div>
    )
  }
}

export default ImageGrid;
