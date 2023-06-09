import { useState } from "react";



let initialShapes = [
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: "square", x: 150, y: 100 },
    { id: 2, type: "circle", x: 250, y: 100 },
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick() {
        const nextShapes = shapes.map((shape) => {
            if (shape.type === "square") {
                // No change
                return shape;
            } else {
                let newY = shape.y + 50;
                if (newY > 340) {
                    // limite que os circulos podem se movimentar dentro do card
                    newY = 340;
                }
                return {
                    ...shape,
                    y: newY,
                };
            }
        });
        setShapes(nextShapes);
    }

    return (
        <div className="cardShapeEditor">
            <button className="botaoShape" onClick={handleClick}>
                Move circles down!
            </button>
            <div className="shapeContainer">
                {shapes.map((shape) => (
                    <div
                        key={shape.id}
                        className={`shape ${shape.type}`}
                        style={{
                            left: shape.x,
                            top: shape.y,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
