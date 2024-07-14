"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Import necessary modules and components
import { setGeneratedCaptions } from "@/Store/actionSelectPreference";
import { fetchCaptions } from "@/utils/captionGenerator";
import { SpeechRecognition } from "dom-speech-recognition";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Language from "./Language";
import { MoodList } from "./MoodList";
declare global {
  interface Window {
    webkitSpeechRecognition: SpeechRecognition;
    SpeechRecognition: SpeechRecognition;
  }
}

// Export the MicrophoneComponent function component
export default function MicrophoneComponent() {
  // State variables to manage recording status, completion, and transcript
  const [isRecording, setIsRecording] = useState(false);
  const [currentTranscript, setTranscript] = useState("");
  const final_transcript = useRef("");
  const [isSupported, setIsSupported] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reference to store the SpeechRecognition instance
  const recognitionRef = useRef<SpeechRecognition>(null);

  // Function to start recording
  const startRecording = () => {
    setIsRecording(true);
    // Create a new SpeechRecognition instance and configure it
    const speechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    if (speechRecognition) {
      recognitionRef.current = new speechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      // Event handler for speech recognition results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognitionRef.current.onresult = (event: any) => {
        let interimResults = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          // Verify if the recognized text is the last with the isFinal property
          if (event.results[i].isFinal) {
            final_transcript.current += event.results[i][0].transcript;
          } else {
            interimResults += event.results[i][0].transcript;
          }
        }
        // Log the recognition results and update the transcript state
        setTranscript(final_transcript.current + interimResults);
        if (textareaRef.current) {
          textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
      };

      // Start the speech recognition
      recognitionRef.current.start();
    }
  };

  // Cleanup effect when the component unmounts
  useEffect(() => {
    if (window.webkitSpeechRecognition || window.SpeechRecognition) {
      setIsSupported(true);
    }
    return () => {
      // Stop the speech recognition if it's active
      if (recognitionRef.current) {
        console.log("stopping...");
        recognitionRef.current.stop();
      }
    };
  }, []);

  // Function to stop recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      // Stop the speech recognition and mark recording as complete
      recognitionRef.current.stop();
    }
  };

  // Toggle recording state and manage recording actions
  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };
  const handleValueChange = (e) => {
    final_transcript.current = e.target.value;
    setTranscript(e.target.value);
  };
  // Render the microphone component with appropriate UI based on recording state
  return (
    <div className="relative flex flex-col gap-5">
      <Textarea
        placeholder="Describe your thoughts...."
        ref={textareaRef}
        maxLength={250}
        value={currentTranscript}
        className="pr-20 resize-none"
        onChange={handleValueChange}
      />
      {isSupported && (
        <Button
          variant={"outline"}
          onClick={handleToggleRecording}
          className="flex justify-center items-center border-2 rounded-full w-[50px] h-[50px] p-0 absolute right-5 top-4"
        >
          {
            <Image
              src={
                isRecording
                  ? "/assets/microphonestop.svg"
                  : "/assets/microphone.svg"
              }
              height={20}
              width={20}
            />
          }
        </Button>
      )}
      <PreferenceList />
      <GenerateCaptionsButton />
    </div>
  );
}

export const PreferenceList = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <MoodList />
      <Language />

      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none border-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Include Hashtags
        </span>
      </label>
    </div>
  );
};

export const GenerateCaptionsButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Button
      className="w-full"
      onClick={() => {
        fetchCaptions(
          "I went to beach with my friends",
          "refreshing",
          "english",
        ).then((data) => {
          const jsonResult = JSON.parse(data.content);
          dispatch(setGeneratedCaptions(jsonResult.captions));
          router.push("/captionize#generated-captions");
          console.log(jsonResult);
        });
      }}
    >
      Generate Captions
    </Button>
  );
};
