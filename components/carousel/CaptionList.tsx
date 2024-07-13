import React from "react";

const CaptionList = () => {
  const captions = [
    "𝐼 𝑔𝑜 𝓉𝑜 𝓈𝑒𝑒𝓀 𝒶 𝑔𝓇𝑒𝒶𝓉 𝓅𝑒𝓇𝒽𝒶𝓅𝓈.🏔️✨ #MountainViews #AdventureAwaits #NatureLovers",
    "ᴛʜᴇ ᴍᴏᴜɴᴛᴀɪɴs ᴀʀᴇ ᴄᴀʟʟɪɴɢ, ᴀɴᴅ ɪ ᴍᴜsᴛ ɢᴏ. 🌄📞 #Mountains #Wanderlust #GetOutside",
    "𝐀𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞 𝐚𝐰𝐚𝐢𝐭𝐬 𝐚𝐭 𝐞𝐯𝐞𝐫𝐲 𝐩𝐞𝐚𝐤. 🏞️🚶‍♂️ #ExploreMore #HikingAdventures #TravelDiaries",
    "𝕋𝕒𝕜𝕖 𝕞𝕖 𝕥𝕠 𝕥𝕙𝕖 𝕞𝕠𝕦𝕟𝕥𝕒𝕚𝕟𝕤. 🏕️🗻 #MountainLife #NatureTherapy #FindYourPeak",
    "𝓦𝓱𝓮𝓻𝓮 𝓽𝓱𝓮 𝓮𝓪𝓻𝓽𝓱 𝓶𝓮𝓮𝓽𝓼 𝓽𝓱𝓮 𝓼𝓴𝔂. ⛰️☁️ #ScenicViews #NatureAtItsBest #SkyHigh",
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  return (
    <div className="mt-2 px-4 sm:px-6 lg:px-8">
      <ul className="space-y-4">
        {captions.map((caption, index) => {
          const text = caption.replace(/#\w+/g, "").trim();
          const hashtags = caption.match(/#\w+/g);

          return (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg text-gray-900 dark:text-gray-300"
            >
              <div className="w-full sm:w-auto flex-1">
                <div className="font-sans mb-2 sm:mb-0">{text}</div>
                <div className="flex flex-wrap">
                  {hashtags &&
                    hashtags.map((hashtag, i) => (
                      <span key={i} className="text-blue-500 mr-2">
                        {hashtag}
                      </span>
                    ))}
                </div>
              </div>
              <button
                className="p-2 mt-2 sm:mt-0 sm:ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => copyToClipboard(caption)}
              >
                <svg
                  className="w-5 h-5 text-gray-900 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="5" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CaptionList;
