import { useEffect } from "react";
export const UseClickAnimation = (element, config) => {
    const {
        size= 100,
        color= "#fff",
        duration = 800

    } = config
    useEffect(() => {
        const applyContainerPropperties = () => {
          element.current.classList.add('effect-container')
        }
        const applyStyle = (e) => {
          const {offsetX, offsetY} = e;
          const {style} = element.current;
          const sizeOffset = 50;
    
          style.setProperty("--effect-top", `${offsetY-sizeOffset}px`);
          style.setProperty("--effect-left", `${offsetX -sizeOffset}px`);
          style.setProperty("--effect-height", `${size}px`);
          style.setProperty("--effect-width", `${size}px`);
          style.setProperty("--effect-color", `${color}`);
          style.setProperty("--effect-duration", `${duration}ms`);
        }
        const onClick = (e) => {
          element.current.classList.remove("active");
          applyStyle(e)
          setTimeout(() => {
    
            element.current.classList.add("active");
          }, 1)
        }
        applyContainerPropperties();
        // add event listener
        element.current.addEventListener("mouseup", onClick);
    
        // Needed for referencing the ref in the return function
        const cleanupRef = element.current
        return () => {
          cleanupRef.removeEventListener("mouseup", onClick)
        }
      }, [color, duration, element, size])
}
 
     