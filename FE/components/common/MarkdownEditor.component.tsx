import MDEditor from "@uiw/react-md-editor";
import "./styles/markdown-editor.styles.css";

interface MarkdownEditorProps {
  id: string;
  value: string;
  onChange: (value?: string) => void;
  label: string;
}

const MarkdownEditor = ({
  id,
  value,
  onChange,
  label,
}: MarkdownEditorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <MDEditor
        id={id}
        value={value}
        onChange={onChange}
        hideToolbar={true}
        visiableDragbar={false}
        height={400}
      />
    </div>
  );
};
export default MarkdownEditor;
