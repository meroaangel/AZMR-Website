import React, { useEffect } from "react";

export default function DownloadDist() {
  useEffect(() => {
    // Create a Blob from the dist folder contents
    const content =
      "This is a placeholder. The actual dist folder would be here.";
    const blob = new Blob([content], { type: "application/zip" });
    const url = window.URL.createObjectURL(blob);

    // Create a link and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "dist.zip";
    document.body.appendChild(a);
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, []);

  return (
    <div className="p-4">
      <h1>Downloading dist folder...</h1>
      <p>
        If the download doesn't start automatically, please contact support.
      </p>
    </div>
  );
}
