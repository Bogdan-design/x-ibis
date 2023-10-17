import * as React from "react"
import { SVGProps, Ref, forwardRef } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" ref={ref} {...props}>
        <g fill="#333" clipPath="url(#a)">
            <path d="M5.587 7.721H.769a.387.387 0 0 0-.388.387v15.478c0 .214.174.388.388.388h4.818a.387.387 0 0 0 .387-.388V8.108a.387.387 0 0 0-.387-.387ZM3.18.026A3.181 3.181 0 0 0 0 3.202 3.182 3.182 0 0 0 3.18 6.38a3.18 3.18 0 0 0 3.176-3.177A3.18 3.18 0 0 0 3.179.026ZM17.842 7.336c-1.935 0-3.366.832-4.234 1.777V8.108a.387.387 0 0 0-.387-.387H8.607a.387.387 0 0 0-.387.387v15.478c0 .214.173.388.387.388h4.808a.387.387 0 0 0 .387-.388v-7.658c0-2.58.7-3.586 2.5-3.586 1.959 0 2.114 1.612 2.114 3.719v7.526c0 .213.174.387.388.387h4.809a.387.387 0 0 0 .387-.387v-8.49c0-3.838-.732-7.76-6.158-7.76Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default ForwardRef
