import { motion } from "framer-motion";

export default function HeapTree({
    array,
    heapSize = array.length,
    currentNode = -1,
    leftChild = -1,
    rightChild = -1,
    sorted = [],
}) {
    const width = 900;
    const levelHeight = 90;
    const topPadding = 40;
    const radius = 24;

    function getPosition(index) {
        const level = Math.floor(Math.log2(index + 1));
        const firstIndexInLevel = Math.pow(2, level) - 1;
        const indexInLevel = index - firstIndexInLevel;
        const nodesInLevel = Math.pow(2, level);

        const horizontalGap = width / (nodesInLevel + 1);

        return {
            x: horizontalGap * (indexInLevel + 1),
            y: topPadding + level * levelHeight,
        };
    }

    return (
        <div className="flex justify-center overflow-x-auto">
            <svg
                width={width}
                height={420}
                viewBox={`0 0 ${width} 420`}
            >
                {/* Edges */}
                {array.map((_, index) => {
                    if (index >= heapSize) return null;

                    const parent = getPosition(index);

                    const left = 2 * index + 1;
                    const right = 2 * index + 2;

                    return (
                        <g key={`edge-${index}`}>
                            {left < heapSize && (
                                <line
                                    x1={parent.x}
                                    y1={parent.y}
                                    x2={getPosition(left).x}
                                    y2={getPosition(left).y}
                                    stroke="#DDD2C5"
                                    strokeWidth="2"
                                />
                            )}

                            {right < heapSize && (
                                <line
                                    x1={parent.x}
                                    y1={parent.y}
                                    x2={getPosition(right).x}
                                    y2={getPosition(right).y}
                                    stroke="#DDD2C5"
                                    strokeWidth="2"
                                />
                            )}
                        </g>
                    );
                })}

                {/* Nodes */}
                {array.map((value, index) => {
                    if (index >= heapSize) return null;

                    const pos = getPosition(index);

                    let fill = "#A1764E";
                    let stroke = "#8B6845";
                    if (sorted.includes(index)) {
                        fill = "#7E9A75";
                        stroke = "#5A7354";
                    }
                    if (index === currentNode) {
                        fill = "#D4A373";
                        stroke = "#A1764E";
                    }

                    if (index === leftChild || index === rightChild) {
                        fill = "#F3C56D";
                        stroke = "#D39B2A";
                    }

                    return (
                        <motion.g
                            key={index}
                            animate={{
                                x: 0,
                                y: 0,
                                scale:
                                    index === currentNode ||
                                        index === leftChild ||
                                        index === rightChild
                                        ? 1.08
                                        : 1,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r={radius}
                                fill={fill}
                                stroke={stroke}
                                strokeWidth="2"
                            />

                            <text
                                x={pos.x}
                                y={pos.y + 5}
                                textAnchor="middle"
                                fontSize="15"
                                fontWeight="600"
                                fill="white"
                            >
                                {value}
                            </text>

                            <text
                                x={pos.x}
                                y={pos.y + 42}
                                textAnchor="middle"
                                fontSize="11"
                                fill="#8C837B"
                            >
                                {index}
                            </text>
                        </motion.g>
                    );
                })}
            </svg>
        </div>
    );
}