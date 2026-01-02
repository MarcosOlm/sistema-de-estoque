import { StoreRepository } from '../repository/store.repository.js'

export class StoreService{
    _repository = new StoreRepository();

    async register(store) {
        const { name, email, password } = store;
        const existing = await this._repository.findByEmail(email);
        if (existing.length > 0) {
            throw new Error('usuário já existente');
        }

        return this._repository.create(name, email, password);
    }

    async remove(store) {
        const { idStore } = store;
        return this._repository.delete(idStore);
    }

    async update(store) {
        const { idStore } = store;
        return this._repository.update(idStore, store);
    }
}