/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** InvalidInstruction: Invalid Instruction */
export class InvalidInstructionError extends ProgramError {
  readonly name: string = 'InvalidInstruction';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('Invalid Instruction', program, cause);
  }
}
codeToErrorMap.set(0x0, InvalidInstructionError);
nameToErrorMap.set('InvalidInstruction', InvalidInstructionError);

/** InvalidAccountOwner: Invalid Account owner */
export class InvalidAccountOwnerError extends ProgramError {
  readonly name: string = 'InvalidAccountOwner';

  readonly code: number = 0x1; // 1

  constructor(program: Program, cause?: Error) {
    super('Invalid Account owner', program, cause);
  }
}
codeToErrorMap.set(0x1, InvalidAccountOwnerError);
nameToErrorMap.set('InvalidAccountOwner', InvalidAccountOwnerError);

/** MintMetadataMismatch: The mint does not match the metadata account */
export class MintMetadataMismatchError extends ProgramError {
  readonly name: string = 'MintMetadataMismatch';

  readonly code: number = 0x2; // 2

  constructor(program: Program, cause?: Error) {
    super('The mint does not match the metadata account', program, cause);
  }
}
codeToErrorMap.set(0x2, MintMetadataMismatchError);
nameToErrorMap.set('MintMetadataMismatch', MintMetadataMismatchError);

/** MintTokenMismatch: The mint does not match the token account */
export class MintTokenMismatchError extends ProgramError {
  readonly name: string = 'MintTokenMismatch';

  readonly code: number = 0x3; // 3

  constructor(program: Program, cause?: Error) {
    super('The mint does not match the token account', program, cause);
  }
}
codeToErrorMap.set(0x3, MintTokenMismatchError);
nameToErrorMap.set('MintTokenMismatch', MintTokenMismatchError);

/** EditionSupplyMismatch: The edition supply is not zero */
export class EditionSupplyMismatchError extends ProgramError {
  readonly name: string = 'EditionSupplyMismatch';

  readonly code: number = 0x4; // 4

  constructor(program: Program, cause?: Error) {
    super('The edition supply is not zero', program, cause);
  }
}
codeToErrorMap.set(0x4, EditionSupplyMismatchError);
nameToErrorMap.set('EditionSupplyMismatch', EditionSupplyMismatchError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplEngraverErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplEngraverErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
