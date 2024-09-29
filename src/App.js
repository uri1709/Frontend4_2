import { useForm } from 'react-hook-form';
import styles from './App.module.css';
import { RegistrationForm } from './RegistrationForm';

// const sendFormData = (formData) => {
// 	console.log(formData);
// 	alert('Вы зарегистрированы!');
// };

export const App = () => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm({
	// 	defaultValues: {
	// 		password: '',
	// 	},
	// });

	// const passwordProps = {
	// 	minLength: {
	// 		value: 3,
	// 		message: 'Неверный логин. Должно быть не меньше 3 символов',
	// 	},
	// 	maxLength: {
	// 		value: 20,
	// 		message: 'Неверный логин. Должно быть не больше 20 символов',
	// 	},
	// 	pattern: {
	// 		value: /^[w_]*$/,
	// 		message:
	// 			'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание',
	// 	},
	// };

	// const passwordError = errors.password?.message;

	return (
		<div className={styles.app}>
			{/* <form onSubmit={handleSubmit(sendFormData)}>
				{passwordError && (
					<div className={styles.errorLabel}>{passwordError}</div>
				)}
				<input
					name="password"
					type="text"
					{...register('password', passwordProps)}
				/>
				<button type="submit" disabled={!!passwordError}>
				RegistrationForm
				</button>
			</form> */}
			<RegistrationForm />
		</div>
	);
};
