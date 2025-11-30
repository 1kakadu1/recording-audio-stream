import { useState } from 'react';

export const useFormState = <T>(args: { defaultValues: T }) => {
	const [data, setData] = useState<T>(args.defaultValues);
	const [success, setSuccess] = useState<boolean>(false);
	const [error, setError] = useState<null | undefined | string | object>();
	const [loading, setLoading] = useState(false);

	return {
		loading,
		error,
		setError,
		setLoading,
		success,
		setSuccess,
		data,
		setData,
	};
};
