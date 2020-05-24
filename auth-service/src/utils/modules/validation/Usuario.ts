import { isEmpty } from '../is-empty';
import { isLength } from '../is-length';

export async function validateCreateUsuarioInput(input: any) {
	const errors = [];

	if (isEmpty(input?.nome)) {
		errors.push({ key: 'nome', message: 'O campo nome é obrigatório' });
	}

	if (isEmpty(input?.senha)) {
		errors.push({ key: 'senha', message: 'O campo senha é obrigatório' });
	}

	if (isEmpty(input.senha_confirmation)) {
		errors.push({
			key: 'senha_confirmation',
			message: 'O campo confirmação de senha é obrigatório',
		});
	}

	if (input?.senha !== input?.senha_confirmation) {
		errors.push({ key: 'senha', message: 'As senhas não coincidem' });
	}

	if (!isLength(input?.nome, { min: 3, max: 30 })) {
		errors.push({
			key: 'nome',
			message: 'O campo nome precisa ser entre 3 e 30 caracteres',
		});
	}

	if (!isLength(input?.senha, { min: 6, max: 30 })) {
		errors.push({
			key: 'senha',
			message: 'O campo senha precisa ser entre 6 e 30 caracteres',
		});
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}
