import { copyToClipboard } from "@/utils/CopyText";
import { TopCaptionStyles } from "@/utils/TopStyles";
export const StyledCaptions = ({ text }: { text: string }) => {
  const captions = TopCaptionStyles(text);
  return (
    <div className="flex flex-col">
      {captions.map((caption, index) => (
        <div key={index} className="flex items-center justify-between p-4 mb-2">
          <div className="text-lg text-black flex-1 pr-4">{caption}</div>
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
          <button className="bg-neutral-900 text-white py-1 px-2 ml-5 rounded hover:bg-neutral-700">
            Preview
          </button>
        </div>
      ))}
    </div>
  );
};
