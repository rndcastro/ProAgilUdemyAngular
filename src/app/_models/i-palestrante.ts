import { IEvento } from './i-evento';
import { IRedeSocial } from './i-rede-social';

export interface IPalestrante {
    id: number;
    nome: string;
    miniCurriculo: string;
    imagemURL: string;
    telefone: string;
    email: string;
    redesSociais: IRedeSocial[];
    eventos: IEvento[];
}
