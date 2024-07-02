import React, { useState, Fragment } from "react";

const captions = [
  "Conquering new heights. 🏔️✨ #MountainViews #AdventureAwaits #NatureLovers",
  "The mountains are calling, and I must go. 🌄📞 #Mountains #Wanderlust #GetOutside",
  "Adventure awaits at every peak. 🏞️🚶‍♂️ #ExploreMore #HikingAdventures #TravelDiaries",
  "Take me to the mountains. 🏕️🗻 #MountainLife #NatureTherapy #FindYourPeak",
  "Where the earth meets the sky. ⛰️☁️ #ScenicViews #NatureAtItsBest #SkyHigh",
];

const CaptionList = () => {
  return (
    <div className="mt-2">
      {captions.map((caption, index) => (
        <li
          key={index}
          className="text-sm text-gray-500 dark:text-gray-300 mb-2"
        >
          {caption}
        </li>
      ))}
    </div>
  );
};

export default CaptionList;
