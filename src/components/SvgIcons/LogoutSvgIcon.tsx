import type { JSX } from "react/jsx-runtime";
function LogoutIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="none"
            {...props}
        >
            <path
                fill="#fff"
                d="M8.8 11.999a1.002 1.002 0 1 1 0 2.004A1.002 1.002 0 0 1 8.8 12Zm3.497-7.146V11l.001.505 7.441-.001-1.722-1.724a.75.75 0 0 1-.072-.976l.072-.085a.75.75 0 0 1 .977-.072l.084.073 2.997 2.997a.75.75 0 0 1 .073.976l-.073.084-2.997 3.004a.75.75 0 0 1-1.134-.975l.073-.085 1.713-1.717h-7.432v6.746a.75.75 0 0 1-.88.739l-8.501-1.502a.75.75 0 0 1-.62-.738v-12a.75.75 0 0 1 .629-.74l8.5-1.395a.75.75 0 0 1 .871.74Zm-1.5.883-7 1.15v10.733l7 1.236V5.736ZM13.297 19h.766l.101-.006a.75.75 0 0 0 .649-.745L14.805 14h-1.508V19ZM13.3 10.5l-.002-1.275V5.5h.746a.75.75 0 0 1 .743.647l.007.102.007 4.25h-1.5Z"
            />
        </svg>
    );
}
export default LogoutIconSvg;