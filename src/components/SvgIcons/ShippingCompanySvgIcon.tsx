import type { JSX } from "react/jsx-runtime";
function ShippingCompanyIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                fill="#fff"
                d="M8 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-4v-.75a2.25 2.25 0 0 0-2.25-2.25h-6.5A2.25 2.25 0 0 0 3 4.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V7.75a2.25 2.25 0 0 0-2.25-2.25H14Zm-9.5-.75A.75.75 0 0 1 5.25 4h6.5a.75.75 0 0 1 .75.75v.75h-.25A2.25 2.25 0 0 0 10 7.75V20.5H4.5V4.75Zm10 15.75V19h2v1.5h-2Zm3.5-2.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v2.25h-1.5V7.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V20.5H18v-2.25Z"
            />
        </svg>
    );
}
export default ShippingCompanyIconSvg;