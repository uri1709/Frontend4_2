// import React from 'react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegistrationForm.module.css';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Неверный формат электронной почты')
		.required('Электронная почта обязательна'),
	password: yup
		.string()
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.required('Пароль обязателен'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают')
		.required('Подтверждение пароля обязательно'),
});

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setFocus,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const registerButtonRef = useRef(null);

	const onSubmit = (data) => {
		console.log(data);
		alert('Вы зарегистрированы!');
	};

	// Установим фокус на кнопку "Зарегистрироваться" после успешного заполнения
	const focusOnSubmitButton = (e) => {
		if (isValid) {
			setFocus('submit');
		}
	};

	return (
		<div className={styles.app}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
				onChange={focusOnSubmitButton}
			>
				{/* <h1>1111</h1> */}
				<h1 className={styles.title}>
					Регистрация <br />
					react-hook-form
				</h1>
				<div className="form-group">
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						type="email"
						placeholder="Почта"
						id="email"
						{...register('email')}
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>

				<div className="form-group">
					<label className={styles.label} htmlFor="password">
						Пароль:
					</label>
					<input
						className={styles.input}
						type="password"
						id="password"
						{...register('password')}
					/>
					{errors.password && <p>{errors.password.message}</p>}
				</div>

				<div className="form-group">
					<label className={styles.label} htmlFor="confirmPassword">
						Повторите пароль:
					</label>
					<input
						className={styles.input}
						type="password"
						id="confirmPassword"
						{...register('confirmPassword')}
						onBlur={() => {
							// Переносим фокус на кнопку при изменении пароля

							if (isValid) {
								registerButtonRef.current.focus();
							}
						}}
						onСhange={() => {
							// Переносим фокус на кнопку при изменении пароля

							if (isValid) {
								registerButtonRef.current.focus();
							}
						}}
					/>
					{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
				</div>

				<button
					className={styles['button-submit']}
					type="submit"
					ref={registerButtonRef}
					disabled={!isValid}
				>
					{/* <button type="submit" disabled={!isValid}> */}
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
