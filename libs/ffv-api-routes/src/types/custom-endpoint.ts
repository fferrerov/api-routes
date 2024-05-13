import { Request, Response } from 'express';

export interface ICutomEndpointProps {
  body: Record<string, any>;
  query: Record<string, any>;
  params: Record<string, any>;
  headers: Record<string, any>;
  cookies: Record<string, any>;
  request: Request;
  response: Response;
}

export type CustomEndpoint = (props: ICutomEndpointProps) => any;
