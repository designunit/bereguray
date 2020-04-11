import s from './styles.module.css'

import cx from 'classnames'
import { useForm, OnSubmit } from 'react-hook-form'
import { useCallback, forwardRef } from 'react'
import { Button } from '../Button'

const Row: React.SFC = props => (
    <div className={s.row}>
        {props.children}
    </div>
)

const Space: React.SFC = props => (
    <i className={s.space}>
        {props.children}
    </i>
)

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input
        {...props}
        ref={ref}
        className={cx(s.field, props.className)}
    />
))

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
    <textarea
        {...props}
        ref={ref}
        className={cx(s.field, props.className)}
    />
))

type FormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => (
    <form
        {...props}
        ref={ref}
        className={cx(s.form, props.className)}
    />
))

type FormData = {
    type: string
    username: string
    email: string
    bullshit: string
}

export const OpinionForm: React.FC = props => {
    const { handleSubmit, register, errors } = useForm<FormData>()
    const onSubmit = useCallback<OnSubmit<FormData>>(values => {
        console.log(values)
    }, [])

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Input
                    name='username'
                    placeholder='Ваше имя'
                    ref={register({
                        validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.username && (
                    <p className={cx(s.caption, s.error)}>
                        {errors.username.message}
                    </p>
                )}
            </Row>

            <Row>
                <Input
                    name='email'
                    placeholder='Ваш email'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && (
                    <p className={cx(s.caption, s.error)}>
                        {errors.email.message}
                    </p>
                )}
            </Row>

            <Row>
                <TextArea
                    name={'bullshit'}
                    rows={4}
                    placeholder='Расскажите свою историю...'
                    ref={register()}
                />
            </Row>

            <Row>
                <Button
                    theme={'primary'}
                    size={'big'}
                    type={'submit'}
                    style={{
                        width: '100%'
                    }}
                >
                    Отправить заявку
                </Button>

                <p className={s.caption}>
                    Нажимая кнопку, я соглашаюсь на обработку персональных данных
                </p>
            </Row>
        </Form>
    )
}
