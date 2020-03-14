import { gql } from 'apollo-boost';

export const PROJECT_BY_ID = gql`
  query ProjectById($projectId: Int!) {
    project_by_pk(id: $projectId) {
      name
      password_hash
    }
  }
`;
