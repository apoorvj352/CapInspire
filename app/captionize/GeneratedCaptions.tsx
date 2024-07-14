import { useSelector } from "react-redux";
import { ListDialog, ListDialogProps } from "@/components/Dialog/ListDialog";
import { StyledCaptions } from "./StyledCaptions";
import { Caption_Strings } from "@/constants/strings";

export const MoreStylesSection = ({ text }: { text: string }) => {
  const listDialogProps: ListDialogProps = {
    label: Caption_Strings.GeneratedCaptionLabel,
    title: Caption_Strings.GeneratedCaptionTitle,
    dialogDescriptionComponent: StyledCaptions,
    dialogDescriptionComponentProps: text,
  };
  return <ListDialog {...listDialogProps} />;
};

export const GeneratedCaption = ({ label }: { label: string }) => {
  return (
    <li className="flex items-center justify-between space-x-4 rounded-md p-4">
      <span>{label}</span>
      <MoreStylesSection text={label} />
    </li>
  );
};
export const GeneratedCaptions = () => {
  const captions = useSelector((state) => state.generatedCaptions);
  return captions.length !== 0 ? (
    <>
      <div
        id="generated-captions"
        defaultValue="option-one"
        className="p-4 bg-white rounded-md max-h-100 border-2 border-black overflow-scroll font-sans"
      >
        {captions.map((data, index) => {
          return <GeneratedCaption label={data.caption} key={index} />;
        })}
      </div>
    </>
  ) : (
    <></>
  );
};
