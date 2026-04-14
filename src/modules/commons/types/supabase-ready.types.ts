export interface TableMetadata {
  tableName: string
  primaryKey: string
  notes: string
}

export const appTablesMetadata: TableMetadata[] = [
  {
    tableName: 'users',
    primaryKey: 'id',
    notes: 'Host y usuarios de la plataforma',
  },
  {
    tableName: 'invitations',
    primaryKey: 'id',
    notes: 'Eventos/invitaciones creadas por host',
  },
  {
    tableName: 'guests',
    primaryKey: 'id',
    notes: 'Invitados vinculados a una invitación',
  },
]
