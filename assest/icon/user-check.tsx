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
            d="m17 10 2 2 4-4"
        />
        <circle
            cx={9}
            cy={6}
            r={4}
            stroke="#2F80ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            stroke="#2F80ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2 18.8A4.8 4.8 0 0 1 6.8 14h4.4a4.8 4.8 0 0 1 4.8 4.8v0a3.2 3.2 0 0 1-3.2 3.2H5.2A3.2 3.2 0 0 1 2 18.8v0Z"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export { ForwardRef as ReactComponent }
