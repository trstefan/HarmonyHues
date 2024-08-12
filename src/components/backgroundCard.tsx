import React from "react";
import ReactDOMServer from "react-dom/server";
import { toast } from "sonner";

type BackgroundCardProps = {
  children: React.ReactElement;
  theme: "light" | "dark";
  setPreview: (preview: React.ReactElement) => void;
  setTheme: (theme: "light" | "dark") => void;
};

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  children,
  setPreview,
  theme,
  setTheme,
}) => {
  const getCode = () => {
    const code = ReactDOMServer.renderToString(children);

    navigator.clipboard.writeText(code);
    toast.success("Code copied successfully to clipboard!");
  };

  return (
    <>
      <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <div className="absolute left-4 top-4 z-10 cursor-pointer">
          <div className="flex flex-row gap-4">
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={() => {
                setPreview(children);
                setTheme(theme);
              }}
            >
              preview
            </div>
            <div
              className="rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white"
              onClick={getCode}
            >
              copy code
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default BackgroundCard;
