import classNames from "classnames";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import "./markdown-editor.styles.css";

const markdownHeight = {
  full: "h-full",
  fix: "h-[32rem]",
};

const MarkdownViewer = ({
  value,
  className = "",
  height = "full",
}: {
  value: string;
  className?: string;
  height?: "full" | "fix";
}) => {
  const markdownClass = classNames(
    "markdown-body overflox-y-scroll w-full overflow-y-auto bg-background p-4 scrollbar-hide",
    markdownHeight[height],
    className,
  );
  return (
    <Markdown
      className={markdownClass}
      remarkPlugins={[remarkGfm]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code(props: any) {
          const { className, children, inline } = props;
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={materialLight}
              PreTag="div"
              language={match[1]}
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            <code className={className || ""} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {value}
    </Markdown>
  );
};

export default MarkdownViewer;
