"use client";

import "./styles/markdown-editor.styles.css";
import MarkdownViewer from "./MarkdownViewer.component";

interface MarkdownEditorProps {
  id: string;
  value: string;
  onChange: (value?: string) => void;
  label: string;
  placeholder: string;
}

const MarkdownEditor = ({
  id,
  value,
  onChange,
  label,
  placeholder,
}: MarkdownEditorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="grid h-96 w-full grid-cols-[1fr_0fr] rounded-md border border-gray-300 p-2 transition-transform lg:grid-cols-[1fr_1fr]">
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-full resize-none overflow-y-scroll border-r border-gray-300 p-4 outline-none"
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              const start = e.currentTarget.selectionStart;
              const end = e.currentTarget.selectionEnd;
              const target = e.currentTarget;
              const value = target.value;
              target.value =
                value.substring(0, start) + "  " + value.substring(end);
              target.selectionStart = target.selectionEnd = start + 2;
            }
          }}
        />
        <MarkdownViewer value={value} className="hidden lg:block" />
      </div>
    </div>
  );
};
export default MarkdownEditor;
