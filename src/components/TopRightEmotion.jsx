import React from "react";

const TopRightEmotion = ({ emotion }) => {
  // Define different texts and image sources based on the emotion
  const emotionTexts = {
    joy: "Joy",
    sadness: "Sad",
    anger: "Anger",
    fear: "Fear",
  };

  const emotionImages = {
    joy: "images/joy.png",
    sadness: "images/sadness.png",
    anger: "images/anger.png",
    fear: "images/fear.png",
  };

  // Set default text and image if the emotion is not recognized
  const defaultText = "Feeling Unknown";
  const defaultImageSrc = "images/unknown.jpg";

  // Get the text and image source based on the emotion
  const text = emotionTexts[emotion] || defaultText;
  const imageSrc = emotionImages[emotion] || defaultImageSrc;
  console.log(emotion);

  return (
    <div className="top-right-container">
      <div className="top-right-analyze">Analyzed Emotion</div>
      <img src={imageSrc} alt="Image" />
      <div className="top-right-text">{text}</div>
    </div>
  );
};

export default TopRightEmotion;
