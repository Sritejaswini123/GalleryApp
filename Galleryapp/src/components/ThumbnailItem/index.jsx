import  { useState } from 'react';
import './index.css';

const ThumbnailItem = (props) => {
  const { imageDetails, setActiveThumbnailId } = props;
  const { thumbnailUrl, thumbnailAltText, id } = imageDetails;

  const [isActive, setIsActive] = useState(false);

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail';

  const onClickThumbnail = () => {
    setIsActive(!isActive);
    setActiveThumbnailId(id);
  };

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  );
};

export default ThumbnailItem;
