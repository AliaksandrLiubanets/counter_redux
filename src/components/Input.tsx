import {InputHTMLAttributes} from 'react'
import s from '../styles/styles.module.css'

// type InputPropsType = {
//     className: string
//     handler: (e: ChangeEvent<HTMLInputElement>) => void
//     value: number
// }

export function Input(props: InputHTMLAttributes<any>) {
    return <div className={s.window__input}>
        <input {...props}
               type={'number'}/>
    </div>
}