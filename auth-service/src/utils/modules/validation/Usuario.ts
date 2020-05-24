import { isEmpty } from '../is-empty';
import { isLength } from '../is-length';

import { Usuario } from '../../../models/Usuario';
import { isEmail } from '../is-email';

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

	if (!isEmail(input?.email)) {
		errors.push({ key: 'email', message: 'Email inválido' });
	}

	if (!isEmpty(input?.email)) {
		const usuario = await Usuario.findOne(
			{ email: input?.email },
			{ senha: 0 }
		).lean();

		if (usuario) {
			errors.push({ key: 'email', message: 'Email já cadastrado' });
		}
	}

	return {
		isValid: errors.length === 0,
		errors,
	};
}
