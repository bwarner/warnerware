import { RawCode, Pre, highlight } from "codehike/code";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark");
  return (
    <Pre
      code={highlighted}
      className="my-6 overflow-x-auto rounded-lg p-4 text-sm"
      style={highlighted.style}
    />
  );
}
