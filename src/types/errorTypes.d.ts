export type ErrorsType = 'EmptyField' | 'PasswordTooShort' | 'EmailAlreadyInUse' | 'InvalidEmail'

export type ErrorMessages = {
  [K in ErrorsType]: string;
}
