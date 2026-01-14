import { useEffect, useState } from "react";

import "./App.css";
import { useMouse } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";

function App() {
  const { x, ref } = useMouse();
  const [left, setLeft] = useState(0);
  // const throttledMouse = useThrottledValue(mouse, 100);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLeft(0 - Math.max(Math.round(159 * ((720 - x) / 1280)) * 1280, 0));
  }, [x]);

  return (
    <MantineProvider>
      <div
        id="img-container"
        ref={ref}
      >
        <div
          id="images"
          style={{ display: "block", position: "absolute", left: `${left}px` }}
        >
          <img
            src="pano1.jpg"
            className="koryimage"
            id="koryimage1"
            width={51200}
            height={720}
          />
          <img
            src="pano2.jpg"
            className="koryimage"
            id="koryimage2"
            width={51200}
            height={720}
          />
          <img
            src="pano3.jpg"
            className="koryimage"
            id="koryimage3"
            width={51200}
            height={720}
          />
          <img
            src="pano4.jpg"
            className="koryimage"
            id="koryimage4"
            width={49920}
            height={720}
          />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
