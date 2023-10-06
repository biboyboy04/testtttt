import React, { useState, useEffect } from "react";
import {
  loadModel,
  loadTokenizer,
  predict,
} from "../scripts/emotionAnalysis.js";
import { slideEmbed } from "../scripts/utils.js";
import { changePlaylist } from "../scripts/utils.js";

function EmotionPlaylist(storyTexts) {
  const [emotionResult, setEmotionResult] = useState("");
  const [isDown, setIsDown] = useState(false);
  //   const [textInput, setTextInput] = useState("");

  useEffect(() => {
    // Load the model and tokenizer when the component mounts
    async function loadModelAndTokenizer() {
      const model = await loadModel();
      const tokenizer = await loadTokenizer();
      const prediction = predict(storyTexts, model, tokenizer);
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
        <div id="arrowUpDown" onClick={handleSlideEmbed}>
          <i
            id="arrowIcon"
            className={`fa-solid fa-arrow-${isDown ? "up" : "down"} fa-xl`}
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
      </div>
    </div>
  );
}

export default EmotionPlaylist;
