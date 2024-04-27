import type { JSX } from "react/jsx-runtime";
function NotificationsIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={37}
            fill="none"
            {...props}
        >
            <rect
                width={32.96}
                height={34.505}
                x={0.5}
                y={1.247}
                stroke="#000"
                strokeOpacity={0.29}
                rx={7.5}
            />
            <path
                fill="#2C2C2C"
                d="M16.975 8.747a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.249 1.249 0 0 1-1.145 1.751l-4.735.002a3 3 0 0 1-5.995.176l-.005-.179-4.725.001a1.251 1.251 0 0 1-1.146-1.748l1.371-3.158v-4.098c.001-4.155 3.353-7.5 7.5-7.5Zm1.5 16.503-3 .003a1.5 1.5 0 0 0 2.993.144l.007-.147Zm-1.5-15.003c-3.32 0-6 2.675-6 6v4.41l-1.344 3.094h14.697l-1.353-3.093V16.26l-.003-.225a5.988 5.988 0 0 0-5.997-5.788Z"
            />
        </svg>
    );
}
export default NotificationsIconSvg;