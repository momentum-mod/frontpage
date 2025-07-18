export enum CreditType {
  PROJECT_LEAD = 'project-lead',
  DEPARTMENT_HEAD = 'dept-head',
  TEAM = 'team',
  EMERITUS = 'emeritus'
}

export const CreditTypeProps = {
  [CreditType.PROJECT_LEAD]: {
    title: 'Project Lead'
  },
  [CreditType.DEPARTMENT_HEAD]: {
    title: 'Department Heads'
  },
  [CreditType.TEAM]: {
    title: 'Team Members'
  },
  [CreditType.EMERITUS]: {
    title: 'Past Team Members'
  }
};

export interface Credit {
  id: string;
  username: string;
  name?: string;
  type: CreditType;
  roles?: string;
  pronouns?: string;
  bio?: string;
  discord?: string;
  steam?: string;
  email?: string;
  github?: string;
}
