import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="none"
        {...props}
    >
            <path
                stroke="#E75934"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 5h4M5 12v4M19 8v4M12 19h4"
            />
            <rect
                width={6}
                height={6}
                x={2}
                y={2}
                stroke="#E75934"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                rx={3}
            />
            <rect
                width={6}
                height={6}
                x={16}
                y={2}
                stroke="#E75934"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                rx={3}
            />
            <rect
                width={6}
                height={6}
                x={2}
                y={16}
                stroke="#E75934"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                rx={3}
            />
            <rect
                width={6}
                height={6}
                x={16}
                y={16}
                stroke="#E75934"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                rx={3}
            />
    </svg>
)
export default SvgComponent
