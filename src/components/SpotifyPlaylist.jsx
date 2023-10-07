import React, { useState, useEffect } from "react";
import {
  loadModel,
  loadTokenizer,
  predict,
} from "../scripts/emotionAnalysis.js";
import { slideEmbed } from "../scripts/utils.js";
import { changePlaylist } from "../scripts/utils.js";
import TopRightEmotion from "./TopRightEmotion.jsx";

function EmotionPlaylist(storyTexts) {
  const [emotionResult, setEmotionResult] = useState("");
  const [isDown, setIsDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track when loading the prediction
  //   const [textInput, setTextInput] = useState("");

  useEffect(() => {
    // Load the model and tokenizer when the component mounts
    async function loadModelAndTokenizer() {
      const model = await loadModel();
      const tokenizer = await loadTokenizer();
      const prediction = await predict(storyTexts, model, tokenizer);
      setIsLoading(false);
      setEmotionResult(prediction);
      console.log(prediction);
      handlePlaylistChange(prediction);
    }
    loadModelAndTokenizer();
  }, [storyTexts]);

  const handleSlideEmbed = () => {
    const spotifyWrapper = document.getElementById("spotifyWrapper");
    const arrowIcon = document.getElementById("arrowIcon");
    slideEmbed(spotifyWrapper, arrowIcon, isDown);
    setIsDown((prevIsDown) => !prevIsDown);
  };

  const handlePlaylistChange = (emotion) => {
    const iframe = document.getElementById("spotifyPlaylist");
    changePlaylist(emotion, iframe);
  };

  const spotifyPlaylistUrl = "";

  return (
    <div className="spotifyContainer">
      <div id="spotifyWrapper" data-is-down={false}>
        {isLoading && (
          <h1 style={{ color: "white", fontFamily: "montserrat" }}>
            {" "}
            Predicting emotion...
          </h1>
        )}
        <div id="arrowUpDown" onClick={handleSlideEmbed}>
          <i
            id="arrowIcon"
            className={`fa-solid fa-arrow-${isDown ? "up" : "down"} fa-xl`}
            style={{ color: "#E1E1E1" }}
          ></i>
        </div>
        <iframe
          id="spotifyPlaylist"
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
          }}
          src={spotifyPlaylistUrl}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* Show the TopRightEmotion component only after the prediction is ready */}
        {!isLoading && emotionResult !== undefined && (
          <TopRightEmotion emotion={emotionResult} />
        )}
      </div>
    </div>
  );
}

export default EmotionPlaylist;
