import React, { useState } from "react";
import { Image } from "antd";

function ImagesDisplay({ imageUrls }) {
    // State to track the currently displayed image
    const [imageNow, setImageNow] = useState(imageUrls.length ? imageUrls[0] : "");
    // State to track the hovered thumbnail
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={{ display: "flex", width: 620 }}>
            {/* Left Thumbnails with Scrollable Container */}
            <div style={{ width: 112, height: 504, borderRadius: 5, overflowY: "auto",padding:"2px 10px 2px 2px" }} >
                {
                    imageUrls.map((url, index) => (
                        <Image
                            key={index}
                            style={{
                                width: 92,
                                height: 92,
                                borderRadius: 5,
                                margin:index?"10px 4px 0 4px":"0 4px 0 4px",
                                cursor: "pointer",
                                objectFit: "cover",
                                outline: hoveredIndex === index ? "2px solid red" : "none",//outline does not affect the box model, meaning it will not shrink the content inside the element.
                                //The outline is drawn outside the element, so the image remains the same size.
                                //border: hoveredIndex === index ? "2px solid red" : "none"  // Apply red border on hover
                            }}
                            src={url}
                            preview={false} // Disable image preview
                            onMouseEnter={() => {
                                setImageNow(url);
                                setHoveredIndex(index);  // Set the hovered image
                            }}
                        />
                    ))
                }
            </div>

            {/* Right large image display */}
            <div style={{marginLeft:10}}>
                <Image
                    style={{ width: 500, height: 500, borderRadius: 5, objectFit: "cover" }}
                    src={imageNow}
                />
            </div>
        </div>
    );
}

export default ImagesDisplay;
