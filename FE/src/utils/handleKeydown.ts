export const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = e.currentTarget.selectionStart;
    const end = e.currentTarget.selectionEnd;
    const target = e.currentTarget;
    const value = target.value;
    target.value = value.substring(0, start) + "  " + value.substring(end);
    target.selectionStart = target.selectionEnd = start + 2;
  }
};
