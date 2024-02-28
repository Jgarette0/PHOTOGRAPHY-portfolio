import { Loader } from "lucide-react";
import React, { useState } from "react";

function ImageWithLoading({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      {!loaded && (
        <div className="loading-screen">
          <p className="loading">
            <Loader color="black" size={27} />
          </p>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: loaded ? "block" : "none" }}
        className="aspect-square object-cover rounded-lg overflow-hidden"
        height={800}
        width={800}
      />
    </div>
  );
}

function Images() {
  return (
    <>
      <div className="container grid gap-6 max-w-full">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
            Founding Anniversary
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Consolatrix College of Toledo City Inc.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 md:p-6">
          <ImageWithLoading src="/images/05.jpg" alt="Photo" />
          <ImageWithLoading src="/images/04.jpg" alt="Photo" />
          <ImageWithLoading src="/images/03.jpg" alt="Photo" />
          <ImageWithLoading src="/images/01.jpg" alt="Photo" />
          <ImageWithLoading src="/images/07.jpg" alt="Photo" />
          <ImageWithLoading src="/images/08.jpg" alt="Photo" />
          <ImageWithLoading src="/images/02.jpg" alt="Photo" />
          <ImageWithLoading src="/images/06.jpg" alt="Photo" />
        </div>
      </div>
    </>
  );
}

export default Images;
