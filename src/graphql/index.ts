export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatar
      description
      githubUrl
      linkedInUrl
    }
  }
`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!) {
      userCreate(input: $input) {
          user {
              name
              email
              avatar
              description
              githubUrl
              linkedInUrl
              id
          }
      }
  }
`;

