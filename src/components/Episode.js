import React from "react";

function Episode(props) {
  let { episode } = props;
  console.log(episode)
  return (
    <div>
      Episode {episode.number} - {episode.name}
    </div>
  );
}

export default Episode;
