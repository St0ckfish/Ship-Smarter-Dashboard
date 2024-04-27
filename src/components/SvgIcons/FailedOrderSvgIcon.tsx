import type { JSX } from "react/jsx-runtime";
function FailedOrderIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 13"
            fill="none"
            {...props}
        >
            <path
                fill="#F52A2A"
                d="M8.137 3.56a.375.375 0 0 1 .514-.54A4.375 4.375 0 0 1 6.36 10.86l.375.374.036.042a.375.375 0 0 1-.566.488l-1-1-.037-.042a.375.375 0 0 1 .037-.488l.156-.157a3.635 3.635 0 0 0 2.776-6.52ZM6.639 2.92a3.635 3.635 0 0 0-2.89 6.432.375.375 0 0 1-.534.522A4.375 4.375 0 0 1 5.64 2.14l-.374-.375a.375.375 0 1 1 .53-.53l1 1a.375.375 0 0 1 0 .53l-.156.156ZM4.735 5.235a.375.375 0 0 1 .53 0L6 5.97l.735-.735a.375.375 0 1 1 .53.53L6.53 6.5l.735.735a.375.375 0 1 1-.53.53L6 7.03l-.735.735a.375.375 0 1 1-.53-.53L5.47 6.5l-.735-.735a.375.375 0 0 1 0-.53ZM6 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
            />
        </svg>
    );
}
export default FailedOrderIconSvg;