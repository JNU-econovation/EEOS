"use client";

import "../styles/markdown-editor.styles.css";
import { useState } from "react";
import MarkdownEditorTab from "./MarkdownEditorTab.component";
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
  const [viewType, setViewType] = useState<"write" | "preview">("write");
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>

      <div className="flex h-fit w-full flex-col gap-2 rounded-md border-2 border-gray-300 bg-gray-10 p-2 transition-transform">
        <MarkdownEditorTab viewType={viewType} setViewType={setViewType} />
        {viewType === "write" && (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="scrollbar-hide h-[32rem] w-full resize-none overflow-y-scroll bg-background p-4 outline-none"
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
        )}
        {viewType === "preview" && (
          <MarkdownViewer
            value={value}
            className="scrollbar-hide h-[32rem] w-full"
          />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
