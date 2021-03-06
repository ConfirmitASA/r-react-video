import React, {PropTypes, PureComponent} from 'react';
import ImageGridTile from '../ImageGridTile';


/**
 * `ImageGrid` is a stateless React component that allows to compute an array of ImageGridTiles from `items` passed in props
 * @param {Object} props
 * @param {Array} props.items - an array of items `{id:Number|String, image:String, mediatype:?String, placeholder:?String, title:String,description:String}`
 * @param {String} props.aspect - aspect ratio for the ImageGridTile image
 * @param {ReactElement} props.actionIcon - action icon JSX with a bound handler
 * @param {?String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
 * @param {Function} props.onSelect - function that is executed when an item is clicked on
 * @param {Number} props.dummyItems - function that is executed when an item is clicked on
 * */
class ImageGrid extends PureComponent {

  itemClickHandler = (item) => (event) => this.props.onSelect(item);
  editItem = item=> this.props.actionIconClick(item)
  render() {
    const {items, dummyItems, aspect, placeholderSizing, actionIcon} = this.props;
    return (
      <div className="ImageGrid">
        {
          Array.isArray(items) && items.length > 0 && items.map(item => (
            <ImageGridTile
              key={item.id.toString()}
              aspect={aspect}
              image={item.image}
              mediatype={item.mediatype}
              placeholder={item.placeholder}
              placeholderSizing={item.image?placeholderSizing:'initial'}
              title={item.title}
              description={item.description}
              actionIcon={typeof actionIcon==='function'?actionIcon(item):null}
              actionIconClick={this.editItem(item)}
              onSelect={this.itemClickHandler(item)}
            />
          ))
        }
        {dummyItems && this.renderDummyItems(dummyItems)}
      </div>
    )
  }


  renderDummyItems(count) {
    const dummyItems = [];
    while (count--) {
      dummyItems.push(<div className="ImageGridTile" key={`dummy${count}`}/>)
    }
    return dummyItems
  }
}

ImageGrid.propTypes = {
  items: PropTypes.array,
  aspect: PropTypes.string,
  actionIcon: PropTypes.element,
  actionIconClick: PropTypes.func,
  placeholderSizing: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  dummyItems: PropTypes.number
};

ImageGrid.defaultProps = {
  dummyItems: 12
};

export default ImageGrid;
