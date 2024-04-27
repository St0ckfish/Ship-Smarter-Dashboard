import type { JSX } from "react/jsx-runtime";

function RightArrowIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width={16}
            // height={16}
            // viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                stroke="#7B57E0"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 12 4-4-4-4"
            />
        </svg>

    );
}
export default RightArrowIconSvg;






