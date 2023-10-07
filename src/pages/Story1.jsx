import StoryLayout from "../layout/StoryLayout";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import EmotionPlaylist from "../components/SpotifyPlaylist";

// THIS CAN BE DYNAMIC DEPENDING ON WHERE TO GET THE CONTENT, PASS THROUGH THE ID AS A PROP TO GET THE RIGHT CONTENT, IF EVER.
const Story1 = () => {
  //loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="story">
          <StoryLayout>
            <h1>The Frogs & the Ox</h1>
            <p>
              An Ox came down to a reedy pool to drink. As he splashed heavily
              into the water, he crushed a young Frog into the mud. The old Frog
              soon missed the little one and asked his brothers and sisters what
              had become of him. "A great big monster," said one of them,
              "stepped on little brother with one of his huge feet!" "Big, was
              he!" said the old Frog, puffing herself up. "Was he as big as
              this?" "Oh, much bigger!" they cried. The Frog puffed up still
              more. "He could not have been bigger than this," she said. But the
              little Frogs all declared that the monster was much, much bigger
              and the old Frog kept puffing herself out more and more until, all
              at once, she burst.
            </p>
          </StoryLayout>
          <EmotionPlaylist
            storyText={`  An Ox came down to a reedy pool to drink. As he splashed heavily
              into the water, he crushed a young Frog into the mud. The old Frog
              soon missed the little one and asked his brothers and sisters what
              had become of him. "A great big monster," said one of them,
              "stepped on little brother with one of his huge feet!" "Big, was
              he!" said the old Frog, puffing herself up. "Was he as big as
              this?" "Oh, much bigger!" they cried. The Frog puffed up still
              more. "He could not have been bigger than this," she said. But the
              little Frogs all declared that the monster was much, much bigger
              and the old Frog kept puffing herself out more and more until, all
              at once, she burst.`}
          />
        </div>
      )}
    </div>
  );
};

export default Story1;
