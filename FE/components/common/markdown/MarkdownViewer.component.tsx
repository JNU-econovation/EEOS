import classNames from "classnames";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import "../styles/markdown-editor.styles.css";

const MarkdownViewer = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => {
  const markdownClass = classNames(
    "markdown-body h-full overflow-y-auto p-4",
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
