import type { JSX } from "react/jsx-runtime";
function InProgressOrderIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 11"
            fill="none"
            {...props}
        >
            <path
                fill="#F3DB00"
                d="M7 3.625a.375.375 0 0 1 .75 0V5.25a.375.375 0 0 1-.375.375H6a.375.375 0 0 1 0-.75h.635A1.751 1.751 0 0 0 5 3.75a1.71 1.71 0 0 0-1.337.615.375.375 0 1 1-.576-.48A2.46 2.46 0 0 1 5 3c.818 0 1.544.393 2 1v-.375ZM3 7v.375a.375.375 0 0 1-.75 0v-1.5c0-.207.168-.375.375-.375H4a.375.375 0 0 1 0 .75h-.582a1.756 1.756 0 0 0 2.921.383.375.375 0 1 1 .572.486A2.506 2.506 0 0 1 3 7ZM5 .5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm4.25 5a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0Z"
            />
        </svg>
    );
}
export default InProgressOrderIconSvg;