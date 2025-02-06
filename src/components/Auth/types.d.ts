interface CustomJwtPayload extends JwtPayload {
  Id: string;
  unique_name: string;
  email: string;
  jti: string;
  UserId: string;
  AppId: string;
  RoleIds: string;
  Name: string;
  GsaId: string;
  AgentId: string;
  Gsa: string;
  Agent: string;
  role: string;
  exp: number;
  iss: string;
  aud: string;
}
