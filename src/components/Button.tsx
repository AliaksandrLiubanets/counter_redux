import {ButtonHTMLAttributes} from 'react'

// type ButtonPropsType = {
//     title: string
//     onClick: () => void
//     className: string
// }

export function Button({title, ...props}: ButtonHTMLAttributes<any>) {
    return <div>
        <button {...props}>
            {title}
        </button>
    </div>
}