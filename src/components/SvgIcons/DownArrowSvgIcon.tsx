import type { JSX } from "react/jsx-runtime";

function DownArrowIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={10}
            fill="none"
            {...props}
        >
            <path
                fill="#2C2C2C"
                d="M2.387 1.419a.844.844 0 0 0-1.14 1.244L8.95 9.71a.843.843 0 0 0 1.159-.019l7.475-7.287a.842.842 0 1 0-1.177-1.208L9.501 7.928l-7.114-6.51Z"
            />
        </svg>
    );
}
export default DownArrowIconSvg;