import { StoreRepository } from '../repository/store.repository.js'

export class StoreService{
    _repository = new StoreRepository();

    async register(store) {
        const existing = await this._repository.findByEmail(store.email);
        if (existing.length > 0) {
            throw new Error('usuário já existente')
        }

        return this._repository.create(store);
    }
}