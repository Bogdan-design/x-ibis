import * as React from "react"
import { SVGProps, Ref, forwardRef } from "react"
export const Bubble = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref}>
        <path
            stroke="#2F80ED"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M15.59 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26ZM6.36 19.44a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
        />
    </svg>
)