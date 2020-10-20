import { ILote } from './i-lote';
import { IPalestrante } from './i-palestrante';
import { IRedeSocial } from './i-rede-social';

export interface IEvento {
    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    quantidadePessoas: number;
    imagemURL: string;
    telefone: string;
    email: string;
    lotes: ILote[];
    redeSociais: IRedeSocial[];
    palestrante: IPalestrante[];
}
