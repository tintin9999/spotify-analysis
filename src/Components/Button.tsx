import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  to?: string | URL;
  className?: string;
}

function Button(props: Props) {
  let url = '#';
  if (props.to) {
    if (typeof props.to !== 'string') {
      url = props.to.href;
    } else {
      url = props.to;
    }
  }

  return (
    <a href={url}>
      <button className={`bg-green-500 hover:bg-green-600 p-2 text-yellow-50 rounded font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition duration-150 ease-in-out ${props.className ?? ''}`}>
        {props.children}
      </button>
    </a>
  )
}

export default Button;