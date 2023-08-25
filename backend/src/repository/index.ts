
import Model from '../model/gitrep';
import { SchemaType } from '../Schema';

export interface IRepository {
    name:       string;
    read?:      (data: SchemaType) => Promise<SchemaType>;
    create?:    (data: SchemaType) => Promise<SchemaType>;
    list?:      () => Promise<SchemaType[]>;
    update?:    (data: SchemaType) => Promise<SchemaType | undefined>;
}

export const Repository: IRepository = {
    name: 'Pattem',

    read: async (data) => {
        
        return data;
    },

    create: async (data) => {
        const newRow = new Model(data);
        await newRow.save();

        return newRow;
    },

    list: async () => {
        const rows = await Model.find();

        const data: SchemaType[] = rows;

        return data;
    },

    update: async (data) => {
        const row = await Model.findOne({repository: data.repository});

        if(!row)
            return undefined;

        row.UpdatedAt = new Date();
        await row.save();

        const newRow: SchemaType = row;

        return newRow;
    }
}