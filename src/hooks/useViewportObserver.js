import { useRef, useEffect, useState } from 'react';

// Custom hook to observe the viewport and track the currently visible element
const useViewportObserver = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set the current element when it enters the viewport
            setCurrentElement(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.7 } // Customize options as needed
    );

    // Observe all elements with a specific class (you can customize this)
    const elementsToObserve = document.querySelectorAll('.observe-me');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    // Save the observer reference for cleanup
    observerRef.current = observer;

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return currentElement;
};

export default useViewportObserver