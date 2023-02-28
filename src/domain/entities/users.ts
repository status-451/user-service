import { randomUUID } from 'crypto';
import { Replace } from '../helpers/Replace';

export interface UserProps {
  name?: string;
  email?: string;
  active: boolean;
  role?: 'ADMIN' | 'CUSTOMER';
  password?: string;
  insertedAt: Date;
  updatedAt: Date;
}

export class User {
  private _id: String;
  private props: UserProps;

  constructor(props: Replace<UserProps, { insertedAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      insertedAt: props.insertedAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }

  public get role(): 'ADMIN' | 'CUSTOMER' {
    return this.props.role;
  }
  public set role(role: 'ADMIN' | 'CUSTOMER') {
    this.props.role = role;
  }

  public get active(): boolean {
    return this.props.active;
  }
  public set active(active: boolean) {
    this.props.active = active;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get insertedAt(): Date {
    return this.props.insertedAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
