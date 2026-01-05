import JWT from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { StoreRepository } from '../repository/store.repository.js'

export class AuthService {
    _repository = new StoreRepository();

    async verify(email, password) {
        const hasEmail = await this._repository.findByEmail(email);

        if (!hasEmail.length) {
            throw new Error('usuário não existente');
        }

        const store = hasEmail[0];
        const valid = await bcrypt.compare(password, store.password);
        if (!valid) {
            throw new Error('credencias inválidas');
        }

        const token = JWT.sign(
            {idStore: store.idStore},
            process.env.JWT_PASSWORD,
            {expiresIn: '1d'},
        )

        return token;
    }

    async registrate(name, email, password) {
        const existing = await this._repository.findByEmail(email);
        if (existing.length > 0) {
            throw new Error('usuário já existente');
        }
        password = await bcrypt.hash(password, 8);
        const store = await this._repository.create(name, email, password);
        return store;
    }
}