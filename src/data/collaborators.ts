export interface CollaboratorProfile {
  name: string;
  image?: string;
}

export interface CollaboratorAssignment {
  collaboratorId: keyof typeof COLLABORATORS;
  role: string;
  details: string;
}

export const COLLABORATORS = {
  walterJoelCastilCorea: {
    name: "Walter Joel Castil Corea",
  },
} satisfies Record<string, CollaboratorProfile>;

export const resolveCollaborators = (assignments: CollaboratorAssignment[]) =>
  assignments.map(({ collaboratorId, role, details }) => ({
    ...COLLABORATORS[collaboratorId],
    role,
    details,
  }));
