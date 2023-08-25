import { IRepository } from '../repository';
import { SchemaType } from '../Schema';
import { clone, pull } from "../git";
import fs from "fs";
import { BASE_FOLDER } from '../constants';

export const create = async (data: SchemaType, repository: IRepository) => {
    if(!repository.create)
        return [];

    fs.mkdirSync(`${BASE_FOLDER}`, { recursive: true });

    if(!clone(data.repository)) {
        console.log("Erro ao fazer clone!");
        return [];
    }

    return await repository.create(data);
}

export const update = async (data: SchemaType, repository: IRepository) => {
    if(!repository.update)
        return [];

    if(!pull(data.repository)) {
        console.log("Erro ao fazer pull!");
        return [];
    }

    return await repository.update(data);
}

export const list = async (repository: IRepository) => {
    if(!repository.list)
        return [];

    return await repository.list();
}