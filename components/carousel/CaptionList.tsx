import { trendingCaptions } from "@/constants/list";
import { copyToClipboard } from "@/utils/CopyText";
import React from "react";

const CaptionList = () => {
  const captions = trendingCaptions;
  return (
    <div className="mt-2 w-full">
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
