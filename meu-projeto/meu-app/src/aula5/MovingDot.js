import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div className="cardMovingDot">
      <h2>Movimente o mouse dentro do card</h2>
      <div
        onPointerMove={(e) => {
          const cardRect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - cardRect.left;
          const y = e.clientY - cardRect.top;

          setPosition({
            x,
            y
          });
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px,${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        ></div>
      </div>
    </div>
  );
}
