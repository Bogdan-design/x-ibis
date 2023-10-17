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
            d="M22 5c0-1.657-5.03-3-10-3S2 3.343 2 5m20 0v14c0 1.5-3 3-7 3V8c4 0 7-1.694 7-3ZM2 5v14c0 1.5 4 3 7 3V8C5.5 8 2 6.306 2 5Z"
        />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export { ForwardRef as ReactComponent }
