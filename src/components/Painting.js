
import { useState } from 'react';

export default function Painting(props) {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };
        
  return (
        <div className="painting">
            <img 
                src={isHovered ? `../../images/${props.item.photoName}` : `../../images/${props.item.paintingName}`}
                alt={props.item.text}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                className="painting-image" 
            />

        </div>
    )
}
