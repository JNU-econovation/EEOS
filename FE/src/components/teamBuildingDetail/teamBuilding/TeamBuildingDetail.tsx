import MarkdownViewer from "@/components/common/markdown/MarkdownViewer";

interface TeamBuildingDetailProps {
  content: string;
}

const TeamBuildingDetail = ({ content }: TeamBuildingDetailProps) => {
  return <MarkdownViewer value={content} />;
};

export default TeamBuildingDetail;
