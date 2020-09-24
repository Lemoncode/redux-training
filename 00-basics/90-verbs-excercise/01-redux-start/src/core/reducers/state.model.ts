export interface VerbEntityState {
  infinitive: string;
  past: string;
  participle: string;
  translation: string;
}

export type VerbCollectionState = VerbEntityState[];
export const createDefaultVerbCollection = (): VerbEntityState[] => [];
