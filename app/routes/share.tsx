import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
const ogimage = "/ogimage.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Madesh 🤍 Keerthana - 23.06.2026" },
    { description: "You're invited to the wedding of Madesh & Keerthana on 23 June 2026." },
    { "og:title": "Madesh 🤍 Keerthana - 23.06.2026" },
    { "og:description": "You're invited to the wedding of Madesh & Keerthana on 23 June 2026." },
    { "og:image": ogimage },
    { "og:image:type": "image/jpeg" },
    { "og:type": "website" },
    { "og:site_name": "madesh-keerthana" },
    { "twitter:card": "summary_large_image" },
    { "twitter:title": "Madesh 🤍 Keerthana - 23.06.2026" },
    { "twitter:description": "You're invited to the wedding of Madesh & Keerthana on 23 June 2026." },
    { "twitter:image": ogimage },
  ];
};

export default function Share() {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  const baseUrl =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}`
      : "";

  const generatedLink = name.trim()
    ? `${baseUrl}/?to=${encodeURIComponent(name.trim())}`
    : "";

  const copyLink = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background-2 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-amsterdam text-gray-700 mb-6 text-center" style={{ lineHeight: "1.4" }}>
          Madesh & Keerthana
        </h1>
        <p className="text-center text-gray-400 font-sans text-sm mb-8">
          Generate a personalised invitation link
        </p>

        <label className="block font-sans text-sm font-medium text-gray-600 mb-2">
          Guest Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Mr. John Doe"
          className="w-full bg-[#f8fafc] rounded-lg border px-4 py-3 mb-6 outline-[#CE7BB0] font-sans text-gray-700"
        />

        {generatedLink && (
          <div className="mb-6">
            <label className="block font-sans text-sm font-medium text-gray-600 mb-2">
              Invitation Link
            </label>
            <div className="flex items-center gap-2 bg-[#f8fafc] border rounded-lg px-4 py-3">
              <span className="font-sans text-gray-600 text-sm truncate flex-1">
                {generatedLink}
              </span>
              <button
                onClick={copyLink}
                className="flex-shrink-0 px-3 py-1 text-sm font-semibold rounded-md bg-contrast hover:bg-contrast-2 text-white transition-all"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}

        {generatedLink && (
          <a
            href={generatedLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full px-6 py-3 font-sans font-semibold rounded-lg bg-contrast hover:bg-contrast-2 text-white transition-all"
          >
            Preview Invitation
          </a>
        )}

        {!name.trim() && (
          <p className="text-center text-gray-400 font-sans text-xs mt-4">
            Type a guest name above to generate their link
          </p>
        )}
      </div>
    </div>
  );
}
