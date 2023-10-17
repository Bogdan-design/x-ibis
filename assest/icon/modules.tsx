import * as React from "react"
import { SVGProps, Ref, forwardRef } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref}>
        <path
            stroke="#2F80ED"
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
            stroke="#2F80ED"
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
            stroke="#2F80ED"
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
            stroke="#2F80ED"
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
            stroke="#2F80ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            rx={3}
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export { ForwardRef as ReactComponent }
