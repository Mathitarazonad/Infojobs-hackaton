export type ErrorsType = 'EmptyField' | 'EmailAlreadyInUse' | 'InvalidEmail' | 'WrongPassword' | 'PasswordTooShort'

export type ErrorMessages = {
  [K in ErrorsType]: string;
}
