export default function MentalModelSketch({ algorithm }) {
  switch (algorithm.id) {
    case "bubble":
      return <BubbleSketch />;

    case "selection":
      return <SelectionSketch />;

    case "insertion":
      return <InsertionSketch />;

    case "merge":
      return <MergeSketch />;

    case "quick":
      return <QuickSketch />;

    case "heap":
      return <HeapSketch />;

    default:
      return <BubbleSketch />;
  }
}
function BubbleSketch() {
  return (
    <svg
      width="360"
      height="240"
      viewBox="0 0 360 240"
      fill="none"
    >

      {/* Shelf */}

      <line
        x1="42"
        y1="175"
        x2="188"
        y2="175"
        stroke="#DDD0C0"
        strokeWidth="2"
      />

      {/* Bars */}

      <rect
        x="55"
        y="103"
        width="42"
        height="72"
        rx="10"
        fill="#E8D8C8"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <rect
        x="105"
        y="63"
        width="42"
        height="112"
        rx="10"
        fill="#DDC5AA"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <rect
        x="155"
        y="23"
        width="42"
        height="152"
        rx="10"
        fill="#C99863"
        stroke="#A1764E"
        strokeWidth="3"
      />

      {/* Highlight */}

      <line
        x1="164"
        y1="30"
        x2="164"
        y2="167"
        stroke="#DEB989"
        strokeWidth="1.3"
      />

      {/* Values */}

      <text
        x="76"
        y="95"
        textAnchor="middle"
        fontSize="15"
        fill="#5E564F"
      >
        24
      </text>

      <text
        x="126"
        y="55"
        textAnchor="middle"
        fontSize="15"
        fill="#5E564F"
      >
        45
      </text>

      <text
        x="176"
        y="15"
        textAnchor="middle"
        fontSize="15"
        fill="#5E564F"
      >
        91
      </text>

      {/* Compare Brace */}

      <path
        d="M72 188 C82 198 100 198 110 188"
        stroke="#A1764E"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      <text
        x="91"
        y="214"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="16"
        fill="#A1764E"
      >
        compare and
      </text>

      {/* Swap */}

      <path
        d="M116 192
           C126 185 136 185 146 192"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      <text
        x="132"
        y="214"
        textAnchor="right"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="16"
        fill="#A1764E"
      >
        swap
      </text>

      {/* Bubble Path */}

      <path
        d="M220 165
           C238 145
           260 112
           286 72"
        stroke="#A1764E"
        strokeWidth="2"
        strokeDasharray="6 5"
        fill="none"
      />

      {/* Bubbles */}

      <circle
        cx="222"
        cy="162"
        r="3"
        fill="#F7EFE6"
        stroke="#A1764E"
      />

      <circle
        cx="238"
        cy="143"
        r="5"
        fill="#F4E8DD"
        stroke="#A1764E"
      />

      <circle
        cx="258"
        cy="114"
        r="8"
        fill="#E9D8C8"
        stroke="#A1764E"
      />

      <circle
        cx="288"
        cy="72"
        r="18"
        fill="#C99863"
        stroke="#A1764E"
        strokeWidth="3"
      />

      {/* Curved Arrow */}

      <path
        d="M292 95
           C308 98
           314 118
           305 135"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      {/* Editorial Text */}

      <text
        x="286"
        y="178"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="17"
        fill="#A1764E"
      >
        Largest element
      </text>

      <text
        x="286"
        y="198"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="17"
        fill="#A1764E"
      >
        bubbles to the end
      </text>

      <text
        x="286"
        y="218"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="14"
        fill="#8A7767"
      >
        after each pass
      </text>

      {/* Arrow Marker */}

      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L6,3 L0,6"
            fill="#A1764E"
          />
        </marker>
      </defs>
    </svg>
  );
}
function SelectionSketch() {
  return (
    <svg
      width="360"
      height="240"
      viewBox="0 0 360 240"
      fill="none"
    >
      {/* Shelf */}
      <line
        x1="35"
        y1="170"
        x2="325"
        y2="170"
        stroke="#DDD0C0"
        strokeWidth="2"
      />

      {/* Bars */}
      <rect x="45" y="90" width="38" height="80" rx="8" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />
      <rect x="95" y="120" width="38" height="50" rx="8" fill="#C99863" stroke="#A1764E" strokeWidth="3" />
      <rect x="145" y="60" width="38" height="110" rx="8" fill="#DDC5AA" stroke="#A1764E" strokeWidth="2" />
      <rect x="195" y="100" width="38" height="70" rx="8" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />
      <rect x="245" y="75" width="38" height="95" rx="8" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />

      {/* Minimum highlight */}
      <circle
        cx="114"
        cy="112"
        r="24"
        stroke="#A1764E"
        strokeDasharray="4 4"
        fill="none"
      />

      <text
        x="114"
        y="50"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="16"
        fill="#A1764E"
      >
        minimum
      </text>

      {/* Scan arrow */}
      <path
        d="M60 35 C120 15 210 15 275 35"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      <text
        x="170"
        y="18"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="15"
        fill="#8A7767"
      >
        scan remaining elements
      </text>

      {/* Swap arrow */}
      <path
        d="M115 185 C95 205 70 205 55 185"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      {/* Sorted divider */}
      <line
        x1="88"
        y1="45"
        x2="88"
        y2="175"
        stroke="#DDD0C0"
        strokeDasharray="5 5"
      />

      <text
        x="55"
        y="205"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#A1764E"
      >
        sorted
      </text>

      <text
        x="190"
        y="205"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#A1764E"
      >
        unsorted
      </text>

      <text
        x="285"
        y="225"
        textAnchor="end"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="14"
        fill="#8A7767"
      >
        select minimum → place it forever
      </text>

      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6" fill="#A1764E" />
        </marker>
      </defs>
    </svg>
  );
}
function InsertionSketch() {
  return (
    <svg
      width="360"
      height="240"
      viewBox="0 0 360 240"
      fill="none"
    >
      {/* Shelf */}
      <line
        x1="35"
        y1="170"
        x2="325"
        y2="170"
        stroke="#DDD0C0"
        strokeWidth="2"
      />

      {/* Sorted portion */}
      <rect x="45" y="90" width="38" height="80" rx="8" fill="#C99863" stroke="#A1764E" strokeWidth="3" />
      <rect x="95" y="70" width="38" height="100" rx="8" fill="#DDC5AA" stroke="#A1764E" strokeWidth="2" />
      <rect x="145" y="110" width="38" height="60" rx="8" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />

      {/* Key element */}
      <rect
        x="215"
        y="40"
        width="38"
        height="130"
        rx="8"
        fill="#F3E3D2"
        stroke="#A1764E"
        strokeWidth="3"
      />

      {/* Divider */}
      <line
        x1="195"
        y1="45"
        x2="195"
        y2="175"
        stroke="#DDD0C0"
        strokeDasharray="5 5"
      />

      {/* Curved insertion arrow */}
      <path
        d="M235 35
           C205 20 165 30 160 75"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      {/* Shift arrows */}
      <path
        d="M155 190 L185 190"
        stroke="#A1764E"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />

      <path
        d="M105 190 L135 190"
        stroke="#A1764E"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />

      {/* Labels */}
      <text
        x="234"
        y="25"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="16"
        fill="#A1764E"
      >
        key
      </text>

      <text
        x="110"
        y="210"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#A1764E"
      >
        shift larger elements
      </text>

      <text
        x="180"
        y="228"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="14"
        fill="#8A7767"
      >
        insert into the correct position
      </text>

      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6" fill="#A1764E" />
        </marker>
      </defs>
    </svg>
  );
}
function MergeSketch() {
  return (
    <svg
      width="340"
      height="250"
      viewBox="0 0 340 250"
      fill="none"
    >
      {/* Title */}
      <text
        x="170"
        y="20"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="18"
        fill="#1F1B18"
      >
        Divide → Conquer → Merge
      </text>

      {/* Root */}
      <rect
        x="110"
        y="35"
        width="120"
        height="30"
        rx="15"
        fill="#A1764E"
        opacity="0.12"
      />
      <text
        x="170"
        y="55"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Inter"
        fill="#1F1B18"
      >
        84 29 89 24
      </text>

      {/* Split arrows */}
      <line
        x1="170"
        y1="65"
        x2="100"
        y2="95"
        stroke="#A1764E"
        strokeWidth="2"
      />
      <line
        x1="170"
        y1="65"
        x2="240"
        y2="95"
        stroke="#A1764E"
        strokeWidth="2"
      />

      {/* Left half */}
      <rect
        x="40"
        y="95"
        width="90"
        height="28"
        rx="14"
        fill="#A1764E"
        opacity="0.12"
      />
      <text
        x="85"
        y="113"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Inter"
        fill="#1F1B18"
      >
        84 29
      </text>

      {/* Right half */}
      <rect
        x="210"
        y="95"
        width="90"
        height="28"
        rx="14"
        fill="#A1764E"
        opacity="0.12"
      />
      <text
        x="255"
        y="113"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Inter"
        fill="#1F1B18"
      >
        89 24
      </text>

      {/* Divide */}
      <line
        x1="85"
        y1="123"
        x2="60"
        y2="150"
        stroke="#A1764E"
        strokeWidth="2"
      />
      <line
        x1="85"
        y1="123"
        x2="110"
        y2="150"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <line
        x1="255"
        y1="123"
        x2="230"
        y2="150"
        stroke="#A1764E"
        strokeWidth="2"
      />
      <line
        x1="255"
        y1="123"
        x2="280"
        y2="150"
        stroke="#A1764E"
        strokeWidth="2"
      />

      {/* Individual elements */}
      {[
        { x: 45, value: "84" },
        { x: 95, value: "29" },
        { x: 215, value: "89" },
        { x: 265, value: "24" },
      ].map((item) => (
        <g key={item.value}>
          <circle
            cx={item.x + 15}
            cy={165}
            r="15"
            fill="#A1764E"
            opacity="0.12"
          />
          <text
            x={item.x + 15}
            y={170}
            textAnchor="middle"
            fontSize="12"
            fontFamily="Inter"
            fill="#1F1B18"
          >
            {item.value}
          </text>
        </g>
      ))}

      {/* Merge arrows */}
      <line
        x1="60"
        y1="180"
        x2="105"
        y2="205"
        stroke="#A1764E"
        strokeWidth="2"
      />
      <line
        x1="110"
        y1="180"
        x2="105"
        y2="205"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <line
        x1="230"
        y1="180"
        x2="235"
        y2="205"
        stroke="#A1764E"
        strokeWidth="2"
      />
      <line
        x1="280"
        y1="180"
        x2="235"
        y2="205"
        stroke="#A1764E"
        strokeWidth="2"
      />

      {/* Sorted halves */}
      <rect
        x="55"
        y="205"
        width="100"
        height="28"
        rx="14"
        fill="#A1764E"
      />
      <text
        x="105"
        y="223"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Inter"
        fill="white"
      >
        29 84
      </text>

      <rect
        x="185"
        y="205"
        width="100"
        height="28"
        rx="14"
        fill="#A1764E"
      />
      <text
        x="235"
        y="223"
        textAnchor="middle"
        fontSize="13"
        fontFamily="Inter"
        fill="white"
      >
        24 89
      </text>
    </svg>
  );
}
function QuickSketch() {
  return (
    <svg
      width="340"
      height="250"
      viewBox="0 0 340 250"
      fill="none"
    >
      {/* Title */}
      <text
        x="150"
        y="10"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#1F1B18"
      >
        Partition → Pivot → Repeat
      </text>

      {/* Original Array */}
      <rect
        x="55"
        y="40"
        width="230"
        height="34"
        rx="17"
        fill="#A1764E"
        opacity="0.12"
      />
      <text
        x="170"
        y="62"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="#1F1B18"
      >
        42 18 65 31 90
      </text>

      {/* Pivot */}
      <circle
        cx="245"
        cy="57"
        r="18"
        fill="#A1764E"
      />
      <text
        x="245"
        y="62"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="white"
      >
        90
      </text>

      <text
        x="245"
        y="28"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="16"
        fill="#A1764E"
      >
        pivot
      </text>

      {/* Split arrows */}
      <line
        x1="170"
        y1="75"
        x2="95"
        y2="115"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <line
        x1="170"
        y1="75"
        x2="245"
        y2="115"
        stroke="#A1764E"
        strokeWidth="2"
      />

      {/* Left Partition */}
      <rect
        x="30"
        y="115"
        width="120"
        height="30"
        rx="15"
        fill="#A1764E"
        opacity="0.12"
      />

      <text
        x="90"
        y="134"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="#1F1B18"
      >
        42 18 65 31
      </text>

      {/* Right Partition */}
      <rect
        x="220"
        y="115"
        width="70"
        height="30"
        rx="15"
        fill="#A1764E"
        opacity="0.12"
      />

      <text
        x="255"
        y="134"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="#1F1B18"
      >
        —
      </text>

      {/* Pivot settles */}
      <line
        x1="170"
        y1="145"
        x2="170"
        y2="180"
        stroke="#A1764E"
        strokeWidth="2"
        strokeDasharray="5 4"
      />

      <circle
        cx="170"
        cy="198"
        r="18"
        fill="#A1764E"
      />

      <text
        x="170"
        y="203"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="white"
      >
        90
      </text>

      {/* Recursive arrows */}
      <path
        d="M90 150 C70 170 55 188 45 210"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M250 150 C270 170 285 188 295 210"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
      />

      {/* Bottom labels */}
      <text
        x="45"
        y="228"
        textAnchor="start"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="15"
        fill="#8A7767"
      >
        recurse left
      </text>

      <text
        x="295"
        y="228"
        textAnchor="end"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="15"
        fill="#8A7767"
      >
        recurse right
      </text>

      {/* Caption */}
      <text
        x="170"
        y="245"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#A1764E"
      >
        place one pivot forever, then repeat
      </text>
    </svg>
  );
}
function HeapSketch() {
  return (
    <svg
      width="340"
      height="250"
      viewBox="0 0 340 250"
      fill="none"
    >
      {/* Title */}
      <text
        x="170"
        y="18"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="18"
        fill="#1F1B18"
      >
        Heap → Extract → Rebuild
      </text>

      {/* Heap Connections */}
      <line x1="170" y1="60" x2="120" y2="95" stroke="#A1764E" strokeWidth="2" />
      <line x1="170" y1="60" x2="220" y2="95" stroke="#A1764E" strokeWidth="2" />
      <line x1="120" y1="95" x2="95" y2="135" stroke="#A1764E" strokeWidth="2" />
      <line x1="120" y1="95" x2="145" y2="135" stroke="#A1764E" strokeWidth="2" />

      {/* Root */}
      <circle
        cx="170"
        cy="55"
        r="20"
        fill="#C99863"
        stroke="#A1764E"
        strokeWidth="3"
      />
      <text
        x="170"
        y="60"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="white"
      >
        90
      </text>

      {/* Children */}
      <circle cx="120" cy="100" r="17" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />
      <circle cx="220" cy="100" r="17" fill="#E8D8C8" stroke="#A1764E" strokeWidth="2" />
      <circle cx="95" cy="140" r="15" fill="#F4E8DD" stroke="#A1764E" strokeWidth="2" />
      <circle cx="145" cy="140" r="15" fill="#F4E8DD" stroke="#A1764E" strokeWidth="2" />

      <text x="120" y="105" textAnchor="middle" fontSize="12">70</text>
      <text x="220" y="105" textAnchor="middle" fontSize="12">60</text>
      <text x="95" y="145" textAnchor="middle" fontSize="11">40</text>
      <text x="145" y="145" textAnchor="middle" fontSize="11">50</text>

      {/* Extraction Arrow */}
      <path
        d="M190 48 C230 40 270 60 285 95"
        stroke="#A1764E"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />

      {/* Sorted Box */}
      <rect
        x="265"
        y="105"
        width="45"
        height="38"
        rx="10"
        fill="#C99863"
        stroke="#A1764E"
        strokeWidth="2"
      />

      <text
        x="287"
        y="128"
        textAnchor="middle"
        fontFamily="Inter"
        fontSize="13"
        fill="white"
      >
        90
      </text>

      {/* Caption */}
      <text
        x="287"
        y="160"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="16"
        fill="#A1764E"
      >
        largest
      </text>

      <text
        x="287"
        y="178"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontSize="14"
        fill="#8A7767"
      >
        moves forever
      </text>

      {/* Rebuild */}
      <path
        d="M170 170
           C190 190
           215 200
           245 205"
        stroke="#A1764E"
        strokeWidth="2"
        strokeDasharray="5 4"
        fill="none"
      />

      <text
        x="235"
        y="226"
        textAnchor="middle"
        fontFamily="Cormorant Garamond"
        fontSize="15"
        fill="#A1764E"
      >
        rebuild heap
      </text>

      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6" fill="#A1764E" />
        </marker>
      </defs>
    </svg>
  );
}