import { StoreRepository } from '../repository/store.repository.js'
import bcrypt from 'bcryptjs'

export class StoreService{
    _repository = new StoreRepository();

    async remove(idStore) {
        return this._repository.delete(idStore);
    }

    async update(idStore, store) {
        if (store.password.length > 0) {
            store.password = bcrypt.hash(store.password, 8);
        }
        return this._repository.update(idStore, store);
    }
}