"use client";

import "./markdown-editor.styles.css";
import { useState } from "react";
import Tab from "../tabs/Tab";
import MarkdownViewer from "./MarkdownViewer";
import { TabOption } from "@/types/tab";
import { handleKeydown } from "@/utils/handleKeydown";

interface MarkdownEditorProps {
  id: string;
  value: string;
  onChange: (value?: string) => void;
  label: string;
  placeholder: string;
}
type MarkdownViewType = "write" | "preview";
type MarkdownEditorTabProps = {
  [key in MarkdownViewType]: TabOption<MarkdownViewType>;
};

const EDITOR_TAB: MarkdownEditorTabProps = {
  write: {
    text: "작성하기",
    type: "write",
  },
  preview: {
    text: "미리보기",
    type: "preview",
  },
};

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
        <Tab<MarkdownViewType>
          options={Object.values(EDITOR_TAB)}
          selected={viewType}
          onItemClick={(v) => setViewType(v)}
          size="sm"
          baseColor="white"
          pointColor="navy"
          align="line"
        />
        {viewType === "write" ? (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-[32rem] w-full resize-none overflow-y-scroll bg-background p-4 outline-none scrollbar-hide"
            placeholder={placeholder}
            onKeyDown={handleKeydown}
          />
        ) : (
          <MarkdownViewer value={value} height="fix" />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
