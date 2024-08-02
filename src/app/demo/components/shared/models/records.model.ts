export interface RecordsModel {
  help: string;
  success: boolean;
  result: Result;
}

export interface Result {
  include_total: boolean;
  resource_id: string;
  fields: Field[];
  records_format: string;
  records: Record[];
  limit: number;
  _links: Links;
  total: number;
}

export interface Field {
  type: string;
  id: string;
}

export interface Record {
  _id: number;
  ano_movimentacao: number;
  mes_movimentacao: number;
  orgao_codigo: number;
  orgao_nome: string;
  unidade_codigo: number;
  unidade_nome: string;
  categoria_economica_codigo: number;
  categoria_economica_nome: string;
  grupo_despesa_codigo: number;
  grupo_despesa_nome: string;
  modalidade_aplicacao_codigo: number;
  modalidade_aplicacao_nome: string;
  elemento_codigo: number;
  elemento_nome: string;
  subelemento_codigo: number;
  subelemento_nome: string;
  funcao_codigo: number;
  funcao_nome: string;
  subfuncao_codigo: number;
  subfuncao_nome: string;
  programa_codigo: number;
  programa_nome: string;
  acao_codigo: number;
  acao_nome: string;
  fonte_recurso_codigo: number;
  fonte_recurso_nome: string;
  empenho_ano: number;
  empenho_modalidade_nome: string;
  empenho_modalidade_codigo: number;
  empenho_numero: number;
  subempenho: number;
  indicador_subempenho: string;
  credor_codigo: number;
  credor_nome: string;
  modalidade_licitacao_codigo: number;
  modalidade_licitacao_nome: string;
  valor_empenhado: string;
  valor_liquidado: string;
  valor_pago: string;
}

export interface Links {
  start: string;
  next: string;
}
