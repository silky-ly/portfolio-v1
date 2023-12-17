type IconProps = React.HTMLAttributes<SVGElement> & { isactive?: boolean };

export const Icons = {
  ArrowDown: (props: IconProps) => (
    <svg
      className="inline align-middle"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 10l5 5l5-5"
      ></path>
    </svg>
  ),
};
